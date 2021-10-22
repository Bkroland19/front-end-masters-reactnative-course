import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PalettePreview = ({ palette, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
    </TouchableOpacity>
  );
};

export default PalettePreview;
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
