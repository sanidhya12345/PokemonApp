import React, { Component } from 'react'


class CardList extends Component{
    render() {
    const style={
        backgroundColor:'#ff3',
        width:'200px',
        height:'200px',
        marginRight:'10px',
        marginTop:'10px',
        display:'inline-grid',
    }
    const main={
        width:'800px',
        height:'400px'
    }
      return (
        <div style={main}>
           <div style={style}>
            
           </div>
           <div style={style}>
            
           </div>
           <div style={style}>
            
           </div>
           <div style={style}>
            
           </div>
           <div style={style}>
            
           </div>
           <div style={style}>
            
           </div>
           <div style={style}>
            
           </div>
        </div>
      )
    }
}
export default CardList;