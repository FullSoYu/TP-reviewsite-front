import React from "react";
import TopbarV2 from "../Main/TopbarV2";
import { userState } from "../../recoil/user";

const MyPageConfirmUser = () => {
  const [user, setUser] = useRecoilState(userState);
  return (
    <div>
      <TopbarV2 />
      <h2 className="MypageEditTitle">회원정보수정</h2>
      <h3>회원확인</h3>
    </div>
  );
};

export default MyPageConfirmUser;
