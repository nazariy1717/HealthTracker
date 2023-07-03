import React from 'react';
import {View} from "react-native";
import Svg, {Circle} from "react-native-svg";

type RingProgressProps = {
    radius: number
}

const RingProgress = ({radius}: RingProgressProps) => {
    return (
        <View>
            <Svg height={radius * 2} width={radius * 2}  >
                <Circle cx={radius} cy={radius} r={radius} stroke="blue" strokeWidth="2.5" fill="green" />
            </Svg>
        </View>
    );
}

export default RingProgress;