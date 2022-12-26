import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../contexts/AppContextProvider';

const Login = () => {
  const navigation = useNavigation();
  const { setIsLoggedIn } = useAppContext()
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  return (
    <View style={styles.main}>
      <View style={styles.headline}>
        <Octicons
          name="arrow-left"
          size={30}
          color={'black'}
        // onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            fontWeight: 'bold',
            paddingLeft: 120,
          }}>
          LOGIN
        </Text>
      </View>

      <View style={styles.InputContainer}>
        <TextInput placeholder="Email" placeholderTextColor={'black'} />
      </View>

      <View style={styles.InputContainer2}>
        <TextInput placeholder="Password" placeholderTextColor={'black'} />
        <Ionicons name="eye" size={20} color={'black'} />
      </View>
      <Text style={{ alignSelf: 'flex-end', color: '#000', marginRight: 30 }}>
        Forget Password?
      </Text>

      {/* <View style={styles.btn}>
          <Button title="LOGIN" color="#ff1493" />
        </View> */}

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: '#F93C64',
          marginHorizontal: 40,
          alignItems: 'center',
          marginTop: 20,
          borderRadius: 5,
          marginTop: 40,
          height: 40,
        }}>
        <Text style={{ color: 'white', paddingVertical: 10, fontSize: 18 }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={{ color: 'black' }}> have an account?</Text>
        <TouchableOpacity style={{ marginLeft: 2, fontWeight: 'bold', color: '#000' }}>
          <Text>Register Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logincontainer}>
        <Text> Or Login With</Text>
      </View>
      <View style={styles.mainlogin}>
        {/* FACEBOOK */}

        <TouchableOpacity style={styles.logincontainer1}>
          <Zocial
            name="facebook"
            size={20}
            color="white"
            style={{ paddingRight: 6, paddingLeft: 10 }}
          />
          <Text style={styles.facebook}>FACEBOOK</Text>
        </TouchableOpacity>

        {/* google */}

        <TouchableOpacity style={styles.logincontainer2}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 25,
              alignItems: 'center',
            }}>
            <AntDesign
              name="google"
              size={25}
              color="white"
              style={{ paddingRight: 10 }}
            />
            <Text style={styles.google}>GOOGLE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  headline: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 60,
    paddingLeft: 35,
  },

  //     // shadow
  //     shadowColor: '#000',
  //     shadowOpacity: 1,
  //     shadowRadius: 5,
  //     elevation: 10,
  //     color: 'black',

  InputContainer: {
    borderBottomWidth: 1,
    marginHorizontal: 30,
    borderRadius: 10,
    borderColor: '#a9a9a9',
    marginVertical: 10,
    marginTop: 100,
  },
  InputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 30,
    borderRadius: 10,
    borderColor: '#a9a9a9',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  logincontainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  mainlogin: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
  },
  logincontainer1: {
    flexDirection: 'row',
    backgroundColor: '#3B5999',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    height: 40,
  },
  logincontainer2: {
    flexDirection: 'row',
    backgroundColor: '#DD4339',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    height: 40,
  },

  google: {
    // marginHorizontal: 8,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    // width: 100,
    textAlign: 'center',
  },
  facebook: {
    marginHorizontal: 8,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    width: 90,
    textAlign: 'center',
  },
});