//this page was copied from the the sign in page and duplicated but only a few things were chanegd which are shown via comments below

import { View, Text, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { images } from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  // user name was aded

  const submit = async () => {
    // recall that is you have await anywhere in a function it has to be async
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }
    setIsSubmitting(true)

    try {
      const result = await createUser(form.email, form.password, form.username)
      //we have to pass 3 thrings to the user function one by one 

      router.replace('/home')

    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }

  }

  const [isSubmitting, setIsSubmitting] = useState(false)


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6" >
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[34px]" />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign Up to Aora</Text>
          {/* text was changed  */}

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            //explanation of PROP below
            otherStyles="mt-10"
          />
          {/* new form field added */}

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
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}

          />
          <View className="justify-center pt-5 flex-row gap-2" >
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
              {/* text changes */}
            </Text>
            <Link href="/sign-in"
              // link and text chanegd
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>

          </View>


        </View>

      </ScrollView>
    </SafeAreaView >
  )
}

export default SignUp
