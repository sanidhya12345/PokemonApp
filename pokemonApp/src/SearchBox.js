import React, { Component } from 'react'

class SearchBox extends Component{
    render() {
      const input={
        fontSize:'30px',
        border:'2px solid #000',
        borderRadius:'10px'
      }
      return (
        <div>
          <input type='text' name='search' placeholder='Search Pokemon' style={input} onChange={this.props.onchange}></input>
        </div>
      )
    }
}
export default SearchBox;