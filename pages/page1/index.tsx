import Link from "next/link";
import React from "react";

interface Page1Props {}

export default function Page1(props: Page1Props) {
  return (
    <div>
      <Link href={{ pathname: "/page1/test1", query: { age: 1 } }}>
        테스트1
      </Link>
      <Link
        href={{ pathname: "/page1/test2", query: { age: 2 } }}
        prefetch={false}
      >
        테스트2
      </Link>
    </div>
  );
}
