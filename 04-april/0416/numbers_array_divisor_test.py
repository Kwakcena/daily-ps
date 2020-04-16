def solution(arr, divisor):
    return list(filter(lambda x: x % divisor == 0, sorted(arr))) or [-1]
    # return arr if len(arr) else [-1]


def test_solution():
    assert solution([5, 9, 7, 10], 5) == [5, 10]
    assert solution([2, 36, 1, 3], 1) == [1, 2, 3, 36]
    assert solution([3,2,6], 10) == [-1]
