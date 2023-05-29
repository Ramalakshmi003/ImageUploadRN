import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { CustomBtn, ButtonText } from '../components/commonStyled'
import { styles } from './PersonalDetails'
import DocumentPicker from 'react-native-document-picker'
import { MyContext } from '../components/component/MyContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ImagesSubmit = ({ route }) => {
  // const { firstName, lastName, Gender, DOB, CardNumber, country, postCode, address } = route.params

  const [OpVisible, setOpVisible] = useState(false)

  const handleSubmit = () => {
    setOpVisible(!OpVisible)
  }

  const { fName, lName, gender, DOB, cardNum, country, postCode, address } = useContext(MyContext)

  const selectDoc = async () => {
    try {

      // const doc = await DocumentPicker.pick({
      //   type : [DocumentPicker.types.images] // allows to select different types of documents like images, pdf, svg, png etc
      // }
      // );

      // const doc = await DocumentPicker.pickSingle() // allows single file to upload
      // console.log(doc)

      // const doc = await DocumentPicker.pickMultiple() // allows to select multiple files at same time
      // console.log(doc)

      const doc = await DocumentPicker.pick({
        allowMultiSelection: false // allows to select multiple files at same time
      });
      // return (
      //   <View>
      //     {OpVisible && (
      //       <View>
      //         <Image style = {styles.image} source={require(doc.uri)} />
      //       </View>
      //     )}
      //   </View>
      // )
      console.log(doc)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled the upload", err);
      } else {
        console.log(err)
      }
    }
  }

  return (
    <View style={styles.container}>
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
          <Button onPress={() => { selectDoc() }} title='SELECT DOCUMENT' />
        </View>
        <View style={{ alignSelf: 'center', marginVertical: 10 }}>
          <CustomBtn onPress={() => { handleSubmit() }}>
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
      </View>
    </View>
  )
}

export default ImagesSubmit