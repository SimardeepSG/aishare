// option z to wrap in vscode
// cmd D to select next instance
//cmd l to select all instances
//option + shift + F to Format 

//Links to pay attention to
//https://www.youtube.com/watch?v=ek_IdGC0G80 - reactive native updates and general info 

import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

//allows custom routing tabs to be linked to another screen
//INDEX.js is ALWAYS mapped to the main / directory or we call home directory
//When you create a new folder in react and you put an index.js that is the default route that people will experience uncless you provide na links

export default function App() {
  return (
    // ensure content does not overlap with OS trinkets like top bar and bottom bar */}
    <SafeAreaView
      className="bg-primary h-full"
    //bg for background and h for hieght
    >
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        {/* 100 percent so whole screen is scrollable. Content hieght maybe larger than some devices support */}
        <View
          className="w-full justify-center items-center h-full px-4">
          {/* px is for padding */}
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View
            className="relative mt-5">
            <Text
              className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with {' '}
              <Text className="text-secondary-200">
                Aora
              </Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode='contain'
            />
          </View>
          <Text
            className="text-sm font-pregular text-gray-100 mt-7 text-center"
          //mt = margin top 

          >
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>

        </View>

      </ScrollView>



    </SafeAreaView>
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


// Orig

// <View className="flex-1 items-center justify-center bg-white">    
// {/* <View style={styles.container}> */}
//     <Text className="text-3xl font-pblack">Aora!</Text>
//     <Text className="font-pblack"></Text>
//     <StatusBar style="auto" />
//     <Link href="/home" style = {{ color: 'blue' }}> Go to Profile </Link>
//     {/* in order to create links to different pages */}
//   </View>