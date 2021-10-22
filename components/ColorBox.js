import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColors = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, boxColors]}>
      <Text style={styles.text}>
        {colorName}:{hexCode}
      </Text>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
