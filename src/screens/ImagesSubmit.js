import { Alert, View, Text, TouchableOpacity, ScrollView, Image, TouchableHighlight, ToastAndroid } from 'react-native'
import React, { useState, useContext } from 'react'
import { CustomBtn, ButtonText } from '../components/commonStyled'
import { styles } from './PersonalDetails'
import { MyContext } from '../components/component/MyContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { Avatar } from 'react-native-paper'

const ImagesSubmit = ({ route, navigation }) => {
  // // const { firstName, lastName, Gender, DOB, CardNumber, country, postCode, address } = route.params

  const [Pic, setPic] = useState('');
  const [OpVisible, setOpVisible] = useState(false)

  const { fName, lName, gender, DOB, cardNum, country, postCode, address } = useContext(MyContext)

  const handleSubmit = () => {
    setOpVisible(!OpVisible)
    navigation.navigate('WeekTimer')
  }


  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    )
  }

  const uploadImage = () => {
    let options = {
      mediaType : 'photo',
      quality : 1,
      includeBase64 : true
    }
    launchImageLibrary(options, response => {
      imageResponse(response)
    })
  }

  const imageResponse = (response) => {
    if(response.didCancel) {
      setToastMsg('Cancelled Image selection')
    }else if(response.errorCode == 'permission') {
      setToastMsg('Cancelled not satisfied')
    }else if(response.errorCode == 'others') {
      setToastMsg(response.errorMessage)
    }else if(response.assets[0].fileSize > 2097152){
      Alert.alert('Maximum size exceeded', [{text : 'OK'}])
    }else if(response.assets && response.assets.length > 0) {
      setPic(response.assets[0].base64)
    }
  }

  const removeImage = () => {
    setPic('')
    setToastMsg('Image Removed')
  }

  const openCamera = () => {
    // Alert.alert('Pressed')
    let options = {
      mediaType : 'photo',
      quality : 1,
      includeBase64 : true
    }
    launchCamera(options, response => {
      imageResponse(response)
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.bar}>
            <View style={[styles.darkBar, { width: '90%' }]} />
            <View style={[styles.lightBar, { width: '10%' }]} />
          </View>
          <View>
            <Text style={[styles.header, { marginVertical: 10 }]}>Personalise your profile<Text style={{ color: 'red' }}>*</Text></Text>
            <Text style={[styles.subheader, { marginBottom: 15 }]}>Add a profile photo</Text>
          </View>
          <View>
            <View style={styles.UploadImage}>
              <TouchableHighlight onPress={() => { uploadImage() }} underlayColor='rgba(0,0,0,0)'>
                <Avatar.Image size={200} source={{ uri: 'data:image/png;base64,' + Pic }} />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { uploadImage() }} style={styles.imageBtn}>
              <Text style={styles.imageBtnText}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {removeImage()}} style={styles.imageBtn}>
              <Text style={styles.imageBtnText}>Remove Image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {openCamera()}} style={styles.imageBtn}>
              <Text style={styles.imageBtnText}>Open Camera</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: 'center', marginVertical: 10 }}>
            <CustomBtn onPress={handleSubmit}>
              <ButtonText>SUBMIT</ButtonText>
            </CustomBtn>
          </View>
          <View>
            {OpVisible && (
              <View >
                <Text style={styles.subheader}>Name : {fName + ' ' + lName}</Text>
                <Text style={styles.subheader}>Gender : {gender}</Text>
                <Text style={styles.subheader}>DOB : {DOB}</Text>
                <Text style={styles.subheader}>ID card number : {cardNum}</Text>
                <Text style={styles.subheader}>Country : {country}</Text>
                <Text style={styles.subheader}>Passport No : {postCode}</Text>
                <Text style={styles.subheader}>Address : {address}</Text>
              </View>
            )}
          </View>
          <View>
            <Text />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ImagesSubmit