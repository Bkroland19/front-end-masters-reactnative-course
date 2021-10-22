import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ navigation, route }) => {
  //!prop destructuring
  const { colors, paletteName } = route.params;
  console.log(route.params);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewScreen');
      }}
    >
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
