### 이상한 문자 만들기

문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12930

### 1.이해

- 각 단어의 짝수번째 알파벳은 대문자로
- 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하라.
- 문자열 전체의 짝/홀수가 아님. 각 단어를 기준으로.

### 2.계획

- 공백을 기준으로 나눈다.
- 각 문자열에 대해서 짝/홀 인덱스에 따라 upper, lower를 적용한다.
- 다시 붙여서 반환한다.