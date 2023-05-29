import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
// import DropDownPicker from 'react-native-dropdown-picker';
// import Picker from '@react-native-picker/picker' ;
import ModalDropdown from 'react-native-modal-dropdown'
import { CustomBtn, ButtonText } from '../components/commonStyled'
import { styles } from './PersonalDetails'
import { MyContext } from '../components/component/MyContext'

const AddressDetails = ({ navigation, route }) => {
  // const [postCode, setPostCode] = useState('');
  // const [address, setAddress] = useState('');

  // const { firstName, lastName, Gender, DOB, CardNumber } = route.params
  // const [country, setCountry] = useState(null);

  const {fName,lName,gender,DOB,cardNum,country,setCountry,postCode,setPostCode,address,setAddress} = useContext(MyContext)

  const countryOptions = ['India', 'USA', 'Pakistan', 'South Africa', 'New zealand', 'Australia'];
  const onSelectCountry = (index, value) => {
    setCountry(value);
  };

  const inputfunc = (placeholder, key, value, onChangeText) => {
    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={key}
        value={value}
        onChangeText={onChangeText}
      />
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.bar}>
            <View style={[styles.darkBar, { width: '80%' }]} />
            <View style={[styles.lightBar, { width: '20%' }]} />
          </View>
          <View>
            <Text style={styles.header}>What's your home address ? <Text style={{ color: 'red' }}>*</Text></Text>
            <Text style={styles.subheader}>Please provide your residential information</Text>
          </View>
          <View>
            <ModalDropdown
              style={styles.input}
              options={countryOptions}
              // placeholder = 'Gender'
              defaultValue="Country"
              onSelect={onSelectCountry}
            />
            {inputfunc('Postcode', 'name-phone-pad', postCode, setPostCode)}
            {inputfunc('Address', 'name-phone-pad', address, setAddress)}
          </View>
          <View style={{ alignSelf: 'center' }}>
            {/* <CustomBtn onPress={() => navigation.navigate('Image Upload', { firstName: firstName, lastName: lastName, Gender: Gender, DOB: DOB, CardNumber: CardNumber, country : selectedValue, postCode : postCode, address : address })}> */}
            <CustomBtn onPress={() => navigation.navigate('Image Upload')}>
              <ButtonText>NEXT</ButtonText>
            </CustomBtn>
          </View>
          <View>
            <Text>Name : {fName + ' ' + lName}</Text>
            <Text>Gender : {gender}</Text>
            <Text>DOB : {DOB}</Text>
            <Text>ID card number : {cardNum}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddressDetails
