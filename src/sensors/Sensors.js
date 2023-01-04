import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    accelerometer,
    gyroscope,
    setUpdateIntervalForType,
    SensorTypes,
    magnetometer,
    barometer,
} from "react-native-sensors";

setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

const Sensors = () => {

    useEffect(() => {
        const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) => {
            console.log("accelerometer : ")
            console.log({ x, y, z, timestamp })
        }
        );

        const subscriptionGy = gyroscope.subscribe(({ x, y, z, timestamp }) => {
            console.log("gyroscope : ")
            console.log({ x, y, z, timestamp })
        }
        );

        const subscriptionMag = magnetometer.subscribe(({ x, y, z, timestamp }) => {
            console.log("magnetometer : ")
            console.log({ x, y, z, timestamp })
        }
        );

        const subscriptionBaro = barometer.subscribe(({ pressure }) => {
            console.log("barometer : ")
            console.log({ pressure })
        }
        );

        setTimeout(() => {
            // If it's the last subscription to accelerometer it will stop polling in the native API
            subscription.unsubscribe();
            subscriptionBaro.unsubscribe();
            subscriptionMag.unsubscribe();
            subscriptionGy.unsubscribe();
        }, 1000);
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.headline}>
                Sensors
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    headline: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
});
export default Sensors;