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
        <tbody>{statusRows}</tbody>
      </table>
    );
  }
}

export default StatusTable;
