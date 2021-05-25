import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,Modal,FlatList
} from 'react-native';
import {Searchbar, Card, Title} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../config/colors';
import CheckBox from '@react-native-community/checkbox';
import {color} from 'react-native-reanimated';
import DateTimePicker from '@react-native-community/datetimepicker';

const ServiceSummay = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
    const [checked, unchecked] = useState(false);



    const [place, setplace] = useState('Banglore');
  console.log(place);
  const press = k => {
    setSelectedId(k);

    DATA.filter(on => {
      if (on.id === k) {
        const kk = on.location;
        setplace(kk);
      }
    });
  };

  const renderItem = ({item}) => {
    const borderColor =
      item.id === selectedId ? Colors.primarycolor : Colors.secondaryText;
    const borderWidth = item.id === selectedId ? 2 : 0.5;
    return (
      <Item
        item={item}
        location={place}
        onPress={() => {
          press((k = item.id));
        }}
        // backgroundColor={{backgroundColor}}
        borderWidth={{borderWidth}}
        borderColor={{borderColor}}
        // textColor={{color}}
      />
    );
  };


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  


    // date picker start

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  let monthNumber = date.getMonth();
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let monthName = monthNames[monthNumber];

  // date picker end







  return (
    <View style={{backgroundColor:Colors.backgroundcolor,height:'1 00%'}}>
     
      <View>
      
        {/*headerview */}
        <View style={styles.header}>
        <View style={{flexDirection: 'row',top:-20}}>
          <TouchableOpacity
            style={{paddingLeft: 20, top: 7}}
            onPress={() => navigation.goBack(null)}>
            <AntDesign name="left" size={20} color="white"></AntDesign>
          </TouchableOpacity>
          <Image
            source={require('../Assets/appbar.png')}
            style={{
              height: 45,
              width: 45,
              tintColor: Colors.backgroundcolor,
              left: 80,
              top: 4,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: Colors.backgroundcolor,
              fontWeight: 'bold',
              left: 81,
              top: 14,
            }}>
            HOME SERVE
          </Text>
        </View>
        <Text
          style={{
            color: Colors.backgroundcolor,
            fontSize: 16,
            fontWeight: 'bold',
            top: 30,
            justifyContent: 'flex-start',
            right: 60,
          }}>
          Service Summary
        </Text>
      </View>
        {/*headerview ends*/}
      </View>
      <ScrollView style={{backgroundColor: Colors.backgroundcolor, height: '100%',top:20}}>
        {/*first rectangle view starts */}
        <View style={styles.rect1}>
          <Text style={styles.textstyle}>Service Date:</Text>
          <View style={styles.line} />
          
           {/** <Text
                style={{
                 color: Colors.secondaryText,
                 padding: 8,
                 top: 6,
                 paddingLeft: 30,
                }}>
            02 April 2021 | 
             </Text> */}

              <Text
                style={{
                 color: Colors.secondaryText,
                 padding: 8,
                 top: 6,
                 paddingLeft: 30,
                }}>
            {' '}
            {date.getDate()}{' '} | {' '}
            {monthName}{' '}|{' '}
            {date.getFullYear()} 
             </Text>


             
        <TouchableOpacity style={styles.textBox} >
          
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour={true}
              display="calendar"
              onChange={onChange}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
            style={{flexDirection: 'row', left: 250, bottom: 10}}>
            <Text
              style={{
                color: Colors.secondaryText,
                fontSize: 15,
                fontWeight: 'bold',
                bottom: 11,
              }}   onPress={showDatepicker}>
              Change{' '}
            </Text>
            
          </TouchableOpacity>
        </View>

        {/*first rectangle view ends */}

        {/*2 rectangle view starts */}
        <View style={styles.rect2}>
          <Text style={styles.textstyle}>Service Address:</Text>
          <View style={styles.line} />
          <Text
            style={{
              color: Colors.secondaryText,
              padding: 8,
              top: 0,
              paddingLeft: 30,
            }}>
            {'agthujggddfhss\nsfhkuhhvg\nadgbbijgfcv'}
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', left: 250, bottom: 17}}
             //onPress={() => {isModalVisible(true)
            //}}
            >  
            <Text
              style={{
                color: Colors.secondaryText,
                fontSize: 15,
                fontWeight: 'bold',
                bottom: 11,
              }}>
              Change{' '}
            </Text>
            
          </TouchableOpacity>
        </View>

        
        
        




        {/*2 rectangle view ends */}

        {/*3 rectangle view starts */}
        <View style={styles.rect3}>
          <Text style={styles.textstyle}>Requested Services:</Text>
          <View style={styles.line} />
          <View style={{flexDirection: 'column', padding: 5}}>
            <Text style={styles.text1}> Home Sanitization</Text>
            <Text style={styles.text2}> Size of house: 2BHK</Text>
            <Text style={styles.text4}> - 1 +</Text>
            <Text style={styles.text5}> Storey: Single</Text>
          </View>

          <Text></Text>
        </View>

        {/*3 rectangle view ends */}

        {/*4 rectangle view starts */}
        <View style={styles.rect4}>
          <View style={{flexDirection: 'column', padding: 10}}>
            <Text style={styles.text1}>Total Amount:</Text>
            <Text style={styles.text2}>Total Amount:</Text>
            <Text style={styles.text1}>Total Payable:</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              bottom: 90,
              left: 250,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row', padding: 3}}>
              <FontAwesome
                name="rupee"
                size={15}
                color={Colors.secondaryText}
              />
              <Text style={{bottom: 3, color: Colors.secondaryText}}>
                1,899
              </Text>
            </View>
            <View style={{flexDirection: 'row', padding: 3}}>
              <Text style={{bottom: 3, color: Colors.secondaryText}}> - </Text>
              <FontAwesome
                name="rupee"
                size={15}
                color={Colors.secondaryText}
              />
              <Text style={{bottom: 3, color: Colors.secondaryText}}>50</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 3}}>
              <FontAwesome
                name="rupee"
                size={15}
                color={Colors.secondaryText}
              />
              <Text style={{bottom: 3, color: Colors.secondaryText}}>
                1,899
              </Text>
            </View>
          </View>
        </View>

        {/*4 rectangle view ends */}

        {/*checkbox */}

        <View style={{flexDirection:'row',top:50,left:20}}>

              <CheckBox
                 value={isSelected}
                 tintColors={{false: Colors.secondaryText}}
                onValueChange={setSelection}
                //status={isSelected ? 'checked' : 'unchecked'}
                //onPress={()=> {
                   // setSelection(! isSelected);
               /// }}
                />
               <Text style={{margin:8,color:Colors.secondaryText,right:6}}>Make payment after service completion  </Text>
              


            </View>

            <View style={{flexDirection:'row',top:50,left:20}}>

              <CheckBox
                value={checked}
                tintColors={{false: Colors.secondaryText}}
                onValueChange={unchecked}
                />
               <Text style={{margin:8,color:Colors.secondaryText,right:6}}>I agree to terms and condition </Text>
               


            </View>
        {/*check box end */}

        {/*button */}

        <TouchableOpacity style={{top:50,}}  onPress={() => {
              navigation.navigate('ServiceBooking');
            }}>
          <View style={styles.buttonstyle}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('ServiceBooking');
            }}>
              <Text
                style={{
                  color: Colors.backgroundcolor,
                  fontSize: 18,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  left: 110,
                  top: 6,
                }}>
                Book Service
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/*button */}
        
      </ScrollView>
       
    </View>   
  );
};

