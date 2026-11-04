def binary_search(arr, target):
    """Return the index of target in a sorted list, or -1 if not found."""
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1


if __name__ == "__main__":
    print(binary_search([1, 3, 5, 7, 9, 11], 7))   # 3
    print(binary_search([1, 3, 5, 7, 9, 11], 4))   # -1