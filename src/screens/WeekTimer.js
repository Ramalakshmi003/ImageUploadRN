import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { weekTimerStyle } from '../components/styles/weekTimerStyles';
import { DefaultCard, AddBtn, SubmitBtn } from "../components/component/WeekTimerComponent";

const App = () => {
    const weekDayArr = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

    const [selectedDay, setSelectedDay] = useState("");
    const [activeTab, setActiveTab] = useState("");
    const [cardCounts, setCardCounts] = useState({});

    const handleTabControl = (tab) => {
        setSelectedDay(tab);
        setActiveTab(tab);
    };

    const handleAddCard = () => {
        setCardCounts((prevCounts) => ({
            ...prevCounts,
            [selectedDay]: (prevCounts[selectedDay] || 0) + 1
        }));
    };
    

    const renderCards = () => {
        const cardCount = cardCounts[selectedDay] || 0;
        const cards = [];

        for (let i = 0; i < cardCount; i++) {
            cards.push(<DefaultCard key={i} />);
        }

        return cards;
    };

    const addTimerPart = () => {
        switch (selectedDay) {
            case 'Mon':
                return <Text>Mon</Text>
            case 'Tues':
                return <Text>Tues</Text>
            case 'Wed':
                return <Text>Wed</Text>
            case 'Thur':
                return <Text>Thur</Text>
            case 'Fri':
                return <Text>Fri</Text>
            case 'Sat':
                return <Text>Sat</Text>
            case 'Sun':
                return <Text>Sun</Text>
            default:
                return null;
        }
    }

    return (
        <View style={weekTimerStyle.container}>
            <View style={{ marginHorizontal: 20 }}>
                <View>
                    <View style={weekTimerStyle.tabContent}>
                        {weekDayArr.map((day, index) => {
                            return (
                                <View key={index}>
                                    <TouchableOpacity style={activeTab === day ? weekTimerStyle.tabActiveBgStyle : weekTimerStyle.tabBgStyle} onPress={() => handleTabControl(day)}>
                                        <Text style={activeTab === day ? weekTimerStyle.tabActiveText : weekTimerStyle.tabText}>{day}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                    <View>
                        {addTimerPart()}
                        <View>
                            {/* passing parameter as prop doesnt work */}
                            {selectedDay && (
                                <View style = {weekTimerStyle.tabContent}>
                                    {SubmitBtn()}
                                    <TouchableOpacity onPress={handleAddCard} style={weekTimerStyle.AddSubmitBtn}>
                                        <Text style={weekTimerStyle.AddSubmitBtnText}>ADD</Text>
                                    </TouchableOpacity>
                                </View>
                                // <View style = {weekTimerStyle.tabContent}>
                                //     {SubmitBtn()}
                                //     {AddBtn(handleAddCard)}
                                // </View>
                            )}
                        </View>
                    </View>
                    <View>
                        {/* ScrollView doesntwork */}
                        <ScrollView>
                            {renderCards()}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default App;
