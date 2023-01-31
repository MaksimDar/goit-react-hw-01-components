import styled from 'styled-components';

const FriendItem = styled.div`
  width: 160px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  border: 2px solid #778899;
  background-color: #ffe4b5;
`;

const List = styled.ul`
  list-style: none;
`;
const GreenCircle = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: green;
`;
const RedCircle = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: red;
`;
const StatusCircule = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FriendName = styled.h2`
  font-size: 18px;
  line-height: 1.4;
`;

export { FriendItem, List, GreenCircle, RedCircle, StatusCircule, FriendName };
