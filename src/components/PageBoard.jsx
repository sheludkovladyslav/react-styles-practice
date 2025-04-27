import styled from "styled-components";
import { Event } from "./Event";

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const PageBoard = ({ events }) => {
  return (
    <List>
      {events.map((child) => {
        return (
          <Event
            name={child.name}
            start={child.time.start}
            end={child.time.end}
            location={child.location}
            speaker={child.speaker}
          ></Event>
        );
      })}
    </List>
  );
};
