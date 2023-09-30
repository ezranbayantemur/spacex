import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {color, font, padding, typography} from '@style';

const ErrorBoundaryPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>An error occurred</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    marginTop: padding.MEDIUM,
    color: color.SMOKE,
    fontFamily: font.BOLD,
    fontSize: typography.BIG,
  },
});

export default ErrorBoundaryPage;
