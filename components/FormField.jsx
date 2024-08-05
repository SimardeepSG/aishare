import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { icons } from '../constants'
const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    //  In the context of the FormField component, the spread operator (...props) is used for a different purpose: to pass down any additional props that were not explicitly listed. This is slightly different from the earlier use of the spread operator to create a shallow copy of an object. (in sign-in.jsx)
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text
                className="text-base text-gray-100 font-pmedium"
            >
                {title}
            </Text>
            <View className=" border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focud:border-secondary items-center flex-row">
                {/* flex row is what allowed the eye to be  in the image down below to be at the right hand side*/}
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                // if title is equal to password and if "not show password" then hide else show it 
                />

                {title === 'Password' && (
                    //    if title is equal to password then show the following thing
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}>
                        {/* on press it will call a  call back function where it will set show password to be the previous value of show password so 
                        TLDR it will toggle it on or off*/}
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode='contain'
                        />



                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField