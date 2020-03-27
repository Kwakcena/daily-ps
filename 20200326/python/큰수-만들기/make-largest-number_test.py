def solution(number, k):
    startIndex = 0
    maxIndex = 0
    answer = ""
    n = len(number)

    for i in range(k, n):
        maxChar = '0'
        for j in range(startIndex, i + 1):
            if maxChar < number[j]:
                maxChar = number[j]
                maxIndex = j
                if maxChar == '9': break
        answer += maxChar
        startIndex = maxIndex + 1

    return answer


def test_solution():
    assert solution("1924", 2) == "94"
    assert solution("4177252841", 4) == "775841"
    assert solution("1231234", 3) == "3234"
