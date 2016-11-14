import React, { Component } from 'react';
import StatusRow from './StatusRow.jsx';

class StatusTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transfers: this.props.data.DATA,
    }

    this.sortData = this.sortData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({ transfers: nextProps.data.DATA})
  }

  sortData(data) {
    return [...data].sort((a, b) => {
      if(a.end_date && !b.end_date) return -1;
      if(!a.end_date && b.end_date) return 1;
      return a.end_date < b.end_date;
    });
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
