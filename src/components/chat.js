import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';

export default class Chat extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Button iconLeft light>
                        <Icon name='arrow-back' />
                        <Text>Back</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
