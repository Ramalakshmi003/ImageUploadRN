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

// export default WeekTimer;

// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
// import { weekTimerStyle } from '../components/styles/weekTimerStyles';
// import { AddBtn, SubmitBtn } from "../components/component/WeekTimerComponent";
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import moment from 'moment'

// const DefaultCard = (props) => {
//     console.log(props, "props")
//     const {card, onDelete, onChangeSlot } = props
//     const [showDatePickerFlag, updateFlag] = useState(false);
//     const [pickerType, updateType] = useState("");

//     const [slot, setSlot] = useState(card);
// // console.log(card)
//     const handleStartTimeConfirm = (getTime) => {
//         const time = moment(getTime).format("HH:mm");
//         if (pickerType == "S") slot["start"] = time;
//         else slot["end"] = time;
//         onChangeSlot(setSlot);
//         updateFlag(false)
//     };

//     const timeView = (type, text, value) => {
//         return (
//             <View>
//                 <Text style={weekTimerStyle.tabText}>{text}</Text>
//                 <TouchableOpacity
//                     style={weekTimerStyle.timerContainer}
//                     onPress={() => {
//                         updateFlag(true);
//                         updateType(type);
//                     }}
//                 >
//                     <Text style={weekTimerStyle.timerText}>{value}</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     };

//     return (
//         <View>
//             <View style={weekTimerStyle.DefaultCard}>
//                 {timeView("S", "Start Time", slot?.start)}
//                 {timeView("E", "End Time", slot?.end)}
//             </View>

//             <DateTimePickerModal
//                 isVisible={showDatePickerFlag}
//                 mode="time"
//                 onConfirm={(time) => {handleStartTimeConfirm(time)}}
//                 onCancel={() => {}}
//             />
//         </View>
//     );
// };

// const WeekTimer = () => {
//     const weekDayArr = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

//     const [selectedDay, setSelectedDay] = useState("");
//     const [activeTab, setActiveTab] = useState("");
//     const [cards, setCards] = useState({});

//     useEffect(() => {
//         const initialCards = weekDayArr.reduce((obj, day) => {
//           obj[day] = [];
//           return obj;
//         }, {});
//         setCards(initialCards);
//       }, []);

//     const handleTabControl = (tab) => {
//         setSelectedDay(tab);
//         setActiveTab(tab);
//     };

//     const handleAddCard = () => {
//         const getList = { ...cards }
//         const slot = {start:'', end : ''}
//         getList[selectedDay].push(slot)
//         setCards({ ...getList })
//     };

//     const handleDeleteCard = (index) => {
//         const getList = { ...cards }
//         getList[selectedDay].splice(index, 1)
//         setCards({ ...getList })
//     };

//     const renderCards = () => {
//         return (
//             <>
//             {
//                 cards[selectedDay]?.length  > 0 && cards[selectedDay].map((card, index) => {
//                     return(
//                     <DefaultCard key={card.id} card={card} onDelete={() => handleDeleteCard(index)} onChangeSlot={(slot) => {
//                         cards[selectedDay][index] = slot
//                         setCards({ ...cards })
//                     }} />
//                     )})
//             }
//             </>
//         )
//     };

//     // const renderCards = () => {
//     //     return (cards[selectedDay] || []).map((card, index) => (
//     //         <DefaultCard key={card.id} card={card} onDelete={() => handleDeleteCard(index)} onChangeSlot={(slot) => {
//     //             cards[selectedDay][index] = slot
//     //             setCards({ ...cards })
//     //         }} />
//     //     ));
//     // };


//     return (
//         <View style={weekTimerStyle.container}>
//             <View style={{ marginHorizontal: 20 }}>
//                 <View>
//                     <View style={weekTimerStyle.tabContent}>
//                         {weekDayArr.map((day, index) => (
//                             <View key={index}>
//                                 <TouchableOpacity
//                                     style={activeTab === day ? weekTimerStyle.tabActiveBgStyle : weekTimerStyle.tabBgStyle}
//                                     onPress={() => handleTabControl(day)}
//                                 >
//                                     <Text style={activeTab === day ? weekTimerStyle.tabActiveText : weekTimerStyle.tabText}>
//                                         {day}
//                                     </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         ))}
//                     </View>
//                     <View>
//                         {selectedDay && (
//                             <View style={weekTimerStyle.tabContent}>
//                                 {SubmitBtn()}
//                                 <TouchableOpacity onPress={handleAddCard} style={weekTimerStyle.AddSubmitBtn}>
//                                     <Text style={weekTimerStyle.AddSubmitBtnText}>ADD</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         )}
//                     </View>
//                     <View>
//                         <ScrollView>{renderCards()}</ScrollView>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default WeekTimer;

