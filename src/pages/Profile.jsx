import React, { useContext, useEffect, useState } from 'react';
import { MbtiContext } from '../context/MbtiContext';
import { getUserProfile, updateProfile } from '../api/auth';

const Profile = () => {
  const { user, setUser } = useContext(MbtiContext);
  const [nickname, setNickname] = useState(user?.nickname || '');

  const [userData, setUserData] = useState();

  const accessToken = user?.accessToken;
  // console.log('프로필 토큰', accessToken);

  // aysnc는 useEffect 내에서 쓸 수 없음

  useEffect(() => {
    // console.log('테스트');
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    const getUserData = await getUserProfile(user.accessToken);
    console.log(getUserData);
    setUserData(getUserData);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('현재 닉네임: => ', user.nickname);
    const updateUserData = await updateProfile(user.accessToken, nickname);
    console.log(updateUserData);

    // 업데이트를 하려고하는 값(이전값)
    // 업데이트를 하기 이전의 user의 data = prev
    // 반환값에 이전값, 다음에 설정할 값
    setUser((prev) => {
      return {
        ...prev,
        ...updateUserData,
      };
    });
  };

  return (
    <>
      <div>
        <h1>마이페이지</h1>
        <p>아이디: {user.userId}</p>
        <p>닉네임: {user.nickname}</p>
      </div>
      <div>
        <h1 className="flex justify-center">프로필 수정</h1>
        <div className="my-8 grid place-items-center">
          <form onSubmit={handleSubmit}>
            <label>닉네임</label>
            <input onChange={handleNicknameChange} />
            <button type="submit">프로필 업데이트</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
