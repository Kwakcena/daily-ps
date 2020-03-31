# 모의고사

문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

### 1. 이해

- 정답이 순서대로 들은 배열 answers 가 주어졌을 때 가장 많은 문제를 맞힌 사람을 return 하라.
- 가장 높은 점수를 받은 사람이 여럿일 경우 오름차순으로 정렬 해서 return 하라.

### 2. 계획

- 1,2,3 번 수포자가 정답을 찍는 방법을 어떻게 구현할 것인가?
- answers 배열의 index는 길이만큼 계속 증가.
- 수포자 배열은 정답을 찍은 목록이 규칙적으로 반복됨.
- 그래서 `0 ~ 수포자 배열 길이` 를 answers 길이만큼 계속 반복하면 됨.
- 예를들어 answers의 길이가 7이면 [0, 1, 2, 3, 4, 0, 1] 이렇게.
- 정답자가 여러명일땐 어떻게 할까?
- `bestScore` 변수에 제일 높은 점수값을 담는다.
- `scores` 배열을 `reduce`로 돌면서 `bestScores` 와 같다면 `concat` 으로 `index+1`을 담은 배열을 이어 붙인다.

### 3. 실행

- 정답

### 4. 반성

- reduce에서 배열을 초기값으로 쓸 때 항상 push와 if를 제거하고 어떻게 해야 하나 싶었는데, concat을 쓰니 뭔가 새로운 발견 같고 뿌듯하다.
