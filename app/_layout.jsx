//rnfes was used in tandem with ES7+ React/Redux/React-Native snippets v4.4.3 in order to create the general schema/format of the code below

//layout.js is present in all navigation panes - so a nav bar or footer would be here
//This is your main file where you define the overall structure of your application. 
import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
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