import {
  MainInfo,
  StatisticSection,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';
import PropTypes from 'prop-types';
const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title.length > 0 && <h2>{title}</h2>}

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
  id: PropTypes.node,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
