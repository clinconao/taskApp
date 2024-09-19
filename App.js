import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid'
import ModalPrimary from './src/components/ModalPrimary.js';
import TaskListContainer from './src/components/TaskListContainer/index.js';
import ContainerInput from './src/components/ContainerInput.js';


const App = () => {

  const [taskName, setTaskName] = useState("") // guarda lo que ingreso al input tarea 
  const [tasks, setTask] = useState([])// cambia el estado -- aca se guarda las tareas con setTaskName
  const [visibleAddTaskModal, setVisibleAddTaskModal] = useState(false)
  const [visibleDeleteTaskModal, setVisibleDeleteTaskModal] = useState(false)
  const [idTaskDelete,setIdTaskDelete] = useState("")


  const handleTaskName = (t) => {
    setTaskName(t)
  }

  const handleVisibleAddTaskModal = () => {
    setVisibleAddTaskModal(!visibleAddTaskModal) //oculta o muestra una modal, esta funcion invierte el valor
  } 

  const handleVisibleDeleteTaskModal = (id="") => {
    setIdTaskDelete(id)
    setVisibleDeleteTaskModal(!visibleDeleteTaskModal)
  }

    const handleAddTask = () => {
      const newTask = {
        id: uuid.v4(),
        name: taskName
      }
      setTask([...tasks, newTask]) //crea la tarea
      setTaskName("") //vacia el input
      handleVisibleAddTaskModal(false) //cierra el ciclo esconde la funcion 
    }

    const handleDeleteTask = (id) => {
      setTask(tasks.filter(task => task.id !== id))
      handleVisibleDeleteTaskModal()
    }

    // busca las tareas en task y dice tarea id 1 es igual al id 2 no, sigue el siguiente
    // tarea id 2 es igual al id 2 y ve si son iguale se borra.
    return (
      <>
        <View style={styles.container}>

          <ContainerInput
            taskName={taskName}
            handleVisibleModal={handleVisibleAddTaskModal}
            handleTaskName={handleTaskName}
          />

          <TaskListContainer
            tasks={tasks}
            handleVisibleModal={handleVisibleDeleteTaskModal}
          />

        </View>

        <ModalPrimary
          text="¿Quieres agregar una tarea?"
          visible={visibleAddTaskModal}
          handleVisibleModal={handleVisibleAddTaskModal}
          handleModal={handleAddTask}
        />

        <ModalPrimary
          text="¿Quieres BORRAR la tarea?"
          visible={visibleDeleteTaskModal}
          handleVisibleModal={handleVisibleDeleteTaskModal}
          handleModal={()=>handleDeleteTask(idTaskDelete)}
        />

      </>
    )
  }
  export default App

  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      flex: 1
    }
  })