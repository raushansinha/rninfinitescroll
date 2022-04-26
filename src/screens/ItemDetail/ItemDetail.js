import * as React from 'react';
import { View, Text } from 'react-native';

const ItemDetail = ({itemId}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Selected Item Details {itemId}</Text>
        </View>
      );
}

export default ItemDetail;