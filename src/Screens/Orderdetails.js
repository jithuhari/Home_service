import React, {useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
  ToastAndroid,
  ScrollView,
  StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import {Button, Divider, Card, Title} from 'react-native-paper';
import Modal from 'react-native-modal';
const Orderdetails = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.backgroundcolor}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{top: 10, left: 20}}
          onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconItem}
            name="left"
            size={20}
            color={colors.backgroundcolor}
          />
        </TouchableOpacity>
        <View style={{width: 148, height: 47, paddingLeft: 90}}>
          <Image
            style={{
              flex: 1,
              width: 48,
              height: 10,
              bottom: 32,
              left: 5,
              tintColor: '#fff',
            }}
            source={require('../Assets/appbar.png')}
          />
        </View>
        <Text style={styles.text}>HOME SERVE</Text>
        <Text style={styles.headingStyle}>Order Details</Text>
      </View>
      <ScrollView>
        <View style={styles.cardView}>
          <Card.Content>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginTop: 20,
                left: -1,
                top: -11,
                color: colors.secondaryText,
              }}>
              Service Date{' '}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'normal',
                top: -1,
                color: colors.secondaryText,
              }}>
              02 April 2021 | 10:00 am
            </Text>
            <Divider
              style={{
                backgroundColor: 'rgba(51,52,88,0.06)',
                width: 307,
                left: -1,
                top: -26,
              }}
            />
          </Card.Content>
        </View>
        <View style={styles.cardView2}>
          <Card.Content>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginTop: 20,
                top: -11,
                left: -1,
                color: colors.secondaryText,
              }}>
              Requested Services{' '}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '200',
                top: -4,
                color: colors.secondaryText,
              }}>
              Home Sanitization
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'normal',
                top: -4,
                color: colors.secondaryText,
              }}>
              Size of house: 2BHK
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'normal',
                top: -4,
                color: colors.secondaryText,
              }}>
              Storey: Single
            </Text>
            <Divider
              style={{
                backgroundColor: 'rgba(51,52,88,0.06)',
                width: 307,
                left: -1,
                top: -61,
              }}
            />
          </Card.Content>
        </View>
        <View style={styles.cardView2}>
          <Card.Content>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginTop: 20,
                left: -1,
                bottom: 11,
                color: colors.secondaryText,
              }}>
              Service Address{' '}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'normal',
                top: -2,
                color: colors.secondaryText,
              }}>
              kjdbksfbfbzjvjfbjabj,
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'normal',
                top: -1,
                color: colors.secondaryText,
              }}>
              lfknjadvfv v klvnjznfv,
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'normal',
                top: -1,
                color: colors.secondaryText,
              }}>
              jbvhjbhbvbhzfbh
            </Text>
            <Divider
              style={{
                backgroundColor: 'rgba(51,52,88,0.06)',
                width: 307,
                left: -1,
                bottom: 55,
              }}
            />
          </Card.Content>
        </View>
        <View style={styles.cardView2}>
          <Card.Content>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginTop: 20,
                  top: -10,
                  left: 1,
                  color: colors.secondaryText,
                }}>
                Total amount
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginTop: 20,
                  bottom: 10,
                  left: '370%',
                  color: colors.secondaryText,
                }}>
                : ₹1899{' '}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'normal',
                  top: -8,
                  left: 2,
                  color: colors.secondaryText,
                }}>
                Discount
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'normal',
                  top: -8,
                  left: '979%',
                  color: colors.secondaryText,
                }}>
                : ₹50
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  top: 5,
                  color: colors.secondaryText,
                }}>
                Total Payable
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  top: 5,
                  left: '820%',
                  color: colors.secondaryText,
                }}>
                : ₹1,849{' '}
              </Text>
            </View>
            <Divider
              style={{
                backgroundColor: 'rgba(51,52,88,0.06)',
                width: 307,
                left: -1,
                marginTop: -19,
              }}
            />
          </Card.Content>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 7,
              backgroundColor: colors.backgroundcolor,
              height: 30,
              width: '30%',
              justifyContent: 'center',
              marginBottom: 0,
              top: 159,
            }}
            onPress={() => {
              toggleModal();
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: colors.Appbar,
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Modal
            animationType="pulse"
            transparent={true}
            isVisible={modalVisible}>
            <View style={styles.alertbox}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#333458',
                    marginStart: 20,
                  }}>
                  Cancel?
                </Text>
                <Text style={{fontSize: 14, marginTop: 10, marginStart: 20}}>
                  Are you sure to cancel booking ?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 30,
                    marginStart: 10,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#333458',
                      height: 40,
                      width: 140,
                      borderRadius: 7,
                    }}
                    onPress={() => {
                      navigation.navigate('Home');
                      ToastAndroid.show('Cancelled', 3000);
                    }}>
                    <Text
                      style={{
                        color: '#ffffff',
                        textAlign: 'center',
                        marginTop: 10,
                      }}>
                      YES
                    </Text>
                  </TouchableOpacity>
                  <View style={{marginRight: 5}} />
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#333458',
                      height: 40,
                      width: 140,
                      borderRadius: 7,
                    }}
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <Text
                      style={{
                        color: '#ffffff',
                        textAlign: 'center',
                        marginTop: 10,
                      }}>
                      NO
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.button2}>
          <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
            
          }}
            style={{
              borderWidth: 1,
              borderRadius: 7,
              backgroundColor: colors.backgroundcolor,
              height: 30,
              width: '30%',
              justifyContent: 'center',
              // marginBottom: 0,
              top: 159,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: colors.primarycolor,
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              Go To Home
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 145,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    elevation: 1,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    backgroundColor: colors.primarycolor,
  },
  headingStyle: {
    marginTop: 95,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: colors.backgroundcolor,
    left: -120,
    paddingLeft: -40,
    paddingRight: 10,
  },
  cardTitle: {
    marginTop: 35,
    color: colors.primarycolor,
    fontWeight: 'bold',
    fontSize: 16,
    left: 120,
  },
  cardView: {
    // marginTop: 20,
    width: '92%',
    height: 80,
    left: '4%',
    right: '4%',
    // bottom: 8,
    borderRadius: 10,
    backgroundColor: colors.continercolor,
    marginTop: StatusBar.currentHeight || 0,
  },
  button: {
    top: -130,
    left: 50,
  },
  alertbox: {
    backgroundColor: colors.backgroundColor,
  },
  modalView: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: 310,
    height: 150,
    alignItems: 'flex-start',
    shadowColor: '#000',
    bottom: 25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalButton: {
    borderRadius: 12,
    marginLeft: 10,
    // right:20,
    width: 96,
    height: 32,
    // elevation: 2,
    backgroundColor: '#d1d1d1',
    // top:-10
  },
  button2: {
    bottom:160,
    left: 185,
  },
  cardView2: {
    //marginTop: 17,
    width: '92%',
    height: 100,
    left: '4%',
    right: '4%',
    // bottom: 8,
    borderRadius: 10,
    backgroundColor: colors.continercolor,
    justifyContent: 'flex-start',
    flexDirection: 'column',

    marginTop: StatusBar.currentHeight || 0,
  },

  cardStyle: {
    marginTop: 5,
    backgroundColor: colors.backgroundcolor,
    borderRadius: 16,
    left: 15,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 6,
  },
  text: {
    fontSize: 15,
    fontWeight: '900',
    fontWeight: 'bold',
    color: colors.backgroundcolor,
    paddingLeft: -7,
    bottom: 30,
  },
  iconItem: {
    marginBottom: 50,
    paddingLeft: -5,
    left: -15,
    bottom: 10,
  },
});
export default Orderdetails;
