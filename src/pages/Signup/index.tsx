import React from 'react';
import { FiMail, FiUser, FiLock, FiArrowLeft} from 'react-icons/fi'

import LogoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signup: React.FC = () => (
  <Container>
    <Background/>
    <Content>
      <img src={ LogoImg } alt="GoBarber"/>

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input name="password" icon={FiLock} type="password" placeholder="Senha"  />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="cadastro">
        <FiArrowLeft/>
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default Signup;