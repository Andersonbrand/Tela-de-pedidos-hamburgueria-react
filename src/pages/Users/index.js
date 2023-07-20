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
  User,
  Containerbox,
  Containertext,
  Containerp,
  Containerh2,
  Containerimg,
  Paragrafo,
  Subtitle
}
  from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  // useEffect(() => {
  // async function fetchUsers() {
  //const { data: newUsers } = await axios.get("http://localhost:3001/users");

  //setUsers(newUsers);
  //}

  //fetchUsers();
  //}, []);

  //async function deleteUser(userId) {
  /// await axios.delete(`http://localhost:3002/orders/${userId}`);
  // const newUsers = users.filter((user) => user.id !== userId);

  //setUsers(newUsers)
  //}

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
              <Paragrafo placeholder="1 Coca-cola, 1 X-salada"></Paragrafo>
            </Containerp>

            <Containerh2>
              <Subtitle placeholder="Steve Jobs"></Subtitle>
            </Containerh2>

          </Containertext>

          <Containerimg>
            <Image src={Trash}></Image>
          </Containerimg>

        </Containerbox>


        <Containerbox>

          <Containertext>

            <Containerp>
              <Paragrafo placeholder="1 Coca-cola, 1 X-salada"></Paragrafo>
            </Containerp>

            <Containerh2>
              <Subtitle placeholder="Steve Jobs"></Subtitle>
            </Containerh2>

          </Containertext>

          <Containerimg>
            <Image src={Trash}></Image>
          </Containerimg>

        </Containerbox>

        <Button isBack={true} onClick={goBackPage}>
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users