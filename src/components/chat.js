import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, View } from 'native-base';

export default class Chat extends Component {
    render() {
        return (
            <Container>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginBottom: 20 }} >Home page</Text>
                    <View>
                        <Button iconLeft onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}
