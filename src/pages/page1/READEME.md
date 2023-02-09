# [name].tsx 라는 파일을 생성한 후 url에 localhost:3000/...path/이경수?age=28 을 입력하게 되면

- pages 폴더 안에 있는 컴포넌트

  ```typescript
  export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { params, query } = ctx;
    // params = {name: 값}
    // query = {age:28, name: 값}
    return {
      props: {
        name: params?.name,
      },
    };
  };

  // getServerSideProps 함수의 매개변수에 담겨있는 params에 {name:값} 이 들어있는 것을 확인할 수 있다.
  ```

- pages 폴더 안에 있지 않은 경우

  ```typescript
  // pages폴더에 있지 않고 components나 다른 폴더 안에 있는 컴포넌트에서는 getServerSideProps함수를 사용할 수 없다.

  import { useRouter } from "next/router";

  const router = useRouter();

  console.log(router.query);

  // console에 {age:28, name: 값}가 찍히는 것을 확인할 수 있다.
  ```

# Link 태그

Link태그는 next에서 페이지간의 이동을 할 수 있게 해줍니다.

```typescript
import Link from "next/link";

export default function Page1(props: Page1Props) {
  return (
    <div>
      <Link href={{ pathname: "/page1/test1", query: { age: 1 } }}>
        테스트1
      </Link>
      <Link href={{ pathname: "/page1/test2", query: { age: 2 } }}>
        테스트2
      </Link>
    </div>
  );
}
// Link태그가 사용되면 next는 Link가 경로값에 해당하는 페이지들을 미리 불러온다. (네트워크 탭에서 test1, test2페이지가 다운로드가 된 것을 확인할 수 있음.)

export default function Page1(props: Page1Props) {
  return (
    <div>
      <Link href={{ pathname: "/page1/test1", query: { age: 1 } }}>
        테스트1
      </Link>
      <Link
        href={{ pathname: "/page1/test2", query: { age: 2 } }}
        prefetch={false}
        // 추가
      >
        테스트2
      </Link>
    </div>
  );
}

// prefetch를 false로 설정하면 /page1/test1에 해당하는 test1 페이지만 다운로드가 되는 것을 네트워크 탭에서 확인할 수 있다
```
