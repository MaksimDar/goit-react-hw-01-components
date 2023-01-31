import styled from 'styled-components';

const MainInfo = styled.span`
  font-size: 20px;
  line-height: 1.5;
  color: orange;
  margin-bottom: 10px;
`;

const StatisticSection = styled.section`
  display: flex;
  width: 200px;
  padding-top: 10px;
  padding-left: 25px;
  padding-bottom: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;
const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const StatisticHeader = styled.h2`
  font-size: 24px;
  line-height: 1.5;
  color: #808000;
`;
const StatisticsItem = styled.div`
  font-size: 18px;
  line-height: 1.5;
  color: #ff0000;
`;
export {
  MainInfo,
  StatisticSection,
  StatisticsList,
  StatisticsItem,
  StatisticHeader,
};
