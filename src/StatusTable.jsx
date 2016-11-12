import React, { Component } from 'react';
import StatusRow from './StatusRow.jsx';
const data = require('./test.json');

class StatusTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transfers: [],
    }
  }

  componentDidMount() {
    const sortedByActive = data["DATA"].sort((a, b) => {
      if(a.end_date && !b.end_date) return -1;
      if(!a.end_date && b.end_date) return 1;
      return a.end_date < b.end_date;
    });
    this.setState({ transfers: sortedByActive });
  }

  render() {
      const statusRows = this.state.transfers.map(transfer => {
        const { id, ...props } = transfer;
        return (
          <StatusRow
            key={id}
            {...props}
          />
        )
      });

    return(
      <table className="status-table">
        <thead className="status-table__header">
          <tr>
            <th>status</th>
            <th>progress</th>
            <th>user</th>
            <th>request date</th>
          </tr>
        </thead>
        <tbody>{statusRows}</tbody>
      </table>
    );
  }
}

export default StatusTable;
