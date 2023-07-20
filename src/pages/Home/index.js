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
  const inputOrder = useRef()
  const inputClientName = useRef()
  const inputPrice = useRef()
  const inputStatus = useRef()

  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3002/orders", {
      
    });

    setOrders([...orders, newOrder]);

    history.push("/pedidos")
  };

  return (
    <Container>
      <Image alt="logo-image" src={Burger}></Image>
      <ContainerItens>
        <H1>Pedidos!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input  placeholder="1 Coca-cola, 1 X-salada"></Input>

        <InputLabel>Nome do cliente</InputLabel>
        <Input  placeholder="Steve Jobs"></Input>

        <Button onClick={addNewOrder}>
          Novo pedido
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App