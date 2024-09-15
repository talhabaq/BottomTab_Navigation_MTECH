import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const Home = ({ navigation }) => {
 
  return (

    <SafeAreaView>
    <ScrollView>
      <View>
        <Image
          source={{ uri: "https://shorturl.at/hxFHF" }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.tex1}>All-in-One
        Web, App, and Social Solutions</Text>
        <Text style={styles.tex2}>Receive guidance on digital strategy, direct access to design and development experts, and a platform that’s successfully launched over 100+ apps, websites, and social campaigns globally</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate("About")}
          >
             <Text style={styles.signInText}>Read About The Company</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  image:
  {
    height: 500,
    width: 400,
    alignSelf: "center",
    backgroundColor: 'transparent'
  },
  container:{
    marginTop:15,
    backgroundColor: '#1230AE',
    borderRadius: 8,
    borderWidth: 15,
    borderColor: '#1230AE',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    margin:40
  },
  signInText: {
    fontSize: 18,
    fontWeight: '600',
    color: "#fff"
  },
  tex1:{
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    margin: 30,
    marginBottom:0
  },
  tex2:{
    color:'black',
    margin:30,
    fontSize:25,
    fontWeight:"300"
  }
  
})

export default Home
