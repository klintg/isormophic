import React, {Component} from "react"
import $ from "jquery"

class Chart extends Component {

  componentDidMount() {
    var link ="https://finance.yahoo.com/webservice/v1/symbols/"+this.props.stocks+"/quote?format=json&view=detail"
    console.log(link)
    $.ajax({
      url: link,
      dataType: 'jsonp',
      cache: true,
      success: function(data) {
        var x = data.list.resources[0].resource.fields
        console.log(x)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(xhr, status, err.toString())
      }.bind(this)
    })
  }

  render() {
    return(
      <div>{this.props.stocks}</div>
    )
  }
}

export default Chart
