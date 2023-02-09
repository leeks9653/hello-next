import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

interface PagesProps {}

export default function Pages(props: PagesProps) {
  return (
    <Html>
      {/* 공통으로 적용되는 메타데이터를 적용할 때 사용함. */}
      <Head />
      <body>
        {/* 페이지 컴포넌트를 '렌더링' 하는 곳 */}
        <Main />
        {/* 자바스크립트 코드를 처리하는 커스텀 스크립트 */}
        <NextScript />
      </body>
    </Html>
  );
}
