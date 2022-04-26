import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { adapter } from '../../utils/adapterUtil';

const styles = StyleSheet.create({
    item: {
      padding: 15,
      marginVertical: 1,
      marginHorizontal: 5,
      flex: 1,
      alignItems: "flex-start"
    },
    title: {
      fontSize: adapter(24),
    },
});

const ListItem = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.name}</Text>
    </TouchableOpacity>
);

export default ListItem;
