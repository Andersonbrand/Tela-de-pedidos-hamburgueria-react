import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import Burger from '../../assets/burger-home';
import Background from '../../assets/background';


function App() {


    return (
        <Container>

            <Image alt="Background-home" src={Background}></Image>
            <Image alt="Tema-da-pagina-home" src={Burger}></Image>

            <ContanierItens>
                <H1>Faça seu Pedido!</H1>

                <InputLabel>Pedido</InputLabel>
                <Input placeholder="1 Coca-Cola, 1 X-Salada"></Input>

                <InputLabel>Nome do Cliente</InputLabel>
                <Input placeholder="Steve Jobs"></Input>

                <Button onclick={addNewUsers}>
                    Novo Pedido
                </Button>
            </ContanierItens>
        </Container>
    );
}

export default App