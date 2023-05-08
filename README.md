# Daily planner API
Java Spring Task Manager

### 회원가입
- 로그인 / 로그아웃

### 다이어리 사용
- 날짜 설정
- Comment 등록
- Tasks 작성 (카테고리)
- 


## ERD
### User
Todo 앱을 사용하는 사용자를 나타냅니다.
User 테이블은 일반적으로 사용자의 ID, 이름, 이메일 주소, 비밀번호 등을 포함합니다.
- user_id
- name
- email
- password

### Todo
할 일을 나타냅니다.
Todo 테이블은 제목, 내용, 마김일, 우선순위 등을 포함합니다.
- todo_id
- title
- description
- priority
- due_date
- status
- user_id
-category_id


### Category
할 일을 분류하는 데 사용됩니다.
- category_id
- name
- description
- user_id

### Comment
할 일에 대한 논의나 메모를 저장합니다.
- comment_id
- todo_id
- user_id
- comment_text
- created_at

## Trouble Shooting
https://github.com/Yoo-Ha-young/daily-planner/blob/main/doc/TROUBLE_SHOOTING.md

## Task Stack
- Java 11
- Spring 2.7
- 템플릿 엔진 (Thymeleaf)
- Spring Data JPA
- MySQL
