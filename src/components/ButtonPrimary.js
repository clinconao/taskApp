import { Pressable, StyleSheet, Text, TextInput } from 'react-native'


const ButtonPrimary = ({text, onPress}) => {



  return (
    <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.textButton}>{text}</Text>
  </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    button:{
        padding:20,
        backgroundColor: "red",
        flex:1,
        margin:10,    
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
      },
      textButton:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
        }
})