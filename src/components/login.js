import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, View} from 'native-base';

import { StackNavigator } from 'react-navigation';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginBottom: 20 }} >Login page</Text>
                    <View>
                        <Button iconRight onPress={() => this.props.navigation.navigate('Home')}>
                            <Text>Home</Text>
                            <Icon name='home' />
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}
