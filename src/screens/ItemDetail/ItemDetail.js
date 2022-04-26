import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import OpenURLButton from '../../components/openUrlButton';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 5 },
    urlsStyle: {
      flex: 1,
      flexDirection:"row"
    },
    titleStyle: {
      fontSize: 16,
      width: '100%'
    },
    urlsStyle: {
      flex: 1,
      flexDirection:"row"
    },
    comicStyle: {
      flex: 3,
    },
    seriesStyle: {
      flex: 3,
    },
    storiesStyle: {
      flex: 3,
    }
});

const selectCharacterDetails = (characterId) => createSelector(
  (state) => state.marvelCharacters,
  (marvelCharacters) => marvelCharacters.filter( character => character.id === characterId)[0]
);

const renderUrls = (urls) => {
   return urls.map(url => {
    return(<OpenURLButton url={url.url} children={url.type} />)
  });
};

const renderSmallList = (data) => {
  
}

const ItemDetail = ({route, navigation}) => {
  const {itemId} = route.params;
  const characterDetails = useSelector(selectCharacterDetails(itemId));
  const { name, comics, series, stories, urls} = characterDetails;
  navigation.setOptions({title: name})
  console.log(characterDetails);
  return (
      <View style={styles.container}>
        <View style={styles.comicStyle}>
        <Text style={styles.titleStyle}>Comic</Text>
        </View>
        <View style={styles.seriesStyle}>
        <Text style={styles.titleStyle}>Series</Text>
        </View>
        <View style={styles.storiesStyle}>
        <Text style={styles.titleStyle}>Stories</Text>
        </View>
        <View style={styles.urlsStyle}>
          {renderUrls(urls)}
        </View>
      </View>
    );
}

export default ItemDetail;