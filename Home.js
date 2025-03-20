import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Nav = styled.nav`
  margin-top: 20px;
  display: flex;
  gap: 15px;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to the Reward Dashboard</Title>
      <Nav>
        <Button to="/users">Users</Button>
        <Button to="/activities">Activities</Button>
        <Button to="/rewards">Rewards</Button>
        <Button to="/admin">Admin</Button>
      </Nav>
    </Container>
  );
};

export default Home;
