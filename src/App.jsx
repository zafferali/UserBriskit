/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.center}>
        <Text style={styles.hello}>BriskIt - Initial setup</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hello: {
    color: 'red',
    fontSize: 32,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
