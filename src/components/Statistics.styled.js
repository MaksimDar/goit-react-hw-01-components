import styled from 'styled-components';

const MainInfo = styled.span`
  font-size: 18px;
  line-height: 1.5;
  color: orange;
  margin-bottom: 10px;
`;

const StatisticSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
const StatisticsList = styled.ul`
  list-style: none;
`;
const StatisticsItem = styled.li`
  color: black;
`;
export { MainInfo, StatisticSection, StatisticsList, StatisticsItem };
