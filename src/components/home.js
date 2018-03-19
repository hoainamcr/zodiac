import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, View } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginBottom: 20 }} >Home page</Text>
                    <View>
                        <Button iconLeft style={{ marginBottom: 20 }} onPress={()=> this.props.navigation.goBack()} >
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                        <Button iconRight onPress={() => this.props.navigation.navigate('Chat')}>
                            <Text>Chat</Text>
                            <Icon name='arrow-forward' />
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}
