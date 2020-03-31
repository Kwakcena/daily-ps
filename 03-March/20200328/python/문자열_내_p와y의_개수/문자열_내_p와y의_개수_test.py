def solution(str):
    return str.lower().count('p') == str.lower().count('y')

def test_solution():
    assert solution("pPoooyY") == True
    assert solution("Pyy") == False
