import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { weekTimerStyle } from '../components/styles/weekTimerStyles';
import { AddBtn, SubmitBtn } from "../components/component/WeekTimerComponent";
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const DefaultCard = ({ card, onDelete }) => {
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
                    <TouchableOpacity style={weekTimerStyle.timerContainer} onPress={showStartTimePicker}>
                        <Text style={weekTimerStyle.timerText}>{selectStartTime}</Text>
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
                    <TouchableOpacity style={weekTimerStyle.timerContainer} onPress={showEndTimePicker}>
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
                    <TouchableOpacity style={weekTimerStyle.closeBtn} onPress={() => onDelete(card.id)}>
                        <Text style={weekTimerStyle.closeBtnText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const WeekTimer = () => {
    const weekDayArr = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

    const [selectedDay, setSelectedDay] = useState("");
    const [activeTab, setActiveTab] = useState("");
    const [cards, setCards] = useState({});

    const handleTabControl = (tab) => {
        setSelectedDay(tab);
        setActiveTab(tab);
    };

    const handleAddCard = () => {
        setCards((prevCards) => {
            const cardId = Date.now().toString();
            const updatedCards = {
                ...prevCards,
                [selectedDay]: [...(prevCards[selectedDay] || []), { id: cardId }],
            };
            return updatedCards;
        });
    };

    const handleDeleteCard = (cardId) => {
        setCards((prevCards) => {
            const updatedCards = {
                ...prevCards,
                [selectedDay]: prevCards[selectedDay].filter((card) => card.id !== cardId),
            };
            return updatedCards;
        });
    };

    const renderCards = () => {
        return (cards[selectedDay] || []).map((card) => (
            <DefaultCard key={card.id} card={card} onDelete={handleDeleteCard} />
        ));
    };

    const addTimerPart = () => {
        switch (selectedDay) {
            case 'Mon':
                return <Text>Mon</Text>;
            case 'Tues':
                return <Text>Tues</Text>;
            case 'Wed':
                return <Text>Wed</Text>;
            case 'Thur':
                return <Text>Thur</Text>;
            case 'Fri':
                return <Text>Fri</Text>;
            case 'Sat':
                return <Text>Sat</Text>;
            case 'Sun':
                return <Text>Sun</Text>;
            default:
                return null;
        }
    };

    return (
        <View style={weekTimerStyle.container}>
            <View style={{ marginHorizontal: 20 }}>
                <View>
                    <View style={weekTimerStyle.tabContent}>
                        {weekDayArr.map((day, index) => (
                            <View key={index}>
                                <TouchableOpacity
                                    style={activeTab === day ? weekTimerStyle.tabActiveBgStyle : weekTimerStyle.tabBgStyle}
                                    onPress={() => handleTabControl(day)}
                                >
                                    <Text style={activeTab === day ? weekTimerStyle.tabActiveText : weekTimerStyle.tabText}>
                                        {day}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                    <View>
                        {addTimerPart()}
                        {selectedDay && (
                            <View style={weekTimerStyle.tabContent}>
                                {SubmitBtn()}
                                <TouchableOpacity onPress={handleAddCard} style={weekTimerStyle.AddSubmitBtn}>
                                    <Text style={weekTimerStyle.AddSubmitBtnText}>ADD</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                    <View>
                        <ScrollView>{renderCards()}</ScrollView>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default WeekTimer;
