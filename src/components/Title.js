import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const Title = (props) => <Text style={styles.text}>Issues met status: {props.status}</Text>;

Title.propTypes = {
  status: PropTypes.string.isRequired
};

Title.defaultProps = {
  status: 'Open'
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 5
  },
});

export default Title;
