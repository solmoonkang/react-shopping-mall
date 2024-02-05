import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userActions";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUserData(userCredential.user);
            dispatch(login());
            alert('로그인이 성공적으로 완료되었습니다.');
            setEmail("");
            setPassword("");
            navigate("/");
        } catch (error) {
            console.log(error);
            if (error.code === 'auth/invalid-email') {
                alert('이메일 주소의 형식이 잘못되었습니다.');
            } else if (error.code === 'auth/user-disabled') {
                alert('해당 사용자 계정이 비활성화되었습니다.');
            } else if (error.code === 'auth/user-not-found') {
                alert('이메일 주소에 해당하는 사용자를 찾을 수 없습니다.');
            } else if (error.code === 'auth/wrong-password') {
                alert('비밀번호가 잘못되었습니다.');
            } else {
                alert('로그인에 실패하였습니다.');
            }
        }
    }

    const handleSignup = () => {
        navigate("/auth/signup");
    }

    return (
        <LoginWrapper>
            <Title>로그인</Title>
            <form onSubmit={handleLogin}>
                <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <Button type="submit">로그인</Button>
                <Signup>계정이 없습니까?<span onClick={handleSignup}>가입하기</span></Signup>
            </form>
        </LoginWrapper>
    );
}

export default LoginPage;

const LoginWrapper = styled.div`
  width: 500px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 96%;
  padding: 10px;
`;

const Signup = styled.p`
  span {
      color: grey;
      cursor: pointer;
  }
`;
