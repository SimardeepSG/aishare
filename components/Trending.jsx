import { View, Text, FlatList } from 'react-native'
import React from 'react'


const Trending = ({ posts }) => {
    return (
        <FlatList
            horizontal
            //horizontal property that makes the view horizontal
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <Text className="text-3xl text-white">{item.id}</Text>
            )}
        //how each one of the items will look when destructured and mapped over


        />
    )
}

export default Trending