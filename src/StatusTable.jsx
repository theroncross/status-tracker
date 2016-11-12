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
    this.setState({ transfers: data["DATA"] })
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
