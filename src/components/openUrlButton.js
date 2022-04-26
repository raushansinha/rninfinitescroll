import React, { useCallback } from "react";
import { View, Alert, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { adapter } from "../utils/adapterUtil";

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    // return <Button 
    //         titleStyle={{fontSize : adapter(16)}} 
    //         title={children} 
    //         onPress={handlePress}
    //      />;

    return (
        <View style={{flex:1, padding: adapter(10)}}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={{fontSize: adapter(16), color: 'blue', textDecorationLine: 'underline'}}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OpenURLButton;
  