import React from 'react';
//import { useHistory } from 'react-router-dom';
//import Axios from 'axios';

import BurgerBag from '../../assets/burger-bag.svg';
import Bin from '../../assets/bin.svg';

import H1 from '../../components/Title';
import Button from '../../components/Button';

import {
    Container,
    ContainerItens,
    Image,
}
    from "./styles";

function Orders() {


    return (
        <Container>

            <Image alt="Burger-bag" src={BurgerBag}></Image>

            <ContainerItens>
                <H1>Pedidos</H1>
                <div>
                    <div>
                        <p>1 Coca cola, 1 X-salada</p>
                        <h2>Steve Jobs</h2>
                    </div>
                    <Image id="bin" alt="Bin" src={Bin}></Image>
                </div>
                <div>
                    <div>
                        <p>1 Coca cola, 1 X-salada</p>
                        <h2>Steve Jobs</h2>
                    </div>
                    <Image id="bin" alt="Bin" src={Bin}></Image>
                </div>

                <Button>
                    Voltar
                </Button>
            </ContainerItens>
        </Container>
    );
}

export default Orders