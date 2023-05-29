import { Button, Text } from 'react-native'
import React from 'react'
import { logoimg } from '../assets/images/image'
import { Container, Title, ContentText, CustomImage, CustomBtn, ButtonText } from '../components/commonStyled'

const AxiosScreen = ({ navigation }) => {
  return (
    <Container>
      <CustomImage source={{ uri: logoimg }} />
      <Title>Notes</Title>
      <ContentText>All of the route configuration is specified as props to our navigator. We haven't passed any props to our navigator, so it just uses the default configuration.</ContentText>
      <CustomBtn onPress={() => navigation.navigate('Login')}>
        <ButtonText>Get started</ButtonText>
      </CustomBtn>
      {/* <Button title='navigate' onPress={() => navigation.navigate('pageTwo')} /> */}
    </Container>
  )
}

export default AxiosScreen
// onPress={() => navigation.navigate('pageTwo')}


// import { View, Text, ScrollView } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { axiosStyle } from '../components/styles/axiosStyle'

// const AxiosScreen = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('https://gorest.co.in/public/v2/users/').then((abc) => {
//       setUsers(abc.data)
//       //  console.log(abc.data)
//     })
//   })

//   return (

//     <View style={axiosStyle.container}>
//       <ScrollView>
//         <Text style={axiosStyle.headerText}>AxiosScreen Api integration</Text>
//         <View style={axiosStyle.cardContainer}>
//           {users.map((item, index) => {
//             return (
//               <View style={axiosStyle.card} key={index}>
//                 <View>
//                   <Text>{item.name}</Text>
//                   <Text>{item.email}</Text>
//                   <Text>{item.gender}</Text>
//                   <Text>{item.status}</Text>
//                 </View>
//               </View>
//             )
//           })}

//         </View>
//       </ScrollView>
//     </View>
//   )
// }
// export default AxiosScreen;