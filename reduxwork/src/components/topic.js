import React, { Component } from 'react';
import styled from 'styled-components';

const CenteredTopic = styled.h1`
  text-align: center;
  background: #1edbde;
  color: #e04e30;
  padding: 10vh;
`;

class Topic extends Component {
  render(){
    return(
      <CenteredTopic>Hello Redux</CenteredTopic>
    );
  }
}

export default Topic;
