import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity ,Alert, ScrollView} from 'react-native'
import React, { useState } from 'react'
const SignIn = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.header} >
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/v2/C560BAQEw4uZDvzCH7w/company-logo_200_200/company-logo_200_200/0/1679916086272?e=1733961600&v=beta&t=oG2G53pEtowLVTd_OJcqIpEMqk8hNXaaYaYy9nx1zWA' }}
            style={styles.headerImg}
          />
          <Text style={styles.title}>Sign In To MTECHUB</Text>
          <Text style={styles.subtitle}>
            Get Access To Your PortFolio and More
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              keyboardAppearance='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputControl}
              placeholder='test@gmail.com'
              placeholderTextColor={"grey"}
              value={form.email}
              onChangeText={email => setForm({ ...form, email })}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.inputControl}
              placeholder='*********'
              placeholderTextColor={"grey"}
              value={form.password }
              onChangeText={password => setForm({ ...form, password })}
            />
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home")
              }}>
              <View styles={styles.btn}>
                <Text style={styles.btnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.formFooter}>
              Don't Have Account?{' '}<Text style={styles.signUpLink}>Sign Up</Text></Text>
              </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:
    {
      padding: 24,
      flex: 1
    },
    header:
    {
      marginVertical: 36
    },
    headerImg:
    {
      height: 80,
      width: 80,
      alignSelf: "center",
      marginBottom: 36
    },
    title: {
      fontSize: 27,
      fontWeight: '700',
      color: 'black',
      marginBottom: 6,
      textAlign: "center"
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '500',
      color: 'black',
      textAlign: 'center'
    },
    input: {
      marginBottom: 16
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: '500',
      marginBottom: 8,
      color:'black'
    },
    inputControl: {
      height: 44,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: "300",
      color: "#222"
    },
    btn: {
     
    },
    btnText: {
      fontSize: 18,
      fontWeight: '600',
      color: "#fff"
    },
    form: {
      marginBottom: 24,
      flex: 1
    },
    formAction: {
      marginVertical: 24,
      backgroundColor: '#1230AE',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#1230AE',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20
    },
    formFooter: {
      fontSize: 17,
      fontWeight: '600',
      color: "#222",
      textAlign: "center",
      letterSpacing: 0.15,
      textDecorationLine:'underline'
    },
    signUpLink:{
      textDecorationLine: 'underline', // Underline for 'Sign Up'
      color: 'red', // Red color for emphasis
    }
  })
  

export default SignIn
