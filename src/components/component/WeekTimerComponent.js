import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { weekTimerStyle } from '../styles/weekTimerStyles'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const DefaultCard = () => {
    const [selectStartTime, setSelectStartTime] = useState('00:00');
    const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
    const [selectEndTime, setSelectEndTime] = useState('00:00');
    const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

    const showStartTimePicker = () => {
        setStartTimePickerVisibility(true);
    };

    const hideStartTimePicker = () => {
        setStartTimePickerVisibility(false);
    };

    const handleStartTimeConfirm = (time) => {
        const selectedHour = time.getHours().toString().padStart(2, '0');
        const selectedMinute = time.getMinutes().toString().padStart(2, '0');
        const selectedTime = `${selectedHour}:${selectedMinute}`;
        setSelectStartTime(selectedTime);
        hideStartTimePicker();
    };

    const showEndTimePicker = () => {
        setEndTimePickerVisibility(true);
    };

    const hideEndTimePicker = () => {
        setEndTimePickerVisibility(false);
    };

    const handleEndTimeConfirm = (time) => {
        const selectedHour = time.getHours().toString().padStart(2, '0');
        const selectedMinute = time.getMinutes().toString().padStart(2, '0');
        const selectedTime = `${selectedHour}:${selectedMinute}`;
        setSelectEndTime(selectedTime);
        hideEndTimePicker();
    };

    return (
        <View>
            <View style={weekTimerStyle.DefaultCard}>
                <View>
                    <Text style={weekTimerStyle.tabText}>Start Time</Text>
                    <TouchableOpacity style={weekTimerStyle.timerContainer} onPress={() => { showStartTimePicker() }}>
                        <Text style={weekTimerStyle.timerText} >{selectStartTime}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isStartTimePickerVisible}
                        mode="time"
                        onConfirm={handleStartTimeConfirm}
                        onCancel={hideStartTimePicker}
                    />
                </View>
                <View>
                    <Text style={weekTimerStyle.tabText}>End Time</Text>
                    <TouchableOpacity style={weekTimerStyle.timerContainer} onPress={() => { showEndTimePicker() }}>
                        <Text style={weekTimerStyle.timerText}>{selectEndTime}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isEndTimePickerVisible}
                        mode="time"
                        onConfirm={handleEndTimeConfirm}
                        onCancel={hideEndTimePicker}
                    />
                </View>
                <View>
                    <TouchableOpacity style={weekTimerStyle.closeBtn}>
                        <Text style={weekTimerStyle.closeBtnText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export const SubmitBtn = (SubmitBtn) => {
    return (
        // <View style = {weekTimerStyle.tabContent}>
        <View>
            <TouchableOpacity onPress={() => { SubmitBtn }} style={weekTimerStyle.AddSubmitBtn}>
                <Text style={weekTimerStyle.AddSubmitBtnText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    )
}

export const AddBtn = (Addbtn) => {
    return (
        <View>
            <TouchableOpacity onPress={Addbtn} style={weekTimerStyle.AddSubmitBtn}>
                <Text style={weekTimerStyle.AddSubmitBtnText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}