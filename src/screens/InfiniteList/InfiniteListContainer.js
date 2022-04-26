import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import InfiniteList from './InfiniteList';
import { getMarvelCharacters } from  '../../store/actions';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
});

const InfiniteListContainer = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const characterData = useSelector((state) => state.marvelCharacters) || [];

    const onLoadingCompleted= () => {
        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);
        dispatch(getMarvelCharacters(onLoadingCompleted));
    },[]);

    const itemClickHandler = (id) => {
        navigation.navigate('Details', {
            itemId: id,
        });
    }

    const getMoreDataOnEndReached = ({distanceFromEnd}) =>{
        // alert('End reached' + distanceFromEnd);
        setIsLoading(true);
        dispatch(getMarvelCharacters(onLoadingCompleted));
    }

    return (
        <SafeAreaView style={styles.container}>
          <InfiniteList 
            characters={characterData || []}
            onItemClicked={id => itemClickHandler(id)} 
            handleEndReached={getMoreDataOnEndReached}
            isLoading
          />
        </SafeAreaView>
      );
}

export default InfiniteListContainer;