import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

export default class 大看板 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment textAlign='center' inverted vertical className="masthead">
            <Container text>
              <Header as='h1' inverted>意傳文化科技</Header>
              <Header as='h2' inverted>Ì-thuân bûn-huà kho-ki</Header>
            </Container>
          </Segment>
    );
  }
}
