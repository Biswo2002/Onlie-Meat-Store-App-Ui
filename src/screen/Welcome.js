import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.Mian}>
            <View style={styles.ImageBG}>
                <Image style={styles.ImageBackground}
                    source={require('../assets/image/B5i.png')}>
                </Image>
            </View>
            <View style={styles.MainCOntainer}>
                <View style={styles.HeadLineText}>
                    <Text style={styles.Meet}>Meet Best Online Meat & Sea Foods Item Store</Text>
                    <Text style={styles.needs}>Your one-stop app for all your CBD needs</Text>
                </View>
                <TouchableOpacity style={styles.Botton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.BottonText}>Start Shoppings</Text>
                    <AntDesign name='right' size={20} color='#fff' style={{ padding: 5, }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    ImageBackground: {
        width: 420,
        height: 450,
    },
    ImageBG: {
        backgroundColor: '#FBDDEC',
        paddingTop: 20
    },
    HeadLineText: {
        marginHorizontal: 30,
        marginTop: 30,
    },
    needs: {
        fontSize: 18,
        width: 250,
        paddingTop: 15,
        color: '#000',
        fontWeight: '500',
    },
    Meet: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
    },
    MainCOntainer: {
        backgroundColor: '#FBDDEC',
        height: 400
    },
    Botton: {
        marginTop: 40,
        marginHorizontal: 30,
        width: 170,
        backgroundColor: '#D0435B',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
    },
    BottonText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
    }
})