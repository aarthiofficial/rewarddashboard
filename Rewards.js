import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRewards, selectAllRewards } from "../features/rewards/rewardsSlice";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const RewardList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RewardItem = styled.li`
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Rewards = () => {
  const dispatch = useDispatch();
  const rewards = useSelector(selectAllRewards);

  useEffect(() => {
    dispatch(fetchRewards());
  }, [dispatch]);

  return (
    <Container>
      <Title>Rewards</Title>
      <RewardList>
        {rewards.map((reward) => (
          <RewardItem key={reward.id}>{reward.name} - {reward.points} Points</RewardItem>
        ))}
      </RewardList>
    </Container>
  );
};

export default Rewards;
