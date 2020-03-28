from itertools import combinations


def solution(numbers):
    return len(prime_case(numbers))


def primes(sorted_numbers):
    max_number = sum(sorted_numbers[-3:])
    prime_numbers = set(range(2, max_number + 1))
    for i in range(2, max_number + 1):
        if i not in prime_numbers:
            continue
        prime_numbers -= set(range(i * 2, max_number + 1, i))
    return prime_numbers


def prime_case(numbers):
    sorted_numbers = sorted(numbers)
    prime_numbers = primes(sorted_numbers)
    return [
        xs
        for xs in combinations(sorted_numbers, 3)
        if sum(xs) in prime_numbers
    ]


def test_primes():
    assert primes([1, 2, 3, 4]) == {2, 3, 5, 7}
    assert primes([1, 2, 4, 6, 7]) == {2, 3, 5, 7, 11, 13, 17}


def test_prime_case():
    assert prime_case([1, 2, 3, 4]) == [(1, 2, 4)]


def test_solution():
    assert solution([1, 2, 3, 4]) == 1
    assert solution([1, 2, 7, 6, 4]) == 4


def test_combinations():
    assert list(combinations([1, 2, 3, 4], 3)) == [
        (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
    ]
    assert list(combinations([1, 2, 4, 6, 7], 3)) == [
        (1, 2, 4), (1, 2, 6), (1, 2, 7), (1, 4, 6), (1, 4, 7), (1, 6, 7),
        (2, 4, 6), (2, 4, 7), (2, 6, 7), (4, 6, 7)
    ]
