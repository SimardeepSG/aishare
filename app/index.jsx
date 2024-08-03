//Links to pay attention to
//https://www.youtube.com/watch?v=ek_IdGC0G80 - reactive native updates and general info 

import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
//allows custom routing tabs to be linked to another screen
//INDEX.js is ALWAYS mapped to the main / directory or we call home directory
//When you create a new folder in react and you put an index.js that is the default route that people will experience uncless you provide na links

export default function App() {
  return (
  <View className="flex-1 items-center justify-center bg-white">    
  {/* <View style={styles.container}> */}
      <Text className="text-3xl font-pregular">Aora!</Text>
      <Text className="font-pblack"></Text>
      <StatusBar style="auto" />
      <Link href="/home" style = {{ color: 'blue' }}> Go to Profile </Link>
      {/* in order to create links to different pages */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


