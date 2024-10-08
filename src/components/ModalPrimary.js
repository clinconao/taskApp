import { Modal, StyleSheet, Text, View } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const ModalPrimary = ({text,visible,handleVisibleModal,handleModal}) => {
    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>{text}</Text>
                    <View style={styles.buttonContainer}>
                        <ButtonPrimary onPress={handleModal} text="Si"/>
                        <ButtonPrimary onPress={handleVisibleModal} text="No"/>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default ModalPrimary

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:"#00000088",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    content:{
        width:"90%",
        height:300,
        backgroundColor:"white",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        gap:15
    },
    title:{
        fontSize:19,
        fontWeight:"bold"
    },
    buttonContainer:{
        flexDirection:"row"
    }
})