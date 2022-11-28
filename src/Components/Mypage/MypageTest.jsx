import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../utils";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";
import TopbarV2 from "../Main/TopbarV2";
import "../../Style/Mypage/MypageTest.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const MypageTest = () => {
  const [user, setUser] = useRecoilState(userState);
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function setting() {
    setId(user.id);
    setNickname(user.nickname);
    setUsername(user.username);
    setUserid(user.userid);
    setPassword(user.password);
    setEmail(user.email);
  }

  useEffect(() => {
    setting();
  }, []);

  function changeNickname(e) {
    setNickname(e.target.value);
  }

  return (
    <div>
      <TopbarV2 />
      <h2 className="MypageEditTitle">회원정보수정</h2>
      <div className="MypageEditBoxContainer">
        <div className="MypageEditBox">
          {/* <FontAwesomeIcon icon={faUserSecret} className="Usericon" /> */}
          <div className="MypageEdit_userIdbox">
            <div className="MypageEdit_userIdbox_subject MyPageEdit_box_subject">
              ID
            </div>
            <div className="MypageEdit_userIdbox_ID MyPageEdit_box_content">{`${userid}`}</div>
          </div>
          <div className="MypageEdit_usernamebox">
            <div className="MypageEdit_usernamebox_subject MyPageEdit_box_subject">
              이름
            </div>
            <div className="MypageEdit_usernamebox_username MyPageEdit_box_content">{`${username}`}</div>
          </div>
          <div className="MypageEdit_nicknamebox">
            <div className="MypageEdit_nicknamebox_subject MyPageEdit_box_subject">
              별명
            </div>
            <div className="MypageEdit_nicknamebox_nickname MyPageEdit_box_content">
              <input
                type="text"
                onChange={changeNickname}
                value={nickname}
              ></input>
            </div>
          </div>
          <div className="MypageEdit_passwordbox">
            비밀번호 변경
            <div className="MypageEdit_passwordbox_newpasswordbox_subject MypageEdit_box_subject">
              새 비밀번호입력
            </div>
            <div className="MypageEdit_passwordbox_newpasswordbox_content MyPageEdit_box_content">
              <input type="text" onChange={changeNickname} value={""}></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageTest;