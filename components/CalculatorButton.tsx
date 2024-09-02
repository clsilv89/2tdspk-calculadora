import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native'

const width = Dimensions.get('window').width / 5

interface CalculatorProps {
    onClick: (label: string) => void,
    text: string,
    operation?: boolean,
    double?: boolean,
    memory?: boolean,
    other?: boolean
}

export default function CalculatorButton(props: CalculatorProps) {
    let style = [styles.basicButton]
    if (props.double) {
        style.push(styles.doubleButton)
    }
    if (props.operation) {
        style.push(styles.operation)
    }
    if (props.other) {
        style.push(styles.other)
    }
    if (props.memory) {
        style.push(styles.memory)
    }

    return (
        <>
            <TouchableHighlight onPress={() => props.onClick(props.text)}>
                <Text style={style}>{props.text}</Text>
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({
    basicButton: {
        fontSize: 30,
        padding: 15,
        justifyContent: 'space-around',
        margin: 10,
        backgroundColor: '#A0A0A0',
        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: width,
        height: width,
        borderRadius: width
    },
    doubleButton: {
        borderRadius: width,
        width: width * 2.2
    },
    operation: {
        backgroundColor: '#FA8231'
    },
    memory: {
        backgroundColor: '#154c79'
    },
    other: {
        backgroundColor: '#404040'
    }
})