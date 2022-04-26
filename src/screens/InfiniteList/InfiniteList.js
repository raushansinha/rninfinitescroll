import React, { useState, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Text, Button, StatusBar, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import { adapter } from '../../utils/adapterUtil';
const styles = StyleSheet.create({
    flatList: {
        padding: adapter(15),
    }
});

const InfiniteList = ({ characters, onItemClicked, handleEndReached, isLoading }) => {
    const [selectedId, setSelectedId] = useState(null);

    const handleItemClick = (id) => {
        setSelectedId(id);
        onItemClicked(id)
    }

    const renderItem = ({ item, index }) => {
        const backgroundColor = item.id === selectedId ? "gray" : "#F0131E";
        const color = item.id === selectedId ? 'white' : 'white';
    
        return (
            <ListItem
                item={item}
                onPress={() => handleItemClick(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    const renderFooter = useMemo(() => {
        if (!isLoading) {
          return null;
        }
        return (
          <View
            style={{
              margin: adapter(10),
            }}>
            <ActivityIndicator
              color={'red'}
              size="large"
            />
          </View>
        );
      }, [isLoading]);

    
    return (
         characters && <FlatList
            style = {styles.flatList}
            data={characters}
            renderItem={renderItem}
            keyExtractor={(character, index) => index}
            extraData={selectedId}
            ListFooterComponent={renderFooter}
            initialNumToRender={10}
            initialScrollIndex={0}
            onEndReachedThreshold={0.3}
            onEndReached={handleEndReached}
        /> 
    );
}

export default InfiniteList;