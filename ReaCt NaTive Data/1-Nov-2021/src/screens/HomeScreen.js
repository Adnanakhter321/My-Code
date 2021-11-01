import * as React from 'react';
import { View, Text, Button } from 'react-native';
function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title='TO HOME' onPress={()=>{
           navigation.navigate('Home2')
        }} />
      </View>
    );
  }
  export default HomeScreen;