import {
  MainInfo,
  StatisticSection,
  StatisticsList,
  StatisticsItem,
  StatisticHeader,
} from './Statistics.styled';
import PropTypes from 'prop-types';
const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title.length > 0 && <StatisticHeader>{title}</StatisticHeader>}

      <StatisticsList>
        {stats.map(stat => (
          <li key={stat.id}>
            <MainInfo>{stat.label}</MainInfo>
            <StatisticsItem>{stat.percentage}%</StatisticsItem>
          </li>
        ))}
      </StatisticsList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
