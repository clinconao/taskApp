import { StyleSheet, TextInput, View } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import AntDesign from '@expo/vector-icons/AntDesign';



const ContainerInput = ({taskName, handleTaskName, handleVisibleModal}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Ingrese tarea'
        value={taskName} // relaciona bidireccionalmente con el input (useState de arriba y taskename del AddTask)
        onChangeText={handleTaskName} // cambia el estado 
      />

      <ButtonPrimary onPress={handleVisibleModal} text="Agregar">
        <AntDesign name="pluscircle" size={24} color="white" />
      </ButtonPrimary>
    </View>
  )
}

export default ContainerInput

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    padding:10
  },
  input: {
    borderColor: "black",
    borderWidth:1,
    padding:5, 
    paddingStart:20,
    flex:2, 
    margin:10,
    borderRadius:10
  }
})