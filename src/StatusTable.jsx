import React, { Component } from 'react';
import StatusRow from './StatusRow.jsx';
const data = require('./test.json')["DATA"];

class StatusTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: null,
      transfers: [],
    }

    this.sortData = this.sortData.bind(this);
  }

  sortData(data) {
    return [...data].sort((a, b) => {
      if(a.end_date && !b.end_date) return -1;
      if(!a.end_date && b.end_date) return 1;
      return a.end_date < b.end_date;
    });
  }

  componentDidMount() {
    this.setState({ transfers: this.sortData(data) });

    // fetch(path)
    // .then(res => {
    //   console.log(res)
    //   const sortedData = this.sortData(res['DATA']);
    //   this.setState({ transfers: sortedData });
    // })
    // .catch(err => {
    //   console.error("Load error: ", err);
    //   this.setState({ errorMessage: "Problem loading data" });
    // })
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
      <div>
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
        {this.state.errorMessage}
      </div>
    );
  }
}

export default StatusTable;
