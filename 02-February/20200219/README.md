# 오픈 채팅방

문제 링크 : [오픈 채팅방](https://programmers.co.kr/learn/courses/30/lessons/42888)

### 1. 이해

- 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성
- 닉네임을 바꾸는 방법은 1. 나가서 다시 들어오면서 바꾸거나, 2. 안에서 바꾸거나.
- 닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.
- 유저 아이디는 중복되지 않으며 유일하다.
- 알파벳 대문자, 소문자, 숫자로만 이루어져 있으며, 잘못된 입력은 없음.

### 2. 계획

- { [유저 아이디] : "닉네임" } 객체를 이용한다.
- 먼저 입력 데이터가 들어오면 split이나 정규표현식을 이용해 나눈다.
- "Enter uid1234 Muzi" -> ["Enter", "uid1234", "Muzi"]
- 나눈 데이터에서 [유저 아이디]와 "닉네임"을 객체에 추가한다. 기존에 있었던 [유저 아이디] 라면 새로운 "닉네임"으로 갱신 될 것이고, 없었다면 새로 추가하게 될 것이다.
- 또한 나눈 데이터에서 채팅 기록을 담는 배열이 필요하다. 이 배열은 첫 단어와 [유저 아이디]를 갖고 있으며 추후에 최종 대화를 산출할 때 필요하다.

### 3. 실행

### 4. 반성
