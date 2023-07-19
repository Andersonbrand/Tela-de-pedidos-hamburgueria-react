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
  User
}
  from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers)
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="burger-bag" src={Burgerbag}></Image>
      <ContainerItens isBlur={true}>
        <H1>Pedidos!</H1>

        <ul>
          {users.map((user =>
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users