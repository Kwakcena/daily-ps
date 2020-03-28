import re


def solution(str):
    return len(re.compile('y', re.I).findall(str)) == len(
        re.compile('p', re.I).findall(str))


def test_solution():
    assert solution("pPoooyY") == True
    assert solution("Pyy") == False
