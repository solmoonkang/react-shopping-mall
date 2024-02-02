import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 로그인 성공
        const user = userCredential.user;
        // 이 부분에서 사용자의 정보를 처리하거나, 다른 페이지로 리다이렉트 등의 로직을 추가할 수 있습니다.
      })
      .catch((error) => {
        // 로그인 실패
        const errorCode = error.code;
        const errorMessage = error.message;
        // 이 부분에서 로그인 실패에 대한 처리를 할 수 있습니다. 예를 들어, 사용자에게 실패 메시지를 보여주는 등의 동작을 추가할 수 있습니다.
      });
  };

  return (
    <form>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="button" onClick={handleLogin}>로그인</button>
    </form>
  );
}

export default LoginPage;
