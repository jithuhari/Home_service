import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
const Homesafe = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={styles.header}>
        <TouchableOpacity
            style={{bottom: 5,top:10,left:5}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              style={styles.iconItem}
              name="left"
              size={20}
              color={'#fff'}
            />
          </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            top: 8,
          }}>
          <Image
            source={require('../Assets/appbar.png')}
            style={{
              tintColor: '#fff',
              height: 45,
              width: 45,
            }}
          />
          <Text style={{color: '#fff', top: 11, fontWeight: 'bold', left: 6}}>
            Home Serve
          </Text>
        </View>
      </View>
        <View style={styles.container}>
         <View style={{borderRadius:15}}>
         <ImageBackground
            style={{height: 257, width: '99%', left: 4, tintColor: '#5F5F82',borderRadius:15}}
            source={require('../Assets/firstpic.png')}>
            <View style={styles.containers}>
              <View style={styles.textBox}>
                <Image
                  source={require('../Assets/saftyicon.png')}
                  style={{width: 25, height: 25, right: 12}}
                />
                <Text style={{color: Colors.primarycolor, right: 10}}>HOME safe</Text>
              </View>
            </View>
            <Text style={styles.text1}>Best-in class Safety Measures</Text>
          </ImageBackground>
         </View>
        </View>
        <View style={styles.container1}>
          <Image
            style={{width: 160, height: 160, borderRadius: 150 / 2, right: 10}}
            source={require('../Assets/woman.png')}
          />
          <Text style={styles.title}>jhdjdsj jnfvff knvjbnjbv</Text>
          <Text style={styles.subText}>
            jhdjdsj jnfvff knvjbnjbv jhdjdsj jnfvff knvjbnjbv vbjkvxjn jhdjdsj
            jnfvff knvjbnjbv vbjkvxjn kjnvjgndf jhdjdsj jnfvff nvjbnjbv vbjkvxjn
            kmdsvjnzvnjv vjnxdvn nvfnzjjhdjdsj jnfvff knvjbnjbv vbjkvxjn{' '}
          </Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.title}>jhdjdsj jnfvff knvjbnjbv</Text>
          <Text style={styles.subText}>
            jhdjdsj jnfvff knvjbnjbv vbjkvxjn jhdjdsj jnfvff knvjbnjbv vbjkvxjn
            kjnvjgndf jhdjdsj jnfvff nvjbnjbv vbjkvxjn kmdsvjnzvnjv vjnxdvn
            nvfnzjjhdjdsj jnfvff knvjbnjbv vbjkvxjn{' '}
          </Text>
          <Image
            style={{width: 150, height: 160, right: 140}}
            source={require('../Assets/employee.png')}
          />
        </View>
        <View style={styles.container1}>
          <Image
            style={{width: 160, height: 160, borderRadius: 150 / 2, right: 10}}
            source={require('../Assets/woman.png')}
          />
          <Text style={styles.title}>jhdjdsj jnfvff knvjbnjbv</Text>
          <Text style={styles.subText}>
            jhdjdsj jnfvff knvjbnjbv jhdjdsj jnfvff knvjbnjbv vbjkvxjn jhdjdsj
            jnfvff knvjbnjbv vbjkvxjn kjnvjgndf jhdjdsj jnfvff nvjbnjbv vbjkvxjn
            kmdsvjnzvnjv vjnxdvn nvfnzjjhdjdsj jnfvff knvjbnjbv vbjkvxjn{' '}
          </Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.title}>jhdjdsj jnfvff knvjbnjbv</Text>
          <Text style={styles.subText}>
            jhdjdsj jnfvff knvjbnjbv vbjkvxjn jhdjdsj jnfvff knvjbnjbv vbjkvxjn
            kjnvjgndf jhdjdsj jnfvff nvjbnjbv vbjkvxjn kmdsvjnzvnjv vjnxdvn
            nvfnzjjhdjdsj jnfvff knvjbnjbv vbjkvxjn{' '}
          </Text>
          <Image
            style={{width: 150, height: 160, right: 140}}
            source={require('../Assets/employee.png')}
          />
        </View>
        <View style={styles.container1}>
          <Image
            style={{width: 160, height: 160, borderRadius: 150 / 2, right: 10}}
            source={require('../Assets/woman.png')}
          />
          <Text style={styles.title}>jhdjdsj jnfvff knvjbnjbv</Text>
          <Text style={styles.subText}>
            jhdjdsj jnfvff knvjbnjbv jhdjdsj jnfvff knvjbnjbv vbjkvxjn jhdjdsj
            jnfvff knvjbnjbv vbjkvxjn kjnvjgndf jhdjdsj jnfvff nvjbnjbv vbjkvxjn
            kmdsvjnzvnjv vjnxdvn nvfnzjjhdjdsj jnfvff knvjbnjbv vbjkvxjn{' '}
          </Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.title}>jhdjdsj jnfvff knvjbnjbv</Text>
          <Text style={styles.subText}>
            jhdjdsj jnfvff knvjbnjbv vbjkvxjn jhdjdsj jnfvff knvjbnjbv vbjkvxjn
            kjnvjgndf jhdjdsj jnfvff nvjbnjbv vbjkvxjn kmdsvjnzvnjv vjnxdvn
            nvfnzjjhdjdsj jnfvff knvjbnjbv vbjkvxjn{' '}
          </Text>
          <Image
            style={{width: 150, height: 160, right: 140}}
            source={require('../Assets/employee.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Homesafe;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',


    
    // borderBottomColor:'grey',
    backgroundColor: Colors.primarycolor,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    // textAlign:'center',
    //alignItems:'center',
    fontWeight: 'bold',
    color: Colors.text,
    paddingLeft: 10,
  },
  container: {
    width: '99%',
    height: 260,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  text1: {
    paddingTop: 180,
    textAlign: 'center',
    color: Colors.backgroundcolor,
    fontSize: 20,
  },
  containers: {
    flexDirection: 'row',
    top: 150,
    left: 45,
    borderRadius:15
  },
  textBox: {
    height: 25,
    width: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    left: 75,
    borderRadius: 15,
  },

  container1: {
    flexDirection: 'row',
    width: 200,
    height: 200,
  },
  container2: {
    flexDirection: 'row',
    width: 200,
    height: 200,
  },
  title: {
    fontWeight: '700',
    color: Colors.primarycolor,
    left: 10,
  },
  subText: {
    textAlign: 'justify',
    alignContent: 'flex-start',
    paddingTop: 24,
    right: 135,
    

    color:'rgba(95, 95, 130, 1)'
  },
});
