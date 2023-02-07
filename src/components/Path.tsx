import { useRouter } from "next/router";
import React from "react";

interface PathProps {}

export default function Path(props: PathProps) {
  const router = useRouter();
  return (
    <div>
      <div>Path 컴포넌트 값: {router.query.name}</div>
    </div>
  );
}
