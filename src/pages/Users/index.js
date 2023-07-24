import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Burgerbag from '../../assets/burger-bag.svg';
import Trash from '../../assets/bin.svg';

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  Container,
  Image,
  Containerbox,
  Containertext,
  Containerp,
  Containerh2,
  Containerimg,
  Paragrafo,
  Subtitle
}
  from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/orders");

      setOrders(newOrders);
    }

    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const newOrder = orders.filter((order) => order.id !== orderId);

    setOrders(newOrder)
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="burger-bag" src={Burgerbag}></Image>
      <ContainerItens isBlur={true}>
        <H1>Pedidos</H1>

        <Containerbox >

          <Containertext>

            <Containerp>
              <Paragrafo></Paragrafo>
            </Containerp>

            <Containerh2>
              <Subtitle></Subtitle>
            </Containerh2>

          </Containertext>

          <Containerimg>
            <Image src={Trash} onclick={deleteOrder}></Image>
          </Containerimg>

        </Containerbox>


        <Containerbox>

          <Containertext>
            
            <Containerp>
              <Paragrafo></Paragrafo>
            </Containerp>

            <Containerh2>
              <Subtitle></Subtitle>
            </Containerh2>

          </Containertext>

          <Containerimg>
            <Image src={Trash} onclick={deleteOrder}></Image>
          </Containerimg>

        </Containerbox>

        <Button isBack={true} onClick={goBackPage}>
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Orders