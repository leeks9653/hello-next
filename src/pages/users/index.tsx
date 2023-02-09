import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

interface UsersProps {}

export default function Users(props: UsersProps) {
  return (
    <div>
      <div></div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // 유저의 데이터를 가져오는 api 실행
  // const usersReq = await axios.get("api 경로");

  // 유저의 데이터가 없어서 404응답이 오게 되면 notFound를 true로 설정
  //   if (usersReq.status === 404) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  return {
    props: {
      users: [],
    },
  };
};
