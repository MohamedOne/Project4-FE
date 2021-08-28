import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { ImageBackground } from "react-native";
const image = { uri: 'https://belmontstudios.com/wp-content/uploads/marble-with-gold-gold-marble-by-blue-gold-marble-background-gold-marble-wallpaper-uk.jpg' };



const BlankCartCard = () => {

    return (
        <View style={{justifyContent: 'center', flex: 1}}>
                        <ImageBackground source={image} resizeMode="cover" style={{ justifyContent: 'center', flex: 1 }}
            >
        <Text style={styles.blankCart}>Your orders will appear here</Text>
        <Image
                source={require('../assets/hypercube.png')}
                style={styles.smallImage}
            />
</ImageBackground>
        </View>
    )

}
export default BlankCartCard

const styles = StyleSheet.create({
    smallImage: {
        width: 40,
        height: 40,
        alignSelf: 'center'
    },
    blankCart: {
        fontSize: 23,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
