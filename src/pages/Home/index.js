import React, { useState, useRef, } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Burger from '../../assets/burger-home.svg';
import Background from '../../assets/background.svg';

import H1 from '../../components/Title';
import Button from '../../components/Button';

import {
    Container,
    ContainerItens,
    Image,
    InputLabel,
    Input,
}
    from "./styles";

function App() {
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const inputOrders = useRef();
    const inputName = useRef();

    async function addNewOrders() {
        const { data: newOrder } = await axios.post("http//:localhost:3002/orders", {
            order: inputOrders.current.value,
            clientName: inputName.current.value,
            price: inputOrders.current.value,
            status: inputOrders.current.value,
        });

        setOrders([...orders, newOrder])

        history.push("/Pedidos")
    };

    return (
        <Container>

            <Image alt="Background-home" src={Background}></Image>
            <Image alt="Tema-da-pagina-home" src={Burger}></Image>

            <ContainerItens>
                <H1>Faça seu Pedido!</H1>

                <InputLabel>Pedido</InputLabel>
                <Input ref={inputOrders} placeholder="1 Coca-Cola, 1 X-Salada"></Input>

                <InputLabel>Nome do Cliente</InputLabel>
                <Input placeholder="Steve Jobs"></Input>

                <Button onclick={addNewOrders}>
                    Novo Pedido
                </Button>
            </ContainerItens>

        </Container>
    );
}

export default App