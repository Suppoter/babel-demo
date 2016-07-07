import React,{Component} from 'react';

class DemoComponent extends Component{
    handleClick=()=>{
      console.log('======');
    }
    render(){
        return <h1 onClick={this.handleClick}>Hello World</h1>
    }
}
