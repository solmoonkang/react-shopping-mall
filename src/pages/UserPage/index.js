import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UserPage = () => {

    const email = useSelector(state => state.user.email);

    return (
        <CenterDiv>
            안녕하세요. {email} 님 반갑습니다.
        </CenterDiv>
    );
}

export default UserPage;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
