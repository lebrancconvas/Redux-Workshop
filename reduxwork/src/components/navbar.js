import React , { Component } from 'react';
import styled from 'styled-components';
import '../App.css';

const Menubar = styled.nav`
  background: blue;
  padding: 10px;
`;

const ButtonMenu = styled.button`
  background: #32db2c;
`;

class Navbar extends Component{
  constructor() {
    super();
    this.state = {
      name: "Redux"
    };
  }

  reAction(){
    this.setState({name:"React-Redux"});
  }

  render(){
    return(
      <div>
        <Menubar>
          <ButtonMenu onClick={this.reAction.bind(this)}>Bulma Redux</ButtonMenu>
        </Menubar>
        <p>{this.state.name} {this.props.status}</p>
      </div>
    );
  }
}

export default Navbar;
