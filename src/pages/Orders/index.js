import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import Axios from 'axios';

import BurgerBag from '../../assets/burger-bag.svg';
import Bin from '../../assets/bin.svg';
import Container from '../../components/Container';
import H1 from '../../components/Title';
import Button from '../../components/Button';

import {
    ContanierItens,
    Image,
    Container,
  }
    from "./styles";

function Orders() {


    return (
        <Container>

            <Image alt="Burger-bag" src={BurgerBag}></Image>

            <ContanierItens>
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

                <Button onclick={addNewUsers}>
                    Voltar
                </Button>
            </ContanierItens>
        </Container>
    );
}

export default Orders