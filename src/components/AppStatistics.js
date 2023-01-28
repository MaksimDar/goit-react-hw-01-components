import data from '../data.json';
import Statistics from './Statistics';
export default function AppStatistics() {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}
