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
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <MainInfo>{label}</MainInfo>
            <StatisticsItem>{percentage}%</StatisticsItem>
          </li>
        ))}
      </StatisticsList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
