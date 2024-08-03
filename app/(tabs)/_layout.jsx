// option z to wrap in vscode
// cmd D to select next instance
//cmd l to select all instances



import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';

// Tab Icon is a react functional component
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      className="items-center justify-center gap-2"
    >
      {/* view is like a div */}
      <Image
      // image will come directly from react native 
        source={icon}
        //image will accept a soruce that we can pass into the tab icon functional compoenent
        //we will need to destructure somethigns so we have acess to variables like icon color etc etc passing it through the function like above
        resizeMode="contain"
        tintColor={color}
        //color is coming from props
        className="w-6 h-6"
        //from nativewind not talkwind
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style = {{ color: color }}
      >
        {/* dynamic template string aka ` not ' so 
        $ means if  
        {} is where ht elogic happens
         ? is asking whether it is focused
         ; is the else portion */}
        {/* we need to syle it via using the className attribute */}
        {/* we want to modify the state depending on if it is focused or not, aka in use or not */}
          {name}
        </Text>
    </View>
  )

}

const TabsLayout = () => {
  return (
<>
    <Tabs
    screenOptions={{
      // STYLING OF THE TABS BAR!
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FFA001',
      tabBarInactiveTintColor: '#CDCDE0',
      tabBarStyle: {
        backgroundColor: '#161622',
        // yes it is a promary color in the tailwind config but we are within an object passing to the screen options so we still have to type it out manually just in this case
        borderTopWidth: 1,
        borderTopColor: '#232533',
        height: 84,
      }
    }}
    // removes the auto generated label from teh tabs componenet
    >
        {/* envoking tabs calls all the tabs to the bottom of the screen */}
        
        <Tabs.Screen
        //tabs screen will only show up in the tabs compoenent
            name="home"
            // property of name is equal to home 
            options={{
              //additional options and options is an object with the following properties
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                // a call back function where we can destructure the color and focus state and return the icon we want to show
                //importan to use JUST PARENTHESIES and not open a function block 
                <TabIcon 
                  // we want to pass the icon into it 
                  //BUT we need to import the icons as shown above
                  //we need to pass in all variables to the Tab Icon fucntional component

                  icon={icons.home}
                  color={color}
                  name="Home"
                  focused={focused}


                />
              )

            }}
        />
        <Tabs.Screen
            name="bookmark"
            options={{
              title: 'Bookmark',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon 
                  icon={icons.bookmark}
                  color={color}
                  name="Bookmark"
                  focused={focused}
                />
              )

            }}
        />
        <Tabs.Screen
            name="create"
            options={{
              title: 'Create',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon 
                  icon={icons.upload}
                  color={color}
                  name="Create"
                  focused={focused}
                />
              )

            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon 
                  icon={icons.profile}
                  color={color}
                  name="Profile"
                  focused={focused}
                />
              )

            }}
        />
    </Tabs>
</>
  )
}

export default TabsLayout


