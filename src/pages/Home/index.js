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
  const [orders, setOrders] = useState([]);
  const history = useHistory()
  const inputOrders = useRef()
  const inputClientName = useRef()

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      order: inputOrders.current.value,
      clientName: inputClientName.current.value
    });

    setOrders([...orders, newOrder]);

    history.push("/pedidos")
  };


  return (
    <Container>
      <Image alt="logo-image" src={Burger}></Image>
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="1 Coca-cola, 1 X-salada"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Steve Jobs"></Input>

        <Button onClick={addNewOrder}>
          Novo Pedido
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App