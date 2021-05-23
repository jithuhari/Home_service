import React, {useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import DocumentPicker from 'react-native-document-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const RegPartner = ({navigation}) => {
  const [addfile, setaddfile] = useState('');
  const Fileselected = () => {
    setaddfile('File Uploaded');
  };
  const fileurl='';
  const [open, setOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState('Aadhar card');
  const [items, setItems] = useState([
    {label: 'Aadhar Card', value: 'Aadhar Card'},
    {label: 'ID Card', value: 'ID Card'},
    {label: 'Driving License', value: 'Driving License'},
    {label: 'Passport', value: 'Passport'},
    {label: 'PAN Card', value: 'PAN Card'},
  ]);
  const [singleFile, setSingleFile] = useState('');
  const [multipleFile, setMultipleFile] = useState([]);
  const [sele,setsel] = useState('select your file')
  const openDocumentFile = async  () => {
    try {
      const res = await  DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log("jj")
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      const   fileurl = res.name;
      setsel(res.name)
      //Setting the state to show single file attributes
      setSingleFile(res);
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={{bottom: 5, left: 20, top: 0}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              style={styles.iconItem}
              name="left"
              size={20}
              color={Colors.backgroundcolor}
            />
          </TouchableOpacity>

          <View style={{width: 148, height: 70, paddingLeft: 105, top: 10}}>
            <Image
              style={{width: 45, height: 45, tintColor: '#fff'}}
              source={require('../Assets/appbar.png')}
            />
          </View>
          <Text style={styles.text}>Home Serve</Text>
        </View>

        <View style={styles.appbarcontainer}>
          <Text style={styles.headingStyle}>Register as Partner</Text>
        </View>
        <View style={styles.labelContainer}>
          <View>
            <Text style={styles.labelText}>Full Name</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'Enter full name'}
              placeholderTextColor="#BDBDBD"
              textContentType="name"
              keyboardType="name-phone-pad"
              autoCapitalize="none"></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Permanant Address</Text>
            <TextInput
              style={styles.txtAddr}
              multiline={true}
              placeholder={'Enter your Address'}
              placeholderTextColor="#BDBDBD"
              textContentType="fullStreetAddress"
              keyboardType="default"
              autoCapitalize="none"></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Address Proof</Text>
            <DropDownPicker
              open={open}
              dropDownValue={dropDownValue}
              items={items}
              setOpen={setOpen}
              setDropDownValue={setDropDownValue}
              setItems={setItems}
              style={{backgroundColor: 'white'}}
              containerStyle={{marginLeft: '5.2%', width: '90%'}}
              labelStyle={{
                fontSize: 14,
                textAlign: 'justify',
                color: Colors.primarycolor,
              }}
              selectedLabelStyle={{
                color: Colors.primarycolor,
                fontWeight: '900',
              }}
              placeholderStyle={{color: '#BDBDBD', fontWeight: 'bold'}}
              onChangeItem={item => setDropDownValue(item.value)}
            />
          </View>
          <View>
            <Text style={styles.labelText}>{dropDownValue} No.</Text>
            <TextInput
              style={styles.txtInput}
              placeholder={'Enter ID No.'}
              placeholderTextColor="#BDBDBD"></TextInput>
          </View>
          <View>
            <Text style={styles.labelText}>Upload Scanned ID Proof</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TouchableOpacity
                style={{marginLeft: 20}}
                onPress={() => {
                  openDocumentFile();
                  Fileselected();
                  
                }}>
                <MaterialCommunityIcons
                  name="file-upload-outline"
                  color="#5F5F82"
                  size={30}
                  style={{marginRight: 25, marginTop: 2}}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.viewScan}
                placeholder={sele}
                placeholderTextColor="#BDBDBD">
                  {fileurl}
                {/* {addfile} */}
              </TextInput>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => {
              navigation.navigate('profile');
              ToastAndroid.show('Profile Submitted', 2000);
            }}>
            <Text style={{color: '#fff', marginTop: 10, fontWeight: 'bold'}}>
              Submit for Verification
            </Text>
          </TouchableOpacity>
          <View style={{margin: 20}}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 414,
    height: 100,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    elevation: 1,
    backgroundColor: Colors.primarycolor,
  },
  headingStyle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
  },

  text: {
    fontSize: 20,
    fontWeight: '900',
    fontWeight: 'bold',
    color: '#ffffff',
    paddingLeft: 10,
    top: -5,
  },
  labelContainer: {
    flexDirection: 'column',
    marginTop: 40,
  },
  buttonContainer: {
    justifyContent: 'center',
    width: 340,
    height: 40,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 30,
  },
  appbarcontainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primarycolor,
    borderBottomEndRadius: 17,
    borderBottomStartRadius: 17,
  },
  labelText: {
    fontWeight: 'bold',
    color: '#5F5F82',
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 20,
    marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  txtInput: {
    color: '#BDBDBD',
    paddingHorizontal: 10,
    borderColor: '#DCDCDC',
    flex: 1,
    fontSize: 16,
    height: 40,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    left: 20,
    right: 10,
  },
  txtAddr: {
    color: '#BDBDBD',
    paddingHorizontal: 10,
    borderColor: '#DCDCDC',
    flex: 1,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    left: 20,
    right: 10,
  },
  txtScan: {
    margin: 10,
    alignItems: 'center',
    color: '#dcdcdc',
  },
  viewScan: {
    color: '#BDBDBD',
    paddingHorizontal: 10,
    borderColor: '#DCDCDC',
    flex: 1,
    fontSize: 16,
    height: 40,
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    right: 20,
  },

  btn1: {
    borderRadius: 6,
    backgroundColor: '#5F5F82',
    width: 80,
    height: 35,
    alignItems: 'flex-end',
  },
  submit: {
    borderRadius: 8,
    backgroundColor: Colors.primarycolor,
    width: '70%',
    height: 40,
    alignItems: 'center',
    marginTop: '5%',
  },

  textInput: {
    paddingTop: 180,
    textAlign: 'center',
    color: Colors.secondaryText,
    fontSize: 20,
  },
  button: {
    backgroundColor: Colors.primarycolor,
    width: '40%',
    height: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
export default RegPartner;
