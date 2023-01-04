import React, { Component } from 'react';
import { Alert, View, Text } from 'react-native';
import { CameraScreen } from 'react-native-camera-kit';

export default class CameraScreenExample extends Component {
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `"${event.type}" Button Pressed`,
      `${captureImages}`,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false },
    );
  }

  renderButtons = () => {
    return (<View>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'red' }}>
        HOLA
      </Text>
    </View>)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CameraScreen
          actions={{ leftButtonText: 'Cancel' ,rightButtonText: 'Done' }}
          onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
          // allowCaptureRetake={true}
          flashImages={{
            on: require('../images/flashOn.png'),
            off: require('../images/flashOff.png'),
            auto: require('../images/flashAuto.png'),
          }}
          cameraFlipImage={require('../images/cameraFlipIcon.png')}
          captureButtonImage={require('../images/cameraButton.png')}
          torchOnImage={require('../images/torchOn.png')}
          torchOffImage={require('../images/torchOff.png')}
          showCapturedImageCount
          renderCaptureButton={this.renderButtons}
        />
      </View>

    );
  }
}
