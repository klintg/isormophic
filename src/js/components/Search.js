import React, {Component} from "react"
import Chart from "./Chart.js"

class Search extends Component {
  constructor() {
    super();
    this.state = {
      symbol: ''
    }
  }
  render() {
    return (
      <div>
        <div className="search-form">
          <h1 className="text-center">Enter Stock Symbol</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
            <input type="text" className="form-control" ref="symbol" placeholder="Enter stock...." />
            </div>
            <button className="btn btn-success btn-block">Search</button>
          </form>
        </div>
        <Chart stocks={this.state.symbol}/>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault()

    this.setState({symbol :this.refs.symbol.value.trim()})

    this.refs.symbol.value = ''
  }

}

export default Search
