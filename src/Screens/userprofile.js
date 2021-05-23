import React, {useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  ToastAndroid,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import {Button} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNModal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import Modal from 'react-native-modal';

const Profile = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [image, setImage] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU',
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(0);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(0);
    });
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(0)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.bottomHeader}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{bottom: 5, top: 10, left: 5}}
          onPress={() => navigation.goBack(null)}>
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
      <View
        style={{
          // flex: 2,
          backgroundColor: Colors.primarycolor,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <Text style={styles.text1}>Edit Profile</Text>
      </View>
      <ScrollView style={{height: '100%'}}>
        <View style={styles.containerDP}>
          {/* <BottomSheet
            ref={bs}
            snapPoints={[330, 0]}
            renderContent={renderInner}
            renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
            
          /> */}
          {/* <Animated.View
            style={{
              margin: 20,
              opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
            }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity 
              onPress={() => bs.current.snapTo(0)}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    source={{
                      uri: image,
                    }}
                    style={{height: 100, width: 100}}
                    imageStyle={{borderRadius: 15}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <FontAwesome
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View> */}
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              toggleModal();
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
            {/* modal */}
            <Modal
              isVisible={isModalVisible}
              hasBackdrop={true}
              backdropOpacity={0}
              style={{backgroundColor: 'rgba(52, 52, 52, alpha)'}}
              onBackdropPress={() => {
                toggleModal();
              }}>
              <View style={{bottom: -240}}>
                <View style={styles.panel}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.panelTitle}>Upload Photo</Text>
                    <Text style={styles.panelSubtitle}>
                      Choose Your Profile Picture
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={takePhotoFromCamera}>
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={choosePhotoFromLibrary}>
                    <Text style={styles.panelButtonTitle}>
                      Choose From Library
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={() => {
                      bs.current.snapTo(0);
                      toggleModal();
                    }}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {/* modal end */}
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <View style={styles.containers}>
            <Text
              style={{
                marginLeft: 15,
                fontWeight: 'bold',
                fontSize: 16,
                color: Colors.secondaryText,
              }}>
              Name
            </Text>
            <View>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Enter Full Name"
                placeholderTextColor="#BDBDBD"
                textContentType="name"
                autoCompleteType="name"
                returnKeyType="next"
                underlineColor="transparent"
              />
            </View>
          </View>
          <View style={styles.containers}>
            <Text
              style={{
                marginLeft: 15,
                fontWeight: 'bold',
                fontSize: 16,
                color: Colors.secondaryText,
              }}>
              Mobile Number
            </Text>
            <View>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Enter Mobile Number"
                placeholderTextColor="#BDBDBD"
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                underlineColor="transparent"
              />
            </View>
          </View>
          <View style={styles.containers}>
            <Text
              style={{
                marginLeft: 15,
                fontWeight: 'bold',
                fontSize: 16,
                color: Colors.secondaryText,
              }}>
              Email ID
            </Text>
            <View>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Enter Email-ID"
                placeholderTextColor="#BDBDBD"
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="done"
                underlineColor="transparent"
              />
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.btn1}
                onPress={() => {
                  ToastAndroid.show('Cancelled', 2000);
                }}>
                <Text style={{fontWeight: 'bold', marginTop: 10}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => {
                  navigation.goBack();
                  ToastAndroid.show('Updated', 2000);
                }}>
                <Text
                  style={{
                    color: Colors.backgroundcolor,
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <View style={{height: 130}}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    elevation: 0,
    backgroundColor: Colors.primarycolor,
    // borderBottomRightRadius: 15,
    // borderBottomLeftRadius: 15,
  },
  containers: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: Colors.backgroundcolor,
    width: '70%',
    height: 200,
    marginTop: 50,
  },
  rnmodalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalClose: {
    justifyContent: 'flex-end',
  },

  textInputStyle: {
    color: '#BDBDBD',
    paddingHorizontal: 10,
    borderColor: '#BDBDBD',
    flex: 1,
    fontSize: 16,
    height: 40,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    left: 10,
    right: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    // textAlign:'center',
    //alignItems:'center',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: 10,
  },
  text1: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: Colors.backgroundcolor,
  },

  containerDP: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DPcard: {
    borderRadius: 70,
    borderWidth: 2,
    width: 80,
    height: 80,
    borderColor: Colors.primarycolor,
    backgroundColor: '#f1f3f6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  btn1: {
    borderRadius: 8,
    borderColor: Colors.primarycolor,
    marginRight: 20,
    borderWidth: 2,
    width: 96,
    height: 40,
    alignItems: 'center',
  },
  btn2: {
    borderRadius: 8,
    backgroundColor: Colors.primarycolor,
    width: 96,
    height: 40,
    alignItems: 'center',
  },
  textInput: {
    paddingTop: 180,
    textAlign: 'center',
    color: Colors.text,
    fontSize: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  container2: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bottomHeader: {
    backgroundColor: '#ffffff',
    shadowColor: '#333333',
    shadowOffset: {width: -2, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 30,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.continercolor,
    // marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panel: {
    padding: 20,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    margin: 0,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: Colors.primarycolor,
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
});
export default Profile;
