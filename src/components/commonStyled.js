import styled from 'styled-components'

export const Container = styled.View`
  height : 100%
  width : 100%
  flex-direction : column
  align-items : center
  justify-content : center
  background-color : white
`

export const Title = styled.Text`
    font-size : 32px
    color : ${props => props.theme.colors.textDark || 'black'}
    margin : 16px
    font-weight : bold
`

export const ContentText = styled.Text`
    font-size : 18px
    color : ${props => props.theme.colors.textDark || 'black'}
    text-align : center
    margin : 10px
`

export const CustomImage = styled.Image`
    width : 100px
    height : 100px
    border-radius : 15px
`

export const CustomBtn = styled.TouchableOpacity`
    height : 60px
    width : 180px
    border-radius : 30px
    justify-content : center
    align-items : center
    background-color : black
    margin-top : 16px
`

export const ButtonText = styled.Text`
    font-size : ${props => props.size || '16px'} 
    color : ${props => props.theme.colors.button || 'white'}
    font-weight : bold
`

export const RoundedInput = styled.TextInput.attrs(props => ({
    secureTextEntry : props.password ? true : false,
    placeholderTextColor : 'black'
}))
`
    font-size : 18px
    border-width : 1.3px
    border-color : black
    width : 80%
    height : 60px
    border-bottom-right-radius : 25px
    border-top-left-radius : 25px
    margin : 16px
    color : black
    padding : 16px
`