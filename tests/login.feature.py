# Behave (Python) step definition
from behave import when, then

@when('the user logs in with an incorrect password')
def step_login(context):
    context.response = login(context.user, "wrong-password")

@then('the login should fail')
def step_fail(context):
    assert context.response.status_code == 401