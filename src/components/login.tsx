import styled from "styled-components";
import { CiLock } from "react-icons/ci";
const Page = styled.div`
  background: #f0f0f0;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  background: #fff;
  border-radius: 8px;
  font-size: 1rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  min-width: 540px;
  min-height: 280px;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1400c7;
    border: none;
    border-radius: 8px;
    color: #fff;
    padding: 1rem;
    height: 40px;
    width: calc(100% - 16px);
    margin: auto;
  }
  input {
    background: #e4e4e4;
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-size: 1rem;
    height: 32px;
    width: calc(100% - 16px);
  }
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1400c7;
  border-radius: 100%;
  padding: 16px;
  height: 60px;
  width: 60px;
  margin: auto;

  svg {
    height: 80%;
    width: 80%;
  }
`;
const FormInputText = styled.p`
  font-size: 1.2rem;
`;
const FormTitle = styled.p`
  color: #1400c7;
  font-size: 2rem;
  margin: auto;
`;

function LoginPage() {
  return (
    <Page>
      <Form>
        <Icon>
          <CiLock color="#fff" />
        </Icon>
        <FormTitle>Sistema de Gestão ONG</FormTitle>
        <FormInputText>Endereço de E-mail</FormInputText>
        <input type="email" />
        <FormInputText>Senha</FormInputText>
        <input type="email" />
        <button type="submit">Entrar</button>
      </Form>
    </Page>
  );
}

export default LoginPage;
