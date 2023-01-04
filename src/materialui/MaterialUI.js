import React, { useState } from "react";
import { View } from 'react-native'
import { Button, Surface, TextInput, Switch, Snackbar, Backdrop, Text, Dialog, DialogActions, DialogContent, DialogHeader, HStack, Banner, BackdropSubheader, Avatar, AppBar, FAB, IconButton, Icon, ActivityIndicator } from "@react-native-material/core";

const MaterialUI = () => {

    const [revealed, setRevealed] = useState(false);
    const [checked, setChecked] = useState(true);


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Backdrop
                revealed={revealed}

                header={
                    <AppBar
                        title="Screen title"
                        transparent
                    //   leading={props => (
                    //     <IconButton
                    //       icon={props => (
                    //         <Icon name={revealed ? "close" : "menu"} {...props} />
                    //       )}
                    //       onPress={() => setRevealed(prevState => !prevState)}
                    //       {...props}
                    //     />
                    //   )}
                    />
                }
                backLayer={<View style={{ height: 120 }} />}
            >
                <BackdropSubheader title="Subheader" />


                <Banner
                    text="There was a problem processing a transaction on your credit card."
                    buttons={
                        <HStack spacing={2}>
                            <Button key="fix-it" variant="text" title="Fix it" compact />
                            <Button key="learn-more" variant="text" title="Learn More" compact />
                        </HStack>
                    }
                />
                <View style={{ marginHorizontal: 16 }}>
                    <Button title="Contained" />
                    <View style={{ height: 12 }} />
                    <Button variant="outlined" title="Outlined" />
                    <View style={{ height: 12 }} />
                    <Switch value={checked} onValueChange={() => setChecked(!checked)} />
                    <Switch disabled />
                    <View style={{ height: 12 }} />
                    <TextInput
                        label="Label"
                    />
                    <View style={{ height: 12 }} />
                    <TextInput
                        label="Label"
                        variant="outlined"
                        trailing={props => (
                            <Text>GO</Text>
                        )}
                    />
                    <View style={{ height: 12 }} />
                    <TextInput label="Label" variant="standard" />
                    <View style={{ height: 12 }} />
                    <Surface
                        elevation={6}
                        category="medium"
                        style={{ width: 70, height: 70 }}
                    />
                </View>

                <Snackbar
                    message="Can't send the photo."
                    style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
                />
                <FAB
                    loading
                    style={{ position: "absolute", end: 16, bottom: 16 }}
                />
            </Backdrop>
        </View >

    );
}

export default MaterialUI;