import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, selectAllActivities } from "../features/activities/activitiesSlice";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector(selectAllActivities);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <Container>
      <Title>Activities</Title>
      <ActivityList>
        {activities.map((activity) => (
          <ActivityItem key={activity.id}>{activity.description} - {activity.points} Points</ActivityItem>
        ))}
      </ActivityList>
    </Container>
  );
};

export default Activities;
