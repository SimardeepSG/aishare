import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { icons } from '../constants'

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    //red detailed explanation of ...props in FormField

    return (

        <View
            className=" border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focud:border-secondary items-center flex-row space-x-4">
            {/* flex row is what allowed the eye to be  in the image down below to be at the right hand side*/}
            <TextInput
                className="text-base mt-0.5 text-white flex-1 font-pregular"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
            // if title is equal to password and if "not show password" then hide else show it 
            />

            <TouchableOpacity>
                <Image source={icons.search}
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>

    )
}

export default SearchInput