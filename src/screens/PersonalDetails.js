import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
// import DropDownPicker from 'react-native-dropdown-picker';
// import Picker from '@react-native-picker/picker' ;
import ModalDropdown from 'react-native-modal-dropdown'
import { CustomBtn, ButtonText } from '../components/commonStyled'
import { MyContext } from '../components/component/MyContext'
import DateTimePickerModal from 'react-native-modal-datetime-picker';


export const naviBtn = () => {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}


const PersonalDetails = ({ navigation }) => {

    // const [fName, setFName] = useState('');
    // const [lName, setLName] = useState('');
    // const [gender, setGender] = useState('');
    // const [DOB, setDOB] = useState('');
    // const [cardNum, setCardNum] = useState('');
    // const [selectedValue, setSelectedValue] = useState(null);

    // const onSelectGender = (item) => {
    //     setSelectedValue(item.value);
    // };

    const { fName, setFName, lName, setLName, gender, setGender, DOB, setDOB, cardNum, setCardNum } = useContext(MyContext)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('Select Date');
    const [selectTime, setSelectTime] = useState('Select Time');

    const genderOptions = ['Female', 'Male', 'Not Specified'];
    const onSelectGender = (index, value) => {
        setGender(value);
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        console.log(x1[2] + "/" + x1[1] + "/" + x1[0])
        setSelectedDate(x1[2] + "/" + x1[1] + "/" + x1[0])
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (time) => {
        console.warn("A time has been picked: ", time);
        const selectedHour = time.getHours().toString().padStart(2, '0');
        const selectedMinute = time.getMinutes().toString().padStart(2, '0');
        const selectedTime = `${selectedHour}:${selectedMinute}`;
        setSelectTime(selectedTime);
        hideTimePicker(); 

        // console.warn("A time has been picked: ", date);
        // const dt = new Date(date);
        // const x = dt.toLocaleTimeString();
        // console.log(x)
        // setSelectTime(x);
        // hideTimePicker();
    };

    // const [selectedValue, setSelectedValue] = useState(null);
    // const onSelectGender = (itemValue) => {
    //     setSelectedValue(itemValue);
    // };


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
                        <View style={styles.darkBar} />
                        <View style={styles.lightBar} />
                    </View>
                    <View>
                        <Text style={styles.header}>What are your personal details? <Text style={{ color: 'red' }}>*</Text></Text>
                        <Text style={styles.subheader}>Please provide your personal information</Text>
                    </View>
                    <View>
                        {inputfunc('Legal first name', 'name-phone-pad', fName, setFName)}
                        {inputfunc('Legal last name', 'name-phone-pad', lName, setLName)}
                        {/* <DropDownPicker
                        items={[
                            { label: 'Gender', value: null },
                            { label: 'Female', value: 'female' },
                            { label: 'Male', value: 'male' },
                            { label: 'Not Specified', value: 'not_specified' },
                        ]}
                        defaultValue={selectedValue}
                        onChangeItem={onSelectGender}
                    /> */}
                        {/* <Picker
                        selectedValue={selectedValue}
                        onValueChange={onSelectGender}
                    >
                        <Picker.Item label="Select gender" value={null} />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Not Specified" value="not_specified" />
                    </Picker> */}

                        <ModalDropdown
                            style={styles.input}
                            options={genderOptions}
                            // placeholder = 'Gender'
                            defaultValue="Gender"
                            onSelect={onSelectGender}
                            value={gender}
                        // onChangeText = {setGender}
                        />
                        {/* {inputfunc('Gender', 'name-phone-pad')} */}
                        {inputfunc('Date of Birth DD/MM/YYYY', 'numbers-and-punctuation', DOB, setDOB)}
                        {inputfunc('ID card / Passport number', 'numbers-and-punctuation', cardNum, setCardNum)}
                        <View>
                            <TouchableOpacity style={styles.btn} onPress={() => { showDatePicker() }}>
                                <Text style={styles.btnText} >{selectedDate}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={() => { showTimePicker() }}>
                                <Text style={styles.btnText} >{selectTime}</Text>
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleDateConfirm}
                                onCancel={hideDatePicker}
                            />
                            <DateTimePickerModal
                                isVisible={isTimePickerVisible}
                                mode="time"
                                onConfirm={handleTimeConfirm}
                                onCancel={hideTimePicker}
                            />
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        {/* <CustomBtn onPress={() => navigation.navigate('Address Details', {firstName : fName, lastName : lName, Gender : selectedValue, DOB : DOB, CardNumber : cardNum})}> */}
                        <CustomBtn onPress={() => navigation.navigate('Address Details')}>
                            <ButtonText>NEXT</ButtonText>
                        </CustomBtn>
                        <View><Text /></View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PersonalDetails
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#64e3b0',
        height: '100%',
        width: '100%',
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    darkBar: {
        height: 5,
        width: '60%',
        backgroundColor: '#046e43',
        marginTop: 70,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    lightBar: {
        height: 5,
        width: '40%',
        backgroundColor: '#b6e3d1',
        marginTop: 70,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    header: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 40,
    },
    subheader: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        marginTop: 5,
    },
    input: {
        height: 50,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#b6e3d1',
        marginVertical: 10,
        marginTop: 30,
        color: '#046e43',
        fontSize: 18,
        paddingLeft: 20,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 15,
    },
    imageBtn: {
        backgroundColor: '#b6e3d1',
        height: 40,
        width: '30%',
        borderRadius: 8,
        margin: 20
    },
    imageBtnText: {
        color: '#046e43',
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center',
        top: 8
    },
    UploadImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },

    btn: {
        width: '70%',
        height: 50,
        borderRadius: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        margin: 10
    },

    btnText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black'
    }
    // conContainer : {
    //     flex : 1,
    //     justifyContent : 'center',
    //     alignItems : 'center'
    // }
})