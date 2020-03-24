# 탑

[탑](https://programmers.co.kr/learn/courses/30/lessons/42588)

### 1.이해

- 탑에서 발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신가능.
- 한번 수신된 신호는 다른 탑으로 송신되지 않는다.
- 각 탑이 쏜 신호를 어느 탑에서 받았는지 기록한 배열을 return 해라.

### 2.계획

1. solution 1번. 매우 마음에 안드는 지저분한 풀이.

```
stack.push(첫번째 top)
answer.push(0)
for(heights의 두번째 탑부터 마지막 탑까지) {
  if(stack의 맨 위 값이 현재 탑 데이터보다 크다면) {
    stack.push(현재 탑 추가)
    index = stack의 맨 마지막 탑 index값
    answer.push(i)
  }
  else {
    while(스택 맨 위 값 <= 현재 탑 데이터 높이) {
      stack.pop();
      if(stack의 마지막 값 index가 0이 아닐 때만 감소) {
        index - 1
      }
    }
    stack.push(현재 탑 데이터 추가);
    if(스택에 데이터가 하나라면 수신 가능 탑이 없는 것.) 따라서 answer.push(0);
    else {
      수신 가능 탑이 있으므로 stack 마지막 탑의 index + 1 을 push
      pop할때 감소시켰으므로 1개 추가.
    }
  }
}
```

### 3.실행

### 4.반성
