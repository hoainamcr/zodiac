import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, View} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Login extends Component {
    render() {
        return (
            <Container>
                <Header />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff0000' }}>
                    <Button iconRight light>
                        <Text>Home</Text>
                        <Icon name='arrow-forward' />
                    </Button>
                </View>
            </Container>
        );
    }
}