export default ServiceSummay;
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 110,
        flexDirection: 'row',
        paddingTop: 1,
        alignItems: 'center',
        //padding:2,
        // paddingLeft:2,
        elevation: 0,
        // borderBottomColor:'grey',
        backgroundColor: Colors.primarycolor,
        // justifyContent:'center'
        borderBottomRightRadius: 15,
        borderBottomStartRadius: 15,
      },

  rect1: {
    width: '94%',
    height: 75,
    backgroundColor: Colors.continercolor,
    borderRadius: 10,
    top: 7,
    left: 10,
  },
  rect2: {
    width: '94%',
    height: 100,
    backgroundColor: Colors.continercolor,
    borderRadius: 10,
    top: 20,
    left: 10,
  },

  rect3: {
    width: '94%',
    height: 108,
    backgroundColor: Colors.continercolor,
    borderRadius: 10,
    top: 35,
    left: 10,
  },
  rect4: {
    width: '94%',
    height: 80,
    backgroundColor: Colors.continercolor,
    borderRadius: 15,
    top: 50,
    left: 10,
  },

  textstyle: {
    color: Colors.secondaryText,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    paddingLeft: 30,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 52, 88, 0.06)',
    top: 3,
  },
  text1: {
    color: Colors.secondaryText,
    padding: 1,
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  text2: {
    color: Colors.secondaryText,
    //padding:1,
    paddingLeft: 20,
  },
  text5: {
    color: Colors.secondaryText,
    //padding:1,
    paddingLeft: 20,
    bottom:18,
  },
  text3: {
    fontSize: 15,
    color: Colors.backgroundcolor,
    fontWeight: 'bold',
    left: 60,
    top: 11,
  },
  buttonstyle: {
    width: 310,
    height: 40,
    backgroundColor: Colors.secondaryText,
    borderRadius: 10,
    left: 30,
    top: 20,
  },
  text4: {
    color: Colors.secondaryText,
    //padding:1,
    paddingLeft: 20,
    bottom:18,
    left:240,
  },
});
