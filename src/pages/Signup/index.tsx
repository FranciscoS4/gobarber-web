import React, {useCallback} from 'react';
import { FiMail, FiUser, FiLock, FiArrowLeft} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import LogoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signup: React.FC = () => {
  const handleSubmit= useCallback(async(data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, ' '),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
    <Background/>
    <Content>
      <img src={ LogoImg } alt="GoBarber"/>

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input name="password" icon={FiLock} type="password" placeholder="Senha"  />

        <Button type="submit">Cadastrar</Button>
      </Form>

      <a href="cadastro">
        <FiArrowLeft/>
        Voltar para logon
      </a>
    </Content>
  </Container>
  )
}

export default Signup;