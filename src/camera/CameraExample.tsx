import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera, CameraScreen, CameraType } from 'react-native-camera-kit';

export default class CameraExample extends Component {
  render() {
    return (
      <View style={styles.cameraContainer}>
        <Camera
          ref={this.camera}
          style={{ flex: 1 }}
          cameraType={CameraType.Back} // optional
          flashMode="auto" // on/off/auto(default)
          focusMode="on" // off/on(default)
          zoomMode="on" // off/on(default)
          torchMode="off" // on/off(default)
          ratioOverlay="1:1" // optional
          ratioOverlayColor="#00000077" // optional
          resetFocusTimeout={0}
          resetFocusWhenMotionDetected={false}
          saveToCameraRole={false} // iOS only
          scanBarcode={false} // optional
          showFrame={false} // Barcode only, optional
          laserColor="red" // Barcode only, optional
          frameColor="yellow" // Barcode only, optional
          surfaceColor="blue" // Barcode only, optional
          onReadCode={(event) => console.log(event.nativeEvent.codeStringValue)}
        />
        <View style={{ backgroundColor: 'white',height:80 }}>
          <Text>Hola</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    cameraContainer: {
      flex: 1,
      backgroundColor: 'black',
    },
  },
);
