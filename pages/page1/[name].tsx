import { GetServerSideProps } from "next";
import React from "react";
import Path from "../../src/components/Path";

interface NamePageProps {
  param: string;
}

export default function NamePage({ param }: NamePageProps) {
  return (
    <div>
      <div>안녕 값: {param}</div>
      <Path />
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params, query } = ctx;
  return {
    props: {
      param: params?.name,
    },
  };
};
