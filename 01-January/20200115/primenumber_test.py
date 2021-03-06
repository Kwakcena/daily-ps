from itertools import combinations


def solution(nums):
    return len(prime_case(nums))


def is_prime(numbers):
    return sum(numbers) in primes(sorted(numbers))


def prime_case(numbers):
    sorted_numbers = sorted(numbers)
    combinations_list = combinations(sorted_numbers, 3)
    return [list(xs) for xs in combinations_list if is_prime(xs)]


def primes(sorted_numbers):
    max_number = sum(sorted_numbers[-3:])
    prime_numbers = set(range(2, max_number + 1))
    for i in range(2, max_number + 1):
        if i not in prime_numbers:
            continue
        prime_numbers -= set(range(i * 2, max_number + 1, i))
    return list(prime_numbers)


def test_primes():
    assert primes([1, 2, 3, 4]) == [2, 3, 5, 7]
    assert primes([1, 2, 4, 6, 7]) == [2, 3, 5, 7, 11, 13, 17]


def test_solution():
    assert solution([1, 2, 3, 4]) == 1
    assert solution([1, 2, 7, 6, 4]) == 4


def test_is_prime():
    assert not is_prime([1, 2, 3])
    assert is_prime([1, 2, 4])
    assert not is_prime([1, 3, 4])
    assert not is_prime([2, 3, 4])


def test_prime_case():
    assert prime_case([1, 2, 3, 4]) == [[1, 2, 4]]
    assert prime_case([1, 2, 7, 6, 4]) == [
        [1, 2, 4], [1, 4, 6], [2, 4, 7], [4, 6, 7]
    ]
