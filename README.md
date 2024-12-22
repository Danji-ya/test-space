# Todo Polling 및 Prefetching: 성능 비교

## 개요

이 프로젝트는 간단한 `Todo List` 애플리케이션에서 Polling과 Prefetching의 기능을 구현하는 예시 프로젝트입니다.

1. **Polling:** 자동 주기적으로 데이터를 가져오는 방법.
2. **Prefetching:** 사용자 경험을 최적화하기 위해 데이터를 미리 가져오는 방법.

이와 관련된 영상을 통해 Polling과 Prefetching 구현 전후의 차이를 강조합니다:

- Polling 동작 영상
- Prefetching 구현 전후 비교 영상

## 주요 기능

- **실시간 Polling 업데이트**
  - `refetchInterval`을 사용하여 주기적으로 데이터 가져오기.
  - 초록색 원 애니메이션으로 데이터 가져오는 중임을 표시.
- **Prefetching 최적화**
  - 사용자 행동 또는 내비게이션에 따라 데이터를 미리 가져옴.
  - Prefetching 구현 전후 성능 비교.

## 기술 스택

- **프론트엔드 프레임워크:** Next.js
- **스타일링:** Tailwind CSS
- **비동기상태 관리:** TanStack Query

## 설치 방법

1. 레포지토리 클론:
   ```bash
   git clone https://github.com/Danji-ya/study-space.git
   cd polling-prefetching
   ```
2. 종속성 설치:
   ```bash
   npm install
   ```
3. 환경 변수 설정:
   - `.env.local` 파일 생성.
   - API 도메인 추가:
     ```env
     NEXT_PUBLIC_DOMAIN=http://localhost:3000
     ```
4. 개발 서버 실행:
   ```bash
   npm run dev
   ```

## 사용 방법

### Polling

Polling은 설정 가능한 간격으로 구현되어 있습니다.

- **Query Interval speed (ms)**로 레이블된 입력 필드를 사용하여 Polling 간격을 조정합니다.
- 초록색 원 애니메이션은 새로운 데이터를 가져오는 중임을 나타냅니다.

### Prefetching

Prefetching은 내비게이션 또는 사용자 상호작용 시 데이터를 미리 가져와 대기 시간을 줄입니다.

- 애플리케이션 로드 시 미리 가져온 데이터가 즉시 적용되는 것을 확인할 수 있습니다.
- Tanstack Query의 `prefetchQuery` 함수를 사용하여 Prefetching이 프로그래밍적으로 트리거됩니다.

## 영상

### Polling 예제

![polling-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/97f1360c-766f-4b65-a8d2-08175c9121ce)

### Prefetching 비교

|                                                                Before                                                                |                                                                after                                                                |
| :----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| ![prefetch-before-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/12b341cb-18af-4212-9577-1d950a1f8403) | ![prefetch-after-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/be2b40ca-9c9a-40e2-ad19-24c6663ed7c7) |

## 코드 하이라이트

### Polling 구현

```tsx
const { data: todos, isFetching } = useQuery({
  queryKey: ["todos"],
  queryFn: getTodos,
  refetchInterval: intervalMs, // 동적으로 Polling 간격 설정
});
```

### Prefetching 구현

```tsx
//tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#prefetching-and-dehydrating-data

https: queryClient.prefetchQuery(["todos"], getTodos);
```
