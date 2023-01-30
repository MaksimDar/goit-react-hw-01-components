import PropTypes from 'prop-types';
import { Table, TableTh, TableTd } from './Transaction.styled';
const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableTd>{item.type}</TableTd>
            <TableTd>{item.amount}</TableTd>
            <TableTd>{item.currency}</TableTd>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
