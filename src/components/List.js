import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Title from './Title';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = { issues: [] };
    }

    componentDidMount() {
        fetch('https://vives.pimaxplus.com/issues.php')
            .then(res => res.json())
            .then(data => {
                this.setState({ issues: data }); 
                })
            .catch(err => console.log(err));  
    }

    renderItem({ item }) {
        const extractId = (id) => id.substr(3);
        const toUpper = (text) => text.substr(0, text.indexOf(' ')).toUpperCase();
        const { assigned, id, description } = item;
        const { container, property } = styles;

        return (
            // eslint-disable-next-line max-len
            <View style={[container, { backgroundColor: assigned === 'Katerina larson' ? '#f3b7b763' : '#9393d28c' }]}>
                <Text>
                    <Text style={property}>ID: </Text>
                    {extractId(id)}
                </Text>
                <Text>
                    <Text style={property}>Omschrijving: </Text>
                    {description}
                </Text>
                <Text>
                    <Text style={property}>Toegewezen aan: </Text>
                    {toUpper(assigned)}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Title status={this.props.status} />
                <FlatList
                    sections={this.state.issues.filter(issue => issue.status === this.props.status)}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    marginBottom: 10,
    padding: 5
  },
  property: {
    fontWeight: '600'
  }
});


export default List;
