import React, { Component } from 'react';
import StatusTable from './StatusTable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      errorMessage: null,
      selected: 'test',
      files: {
        test: './test.json',
        test2: './test2.json',
        test3: './test3.json',
        test4: './test4.json',
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentWillMount() {
    this.loadData(this.state.selected);
  }

  loadData(selected) {
    fetch(this.state.files[selected])
    .then(res => res.json())
    .then(data => {
      this.setState({ data, selected, errorMessage: null });
    })
    .catch(err => {
      console.error("Load error: ", err);
      this.setState({ errorMessage: "Problem loading data", data: [] });
    })
  }

  handleChange(event) {
    this.loadData(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <select className="data-selector" value={this.state.selected} onChange={this.handleChange} >
          <option value='test'>test1</option>
          <option value='test2'>test2</option>
          <option value='test3'>test3</option>
          <option value='test4'>test4</option>
        </select>
        {this.state.data.DATA && <StatusTable data={this.state.data.DATA} />}
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default App;
