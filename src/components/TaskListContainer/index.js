import { FlatList, StyleSheet } from 'react-native'
import CardTask from '../CardTask.js'

const index = ({ tasks, handleVisibleModal }) => {
    return (
        <FlatList // aca se guardan las tareas en un listado
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CardTask
                                    task={item}
                                    handleVisibleModal={handleVisibleModal}
                                />}
        />
    )
}

export default index

const styles = StyleSheet.create({})