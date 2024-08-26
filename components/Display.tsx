import { View, Text, StyleSheet } from 'react-native'

export default function Display() {
    return(
        <View style={styles.container}>
            <Text style={styles.displayText}>0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        justifyContent: 'flex-end',
        flex: 1
    },
    displayText: {
        fontSize: 60,
        color: '#FFF',
        textAlign: 'right'
    }
})