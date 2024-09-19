import { Pressable, StyleSheet, Text } from 'react-native'


const ButtonPrimary = ({ text, onPress, style, children }) => {



  return (
    <Pressable onPress={onPress} style={[styles.button,style]}>
      {children}
      <Text style={styles.textButton}>{text}</Text> 
    </Pressable>
  )
}
// todo lo que queda en children , es lo compone el boton presionable. toda la explicacion
// esta en el video de la clase 5
export default ButtonPrimary

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "red",
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection:"row",
    gap:10
  },
  textButton: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  }
})