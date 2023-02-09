import { GetServerSideProps } from "next";
import React from "react";

interface UsersProps {}

export default function Users(props: UsersProps) {
  console.log(props);
  return (
    <div>
      <div></div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      user: "",
    },
  };
};
