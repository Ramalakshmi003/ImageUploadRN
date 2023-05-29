import { View, Text } from 'react-native'
import React from 'react'
import { Container, Title, RoundedInput, CustomBtn, ButtonText} from '../components/commonStyled'


const SecondPage = ({navigation}) => {
    return (
        <Container>
            <Title>LOGIN</Title>
            <RoundedInput placeholder = '  Enter the E-mail' />
            <RoundedInput password placeholder = '  Enter the Password' />
            <CustomBtn onPress={() => navigation.navigate('Personal Details')}>
                <ButtonText>LOGIN</ButtonText>
            </CustomBtn>
        </Container>
    )
}

export default SecondPage