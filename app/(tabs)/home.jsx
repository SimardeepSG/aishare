import { View, Text, Image, RefreshControl, RefreshControlComponent } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
  //create the refreshing state to be used when refreshing the page
  const onRefresh = async () => {
    //async error function 
    setRefreshing(true)
    //later on will add the recall function to recall the posts to see if any new videos have appeared 
    //then once retrieved we will set refreshing to false
    setRefreshing(false)
    //now we can pass the variabels to the refresh control function 

  }
  return (
    //you cannot do both horizontal and veritcal scrolling lists in scroll view which is why flat list is used independently of scroll view here
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        // used to render a list of elements but it need a set of items aka data

        data={[{ id: 1 }, { id: 2 }, { id: 3 }]} //array of objects
        //Switch to this empty data array to test the empty state component
        //data={[]}
        keyExtractor={(item) => item.$id} //callback function to get each individual thing/item and then the item.id out of that 
        renderItem={({ item }) => (
          //callback function with immediate return
          //explains to react native how we want to render everything in the list

          <Text className="text-3xl text-white">{item.id}</Text>
          //we can destricture the data from each item and display it  
        )}

        ListHeaderComponent={() => (
          // another property of flat list that is a callbakcfunction with an immediate return where we can return a view 
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back!
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  USERNAME
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode='contain'
                />

              </View>
            </View>
            {/* implementing search input component here -> similar to forms, but not the same so now we need to create a new component to take care of this*/}
            <SearchInput
              placeholder="Search for a Video Topic"
            />

            <View className="w-full flex-1 pt-5 pb-8">
              {/* for the latest videso sections */}
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>
              <Trending
                posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []}
              // ?? means that just make it the preceding value if it doesn't exist so the code doesnt break
              />
            </View>
          </View>
        )}
        //the following properties are properties/attribute sof the flatlist component
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        //a function where we can specify what happens when our list is empty

        //flatlist has a refresh control
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      // to the refresh control we pass the refresh control componenet 


      />
    </SafeAreaView>
  )
}

export default Home