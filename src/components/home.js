import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Button iconLeft light>
                        <Icon name='arrow-back' />
                        <Text>Back</Text>
                    </Button>
                    <Button iconRight light>
                        <Text>Chat</Text>
                        <Icon name='arrow-forward' />
                    </Button>
                </Content>
            </Container>
        );
    }
}
