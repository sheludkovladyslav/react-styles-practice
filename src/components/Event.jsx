import styled from "styled-components";
import { CiLocationOn, CiUser, CiCalendar, CiClock1 } from "react-icons/ci";

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 0px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Item = styled.li`
  background-color: #f8e5da;
  border: 2px solid #d3b79f;
  padding: 20px 25px 20px 15px;
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 100px) / 3);
  box-sizing: border-box;
`;

const Label = styled.p`
  margin-bottom: 5px;
  margin-top: 0;
`;

const calculateTimeOfStart = (start) => {
  const dateStart = new Date(start);

  const time = dateStart.toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return time;
};

const calculateTimeDifference = (start, end) => {
  const timeStart = new Date(start);
  const timeEnd = new Date(end);

  const differenceInHours = (timeEnd - timeStart) / (1000 * 60 * 60);

  return differenceInHours;
};

export const Event = ({ name, start, end, location, speaker }) => {
  return (
    <Item>
      <Title>{name}</Title>
      <Container>
        <CiLocationOn size={20}></CiLocationOn>
        <Label>{location}</Label>
      </Container>

      <Container>
        <CiUser size={20}></CiUser>
        <Label>{speaker}</Label>
      </Container>

      <Container>
        <CiCalendar size={20}></CiCalendar>
        <Label>{calculateTimeOfStart(start)}</Label>
      </Container>
      <Container>
        <CiClock1 size={20}></CiClock1>
        <Label>{calculateTimeDifference(start, end)}Hrs</Label>
      </Container>
    </Item>
  );
};
