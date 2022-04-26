import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet,ScrollView, Button } from 'react-native';
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import OpenURLButton from '../../components/openUrlButton';
import { adapter, deviceWidth } from '../../utils/adapterUtil';

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      alignItems: "flex-start", 
      padding: 5 
    },
    titleStyle: {
      fontSize: adapter(16),
      width: '100%'
    },
    urlsStyle: {
      flex: 1,
      flexDirection:"row"
    },
    comicStyle: {
      flex: 3,
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    seriesStyle: {
      flex: 3,
      alignItems: "flex-start",
    },
    storiesStyle: {
      flex: 3,
      alignItems: "flex-start",
    },
    headerText: {
      fontSize: adapter(16), 
      textAlign: "center",
      marginTop:5,
      marginBottom: 5,
      fontWeight:'bold',
    },
    listItem: {
      padding: 3,
      fontSize: adapter(12)
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

const itemSeparator = () => {
  return (
    <View
     style={{ height: 1, backgroundColor: "gray", marginHorizontal:10 }}
    />
  );
};

headerText = (headerText) => (
  <Text style={styles.headerText}>
    {headerText}
  </Text>
);

const renderSmallList = (items) => {
  return(
    <ScrollView style={{ flex:1, padding: 5, width: deviceWidth}}>
        {items.map((item, index) => {
          const bgColor = index % 2 == 0 ? '#FFCCCB': 'white';
          return (
            <View style={{backgroundColor: bgColor}}>
              <Text style={styles.listItem}>{item.name}</Text>
              {/* {itemSeparator()} */}
            </View>
          );
        })}
    </ScrollView>
  );
}

const ItemDetail = ({route, navigation}) => {
  const {itemId} = route.params;
  const characterDetails = useSelector(selectCharacterDetails(itemId));
  const { name, comics, series, stories, urls} = characterDetails;
  navigation.setOptions({
    title: name,
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
      fontSize: adapter(10),
      fontWeight: 'bold'
    }
  })
  console.log(characterDetails);
  return (
      <View style={styles.container}>
        <View style={styles.comicStyle}>
          {headerText('Comics')}
          {renderSmallList(comics.items)}
        </View>
        <View style={styles.storiesStyle}>
          {headerText('Stories')}
          {renderSmallList(stories.items)}
        </View>
        <View style={styles.seriesStyle}>
          {headerText('Series')}
          {renderSmallList(series.items)}
        </View>
        <View style={styles.urlsStyle}>
          {renderUrls(urls)}
        </View>
      </View>
    );
}

export default ItemDetail;