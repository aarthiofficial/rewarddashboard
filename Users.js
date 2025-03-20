import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectAllUsers } from "../features/users/usersSlice";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li`
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <Title>Users</Title>
      <UserList>
        {users.map((user) => (
          <UserItem key={user.id}>{user.name} - {user.points} Points</UserItem>
        ))}
      </UserList>
    </Container>
  );
};

export default Users;
