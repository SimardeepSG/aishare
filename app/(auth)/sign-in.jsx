import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
// does not need curly brace since it is only one export being shot thorough 

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  // created using the useStateSnippet

  const submit = () => {

  }
  // a new function that wil handle the submit


  const [isSubmitting, setIsSubmitting] = useState(false)
  //creating a loading state because the submit function may take some time

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6" >
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[34px]" />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            //explanation of PROP below
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}

          />
          <View className="justify-center pt-5 flex-row gap-2" >
            <Text className="text-lg text-gray-100 font-pregular">
              Dont have account?
            </Text>
            <Link href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>

          </View>


        </View>

      </ScrollView>
    </SafeAreaView >
  )
}

export default SignIn


//EXPLANATION OF THE HANDLE CHANGE TEXT PROP

// We are passing the handleChangeText prop.
// This is a function that handles what happens when the text in the input field changes, where 'e' is the new text value.
// 'setForm' is a state setter function created by the useState hook to update the 'form' state.
// The spread operator (...form) copies the current state of the 'form' object, preserving existing properties.
// This is why we make a soft copy -> Change Detection: React relies on detecting changes by comparing old and new state values. Immutable updates make this comparison straightforward. and if we just chanegd the value it might not recognize that there was a change so it may not pass the value
// The 'email: e' part updates the 'email' property of the form object with the new text value 'e'.
// This ensures that only the 'email' field is updated while keeping other form fields (like 'password') unchanged.
//--
// it is a callback function that handles the event and calls the set form setter
// within the set form setter we destructure the existting form values ( ...form)
// then we modify th eemalii to be equal to the event 