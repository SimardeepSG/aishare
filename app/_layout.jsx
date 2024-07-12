//rnfes was used in tandem with ES7+ React/Redux/React-Native snippets v4.4.3 in order to create the general schema/format of the code below

//layout.js is present in all navigation panes - so a nav bar or footer would be here
//This is your main file where you define the overall structure of your application. 
import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import React from 'react'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'


import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});
// React was not working on Web view as compapred to ExpoGo and it seemed like a css formating issue with Nativewind on browser
// credit to https://github.com/nativewind/nativewind/issues/470#issuecomment-1589092569
// this allows native wind to be able to run in web view with same formats as are seen in the app view on ExpoGo 


SplashScreen.preventAutoHideAsync();
//Makes the native splash screen (configured in app.json) remain visible until hideAsync is called.


const RootLayout = () => {

  //use "useFonts" it as you would any typical hook by doing const
  // fonts loaded is the first parameter, and error is the second in case not loaded correctly
  //call on the hook by type it "useFonts()" and passing in objects in {} of all the fonts we will use
  //start with a string and specify name and then link via a : and after you will do requite(../assets/fonts/FONTNAME/ttf),
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  
  useEffect(() => {
//giving it a callback function
//allows us to perform actions while the screen/page is loading
    if(error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  },  [fontsLoaded, error])
//dependency array
//recall function when fonts loaded changed and/or whenevr there is an error
  if (!fontsLoaded && !error) return null;
  //if no fonts loaded and no error then it will display nothing

  

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}} />
      {/* header shown will  display the name of the screen, in this case inde was at the top*/}
    </Stack>
  )
  
}

export default RootLayout

// const styles = StyleSheet.create({
// //new style class created in the container
//   container: {
//     display: 'flex',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })



//Previous Notes

//Here, you include the <slot /> component to specify where the child routes should be rendered.
//slot will automatically render the default component aka index.js. If index is not provided it will not render anything
//slot only renders child components and you need to specify them 


// return (
  //   <>
  //     <Text> Header </Text>
  //     <Slot />
  //     <Text> Fooer </Text>
  //   </>
  //using slot renders the index.jsx file here onto layout.jsx
  //reders current child route
  //can be wrapped with diff components by adding into {}

  // )
//   return (
//     <View style={styles.container}>
//       <Text>RootLayout</Text>
//     </View>
//   )