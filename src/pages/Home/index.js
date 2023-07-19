import React, { useState, useRef, } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Burger from '../../assets/burger-home.svg';

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  Container,
  Image,
  InputLabel,
  Input,
}
  from "./styles";


function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    setUsers([...users, newUser]);

    history.push("/usuarios")
  };

  return (
    <Container>
      <Image alt="logo-image" src={Burger}></Image>
      <ContainerItens>
        <H1>Pedidos!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputName} placeholder="1 Coca-cola, 1 X-salada"></Input>

        <InputLabel>Nome do cliente</InputLabel>
        <Input ref={inputAge} placeholder="Steve Jobs"></Input>

        <Button onClick={addNewUser}>
          Novo pedido
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App