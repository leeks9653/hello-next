import Head from "next/head";
import React from "react";

interface MetaProps {
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

export default function Meta({
  title,
  subTitle,
  image,
  description,
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={subTitle} />

      {/* 오픈 그래프 메타데이터 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={subTitle} />
      <meta property="og:image" content={image} />

      {/* 트위터 카드 메타데이터 */}
      <meta property="og:card" content="summary" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
