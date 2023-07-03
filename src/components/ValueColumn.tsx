import React from 'react';
import {StyleSheet, Text, View} from "react-native";

type ValueColumnProps = {
    label: string;
    value: string;
}

const ValueColumn = ({label, value}: ValueColumnProps) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ValueColumn;
const styles = StyleSheet.create({
    label: {
        color: 'white',
        fontSize: 20
    },
    value: {
        fontSize: 35,
        color: '#afb3be',
        fontWeight: '500'
    }
});
