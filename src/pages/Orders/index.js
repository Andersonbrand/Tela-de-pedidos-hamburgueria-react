import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import BurgerBag from '../../assets/burger-bag.svg';
import Bin from '../../assets/bin.svg';

import H1 from '../../components/Title';
import Button from '../../components/Button';

import {
    Container,
    ContainerItens,
    Image,
    H2,
    P,
    Div,
    Order
}
    from "./styles";

function Orders() {
    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrders } = await axios.get("http://localhost:3002/users");

            setOrders(newOrders);
        };

        fetchOrders();
    }, []);

    async function deleteOrders(orderId) {
        await axios.delete(`http://localhost:3002/users/${orderId}`);
        const newOrders = orders.filter((order) => order.id !== orderId);

        setOrders(newOrders)
    }

    function goBackPage() {
        history.push("/");
    }

    return (
        <Container>

            <Image alt="Burger-bag" src={BurgerBag}></Image>

            <ContainerItens>
                {orders.map((order =>
                    <Order key={order.id}>

                        <H1>Pedidos</H1>

                        <Div>
                            <Div>
                                <P>1 Coca cola, 1 X-salada</P>
                                <H2>Steve Jobs</H2>
                            </Div>
                            <Image id="bin" alt="Bin" src={Bin}></Image>
                        </Div>

                        <Div>
                            <Div>
                                <P>1 Coca cola, 1 X-salada</P>
                                <H2>Steve Jobs</H2>
                            </Div>
                            <Image id="bin" alt="Bin" src={Bin} onClick={() => deleteOrders(order.id)}></Image>
                        </Div>

                        <Button isBack={true} onClick={goBackPage}>
                            Voltar
                        </Button>

                    </Order>
                ))}
            </ContainerItens>
        </Container>
    );
}

export default Orders