import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { fetchActivities } from "../features/activities/activitiesSlice";
import { fetchRewards } from "../features/rewards/rewardsSlice";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Section = styled.div`
  margin: 20px 0;
  padding: 15px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const activities = useSelector((state) => state.activities.list);
  const rewards = useSelector((state) => state.rewards.list);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchActivities());
    dispatch(fetchRewards());
  }, [dispatch]);

  return (
    <Container>
      <Title>Admin Dashboard</Title>
      <Section>
        <h2>Users Overview</h2>
        <p>Total Users: {users.length}</p>
      </Section>
      <Section>
        <h2>Activities Overview</h2>
        <p>Total Activities: {activities.length}</p>
      </Section>
      <Section>
        <h2>Rewards Overview</h2>
        <p>Total Rewards: {rewards.length}</p>
      </Section>
    </Container>
  );
};

export default AdminDashboard;
