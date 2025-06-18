# Recoil 기반 TodoList

> Recoil 상태 관리 라이브러리를 활용하여 필터링, 정렬, 검색 기능을 제공하는 TodoList  
> https://react-todo-list-minseong.vercel.app/

<br>

## ✅ 주요 기능

-   **Todo CRUD**
-   **우선순위 필터링** (`상`, `중`, `하`)
-   **정렬 기능** (`최신순`, `오래된순`, `우선순위순`)
-   **키워드 검색**
-   **Recoil 기반 상태 관리**

<br>

## 🛠️ 사용 기술

-   **React 18**
-   **Recoil**
-   **Styled-components**
-   **LocalStorage**

<br>

## 📂 프로젝트 구조

```bash
src/
├── components/       # UI 컴포넌트
├── recoil/
│ ├── atoms/          # Recoil atom 정의
│ ├── selectors/      # 필터, 정렬, 검색 selector 정의
│ └── actions/        # Todo 관련 로직 분리 (setTodoList)
├── constants/        # 우선순위 관련 상수
└── App.jsx           # 루트 컴포넌트
```

<br>

## 🔄 Recoil 기반 상태 관리 흐름

### 상태 구조

| 상태 이름       | 설명                 |
| --------------- | -------------------- |
| `todoListState` | 전체 TodoList 상태   |
| `filterState`   | 선택된 우선순위 상태 |
| `sortState`     | 정렬 옵션 상태       |
| `searchState`   | 검색 키워드 상태     |
| `todoIdState`   | 새로운 Todo ID       |

### 상태 흐름

```bash
todoListState
   └── filterState     → filteredTodoList
           └── sortState       → sortedTodoList
                   └── searchState     → searchedTodoList
```

1. filteredTodoList
    - filterState에 따라 우선순위로 필터링
    - 선택된 필터가 없으면 전체 목록 반환
2. sortedTodoList
    - 최신순 / 오래된순 / 우선순위순으로 정렬
3. searchedTodoList
    - 정렬된 리스트에서 검색 키워드를 포함한 항목 필터링

> 최종적으로 UI는 `searchedTodoList`를 기준으로 렌더링됩니다.

### useTodoActions

useTodoActions는 Todo상태(todoListState)를 추상화하여 조작할 수 있는 함수들을 모아둔 커스텀 훅입니다.

| 함수 이름                    | 설명           |
| ---------------------------- | -------------- |
| `addTodo(content, priority)` | 새 Todo 추가   |
| `deleteTodo(id)`             | 특정 Todo 삭제 |
| `checkTodo(id)`              | Todo 완료 여부 |
| `updateTodo(id, updateData)` | Todo 수정      |

### 적용 효과

-   상태 분리: UI 상태와 파생 로직, 상태 변경 로직이 명확히 분리되어 유지보수가 쉬움
-   확장 용이성: 필터, 정렬, 검색, 상태 변경 로직을 독립적으로 추가/관리 가능
-   예측 가능성: 상태 흐름이 명확하게 정의되어 디버깅이 쉬움

> 모든 상태는 단방향 흐름으로 이루어져 있어 예측 가능하며 유지보수가 용이합니다.
