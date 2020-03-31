import collections


def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[1]


def test_solution():
    assert solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']) == 'leo'
    assert solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
                    ['josipa', 'filipa', 'marina', 'nikola']) == 'vinko'
    assert solution(['mislav', 'stanko', 'mislav', 'ana'],
                    ['stanko', 'ana', 'mislav']) == 'mislav'
