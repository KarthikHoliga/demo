import pytest

TIMEOUT = 10  # always set a timeout, or a hung request freezes the suite


# ---------- GET ----------
def test_get_all_posts(session, base_url):
    response = session.get(f"{base_url}/posts", timeout=TIMEOUT)

    assert response.status_code == 200
    assert "application/json" in response.headers["Content-Type"]
    posts = response.json()
    assert isinstance(posts, list)
    assert len(posts) == 100


def test_get_single_post_schema(session, base_url):
    response = session.get(f"{base_url}/posts/1", timeout=TIMEOUT)

    assert response.status_code == 200
    body = response.json()
    assert body["id"] == 1
    assert isinstance(body["userId"], int)
    assert isinstance(body["title"], str) and body["title"]
    assert isinstance(body["body"], str) and body["body"]
    assert set(body.keys()) == {"userId", "id", "title", "body"}


@pytest.mark.parametrize("post_id", [1, 2, 50, 100])
def test_get_post_by_id(session, base_url, post_id):
    response = session.get(f"{base_url}/posts/{post_id}", timeout=TIMEOUT)

    assert response.status_code == 200
    assert response.json()["id"] == post_id


def test_filter_posts_by_user(session, base_url):
    response = session.get(
        f"{base_url}/posts", params={"userId": 1}, timeout=TIMEOUT
    )

    assert response.status_code == 200
    posts = response.json()
    assert len(posts) == 10
    assert all(p["userId"] == 1 for p in posts)


def test_get_comments_for_post(session, base_url):
    response = session.get(f"{base_url}/posts/1/comments", timeout=TIMEOUT)

    assert response.status_code == 200
    comments = response.json()
    assert len(comments) == 5
    assert all(c["postId"] == 1 for c in comments)
    assert all("@" in c["email"] for c in comments)


# ---------- Negative ----------
@pytest.mark.parametrize("post_id", [0, 101, 99999])
def test_get_nonexistent_post_returns_404(session, base_url, post_id):
    response = session.get(f"{base_url}/posts/{post_id}", timeout=TIMEOUT)

    assert response.status_code == 404


# ---------- POST ----------
def test_create_post(session, base_url):
    payload = {"title": "SDET practice", "body": "Testing APIs", "userId": 1}

    response = session.post(f"{base_url}/posts", json=payload, timeout=TIMEOUT)

    assert response.status_code == 201
    body = response.json()
    assert body["title"] == payload["title"]
    assert body["body"] == payload["body"]
    assert body["userId"] == payload["userId"]
    assert "id" in body


# ---------- PUT ----------
def test_update_post_put(session, base_url):
    payload = {"id": 1, "title": "Updated", "body": "New body", "userId": 1}

    response = session.put(f"{base_url}/posts/1", json=payload, timeout=TIMEOUT)

    assert response.status_code == 200
    assert response.json()["title"] == "Updated"


# ---------- PATCH ----------
def test_update_post_patch(session, base_url):
    response = session.patch(
        f"{base_url}/posts/1", json={"title": "Patched"}, timeout=TIMEOUT
    )

    assert response.status_code == 200
    body = response.json()
    assert body["title"] == "Patched"
    assert body["id"] == 1  # untouched fields are preserved


# ---------- DELETE ----------
def test_delete_post(session, base_url):
    response = session.delete(f"{base_url}/posts/1", timeout=TIMEOUT)

    assert response.status_code == 200


# ---------- Non-functional ----------
def test_response_time_is_reasonable(session, base_url):
    response = session.get(f"{base_url}/posts", timeout=TIMEOUT)

    assert response.elapsed.total_seconds() < 3