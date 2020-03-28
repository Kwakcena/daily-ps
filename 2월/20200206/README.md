# 기능개발

문제 링크 : [기능개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

## 1. 이해

- 각 배포마다 몇 개의 기능이 배포되는지? 배포는 하루에 한번.

## 2. 계획

- progresses와 speeds를 이용해서 먼저 각 작업의 남은 날짜(deadline)를 구한다.
- 남은 날짜를 구하는 방법은 Math.ceil((100 - 작업) / 속도) 이다.
- deadline을 구했으면, 오래 걸리는 작업에 맞춰서 뒤에 있는 작업의 날짜를 변경한다.(updateDeadline)
- 수정 한 deadline을 갖고 중복된 숫자에 대해 개수를 세고 객체로 반환된 value 값을 배열로 묶어 반환한다.

## 3. 실행

## 4. 반성

- 너무 복잡하게 푼 것 같은 느낌이 든다.
- updateDeadline이 꼭 필요할까? 현재 작업 날짜보다 적은 날짜는 넘기고 큰 날짜가 나오는 순간에 새로 배열에 count 값을 추가하면 될 텐데...
- deuplication (중복 제거) 부분은 중복 제거 코드를 배껴왔다. 반성하자...
