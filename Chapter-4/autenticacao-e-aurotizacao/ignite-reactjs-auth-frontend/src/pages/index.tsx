import { GetServerSideProps } from "next";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import { parseCookies } from 'nookies';

import { GlobalStyle } from "../styles/global";
import { Container } from "../styles/styles";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function Home(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    }

    await signIn(data);
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button type="submit">Entrar</button>
        </form>
      </Container>
      <GlobalStyle />
    </>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {  
  return {
    props: {}
  }
});