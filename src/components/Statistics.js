import { MainInfo, StatisticSection } from './Statistics.styled';
const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title.length > 0 && <h2>{title}</h2>}

      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <MainInfo>{stat.label}</MainInfo>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </StatisticSection>
  );
};

export default Statistics;
