import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const auth = getAuth();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('회원가입이 성공적으로 완료되었습니다.');
            setEmail("");
            setPassword("");
            navigate("/auth/login");
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('해당 이메일로 이미 계정이 등록되어 있습니다.');
            } else {
                console.log(error);
            }
        }
    }

    return (
        <SignupWrapper>
            <Title>회원가입</Title>
            <form onSubmit={handleSignup}>
                <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <Button type="submit">회원가입</Button>
            </form>
        </SignupWrapper>
    );
}

export default SignupPage;

const SignupWrapper = styled.div`
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
