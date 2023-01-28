import styled from 'styled-components';

const Card = styled.div`
  padding: 0px 20px;

  text-align: center;
  width: 320px;
  flex-wrap: wrap;
`;
const CardList = styled.ul`
  list-style: none;
  display: flex;

  gap: 15px;
`;
const CardImage = styled.img`
  border-radius: 50%;
`;

const CardInfo = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
`;
const CardInfoSpan = styled.span`
  font-size: 20px;
  font-weight: semi-bold;
  line-height: 1.5;
  justify-content: center;
`;
const CardInfoResult = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  justify-content: center;
`;
export { Card, CardList, CardInfo, CardImage, CardInfoSpan, CardInfoResult };
