import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,Image,TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import {Picker} from '@react-native-picker/picker';

const Homesanitization=()=>{
    const [text,setText]=useState('');
    const[subtext,setSubText]=useState("HOME SANITIZATION SERVICES")
    const [selectedValue, setSelectedValue] = useState("");
    return(
             <View style={{flex:1,backgroundColor:Colors.background}}>  
             <ScrollView>
         {/*header*/}
             <View style={styles.header}>
             <TouchableOpacity style={{top:15,left:20}} onPress={()=> navigation.goBack()}>
             <AntDesign style={styles.iconItem} 
             name="left" 
             size ={20}
             color={Colors.background}/>
            </TouchableOpacity>  
            <View style={{width:140,height:85,paddingLeft:85}}>
            <Image style={{width:35,height:35,padding:29,tintColor:Colors.background}} 
            source=
            {require('../Assets/appbar.png')}/>
           </View>
           <Text style={styles.text}>Home Serve</Text>
            <View style={styles.viewfirst}>
            <View style={styles.textInput}>
            <TouchableOpacity style={{bottom:1,right:35,flexDirection:'row'}}>
             <AntDesign style={styles.iconItem} 
             name="search1" 
             size ={20}
             color={Colors.Appbar}
             />
            </TouchableOpacity>
            <TextInput 
             placeholder="search for a service"
             placeholderTextColor = "grey"
             underlineColorAndroid='transparent'
             right={55}
             onChangeText={(text) => this.setState({text})}>
            </TextInput> 
           </View>
            <View>
            <Text style={styles.text1}>{subtext}</Text>
            </View>
           </View>   
           </View>
           {/*second View*/}
           <View style={styles.container}>
           <View style={styles.textBox}>
           <Image source={require('../Assets/cleaning/offer.png')}style={{width:17,height:17,top:5,tintColor:Colors.background}}></Image>
           <Text style={{ fontSize: 15,padding:2,left:7}} >Upto 35% off on Homesanitization services</Text>
                    </View>
                    </View>
           {/*first rectangle*/}
            <View style={styles.container2}>
            <Text style={styles.text2}>Home Sanitization</Text>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <View View style={{flexDirection: 'row'}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>Featccncncn ncjc cncjnj slvhnfvskak</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>Featccncncn ncjc cncjnj slvhnfvskak</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>Featccncncn ncjc  njnkvjdf cncjnj slskak</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.textdot}>{'\u2022'}</Text>
            <Text style={styles.text3}>Featccncncn cncjnj slvhnfvskak</Text>
            </View>
            <View style={{padding:49,flexDirection:'row',marginHorizontal:1}}>
            <Text style={{bottom:19,right:35,color:Colors.Appbar,fontWeight:'700'}}>Size of house:</Text>
     <View style={styles.container4}>
      <Picker
        selectedValue={selectedValue}
        mode={"dropdown"}
        style={{position:'absolute',width:'100%',height:50,left:10,color:Colors.background}}
        placeholder="Select size of your house/Apartment"
        placeholderStyle={{color:Colors.Appbar}} 
        plceholderIconColor={{color:Colors.Appbar}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select size of your house/Apartment" value="Select size of your house/Apartment" />
        <Picker.Item label="1RK" value="1RK" />
        <Picker.Item label="1BHK" value="1BHK" />
        <Picker.Item label="2BHK" value="2BHK" />
        <Picker.Item label="3BHK" value="3BHK" />
        <Picker.Item label="4BHK" value="4BHK" />
        <Picker.Item label="5BHK" value="5BHK" />
        <Picker.Item label="Duplex" value="Duplex" />
      </Picker>
    </View>
            </View>
            <View style={{bottom:35,flexDirection:'row',marginHorizontal:3,justifyContent:'flex-start'}}>
            <Text style={{bottom:19,left:12,color:Colors.Appbar,fontWeight:'700'}}>Storey:</Text>
            <TouchableOpacity style= {styles.button1}>
            <Text style = {styles.buttonText}>single</Text>
           </TouchableOpacity>
           <TouchableOpacity style= {styles.button2}>
           <Text style = {styles.buttonText}>duplex</Text>
           </TouchableOpacity>
           </View>
           <View style={{left:29,top:30}}>
                       <TouchableOpacity style= {styles.button3}>
                       <Text style = {styles.buttonText1}>Select</Text>
                       </TouchableOpacity>
                       </View>
                       </View>
            {/*second rectangle*/}
           <View style={styles.containers}>
           <Text style={{color:Colors.Appbar,left:20,top:10,fontWeight:'700'}}>Cleaning service includes</Text>
           <View style={styles.containers1}>
           <View style={styles.textBox1}>
           <View style={styles.textBox2}>
           <Text style={{textAlign:'center'}}>1</Text>
           </View>
           <Text style={{left:8,top:15,color:Colors.secondaryText}}>Treatment with certified antiviral solutions</Text>
           </View>
           <View style={styles.textBox4}>
           <View style={styles.textBox3}>
           <Text style={{textAlign:'center'}}>2</Text>
           </View>
           </View>
           </View>
           </View>
        </ScrollView>
        </View>
    );
}
export default Homesanitization;
const styles=StyleSheet.create({
    header:{
        width:'99%',
        height:150,
        flexDirection:'row',
        paddingTop:8,
        // alignItems:'center',
        borderRadius:10,
        elevation:1,
        backgroundColor:Colors.Appbar,
        left:2,right:3
    },
    text:{
        fontSize: 15,
        fontWeight:'900',
       // textAlign:'center',
        //alignItems:'center',
         fontWeight:'bold',
         color:Colors.text,
        paddingLeft:10,
        paddingTop:17,
    },
    viewfirst:{
      flexDirection:'row',
    top:20,
    right:270,
    justifyContent:'center',
    alignItems:'center'
    },
    textInput:{
      height:35,
      width:315,
      backgroundColor:Colors.background,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      left:79,
      borderRadius:10
  },
  text1:{
    top:30,
    right:165,
    color:Colors.text,
  },
    container:{
    flex:1,
    top:15,
    alignItems:'center',
    },
    textBox:{
      height:40,
      width:325,
      backgroundColor:Colors.secondary,
      borderRadius:9,
      padding:6,
      flexDirection:'row'
    },
    container2:{
      height:320,
      width:329,
      backgroundColor:Colors.rectangle,
     // opacity:0.5,
      top:35,left:15,
      borderRadius:10,
    },
    text2:{
      color:Colors.Appbar,
      padding:10,
      left:10,
      textDecorationLine:'underline',
      fontWeight:'700',
      fontSize:18
  },
    textdot:{
      paddingLeft:18,
      color:Colors.secondaryText
    },
    text3:{
      color:Colors.secondaryText,
      flex: 1,
         paddingLeft: 1
    },
    container3: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center",
      height:10,
      //backgroundColor:Colors.background,
      right:45
    },
    container4:{
      height:40,
      borderColor:Colors.background,
      width:150,
      borderWidth:1,
      borderRadius:20
    },
    button:{
        backgroundColor:Colors.background,
        width:'120%',
        height: 30,
        borderRadius:7,
       //alignItems: 'center',
        bottom:20,
        right:120,
        left:1
      },
      buttonText:{
        color:Colors.secondaryText,
        fontWeight:'bold',
        right:2
    },
    button1:{
      backgroundColor:Colors.background,
      width:'25%',
      height: 30,
      borderRadius: 7,
      justifyContent: 'space-around',
      alignItems:'center',
      bottom:20,
      left:30,
      },
      button2:{
        backgroundColor:Colors.background,
        width:'25%',
        height: 30,
        borderRadius: 7,
        justifyContent: 'space-around',
        bottom:20,
        left:43,
        alignItems:'center'
      },
     buttonText1:{
      color:Colors.background,
      fontWeight:'bold'
  },
  button3:{
    backgroundColor:Colors.secondaryText,
    width:'30%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom:40,
   left:190,
     },
     iconItem:{
       right:30,
       color:Colors.Appbar
     },
     containers:{
      backgroundColor:Colors.rectangle,
      top:50,
      //padding:70,
      height:189,
      width:329,
      left:18,
      borderRadius:10,
      },
      containers1:{
        flexDirection:'row',
        justifyContent:'flex-start',
        borderRadius:10
      },
      textBox1:{
        height:60,
        width:240,
        backgroundColor:Colors.background,
        left:10,
        flexDirection:'row',
        top:20,
        paddingBottom:10,
        borderRadius:7
      },
      textBox2:{
        left:5,
        top:20,
        backgroundColor:Colors.rectangle,
        height:20,
        width:20,
      },
      textBox3:{
        left:20,
        top:20,
        backgroundColor:Colors.rectangle,
        height:20,
        width:20,
      },
      textBox4:{
        height:60,
        width:60,
        backgroundColor:Colors.background,
        left:20,
        top:20,
        alignSelf:'center',
        justifyContent:'space-between',
        borderRadius:7
      },
})
