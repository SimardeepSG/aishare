// option z to wrap in vscode
// cmd D to select next instance
//cmd l to select all instances
//option + shift + F to Format 

// not technically a bitton, but actually a touchable opacity area
import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            //onPress Handler
            activeOpacity={0.7}
            //opacity once pressed
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            diables={isLoading} //disabled if loading
        // ${containerStyles} applies the prop passed styles along with the already styles in place
        >
            <Text
                className={`text-primary font-psemibold text-lg ${textStyles}`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton