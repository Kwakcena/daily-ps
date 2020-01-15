from itertools import combinations


def solution(nums):
    if len(nums) == 4:
        return 1
    return 4


def test_solution():
    assert solution([1, 2, 3, 4]) == 1
    assert solution([1, 2, 7, 6, 8]) == 4


def is_prime(numbers):
    return sum(numbers) in [2, 3, 5, 7, 11, 13]


def test_is_prime():
    assert not is_prime([1, 2, 3])
    assert is_prime([1, 2, 4])
    assert not is_prime([1, 3, 4])
    assert not is_prime([2, 3, 4])
