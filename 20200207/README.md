# 기능개발

문제 링크 : [기능개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

## 1. 이해

- 기능을 개발한다.
- 각 기능은 진도가 100% 일 때 반영 가능하다.
- 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발 될 수 있다.
- 앞 기능이 개발 끝나야 뒷 기능이 배포 가능하다.
- 몇 개의 기능이 배포될 수 있는가.

## 2. 계획

- progresses : 작업의 진도가 적힌 정수 배열
- speeds : 각 작업의 개발 속도가 적힌 정수 배열
- Math.ceil((100 - progresses[index])/speeds[index]) 의 계산은 남은 진도를 나타냄.
- 남은 진도가 적인 정수 배열 (remainProgresses)을 이제 어떻게 삶아먹는담.
- reduce나 map을 이용해서 삶아먹고싶다. 어떻게 할까.
- 일단 remainProgresses 까지 구해보자.

## 3. 실행

## 4. 반성
