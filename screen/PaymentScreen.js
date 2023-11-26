import React from "react";
import { TouchableOpacity } from "react-native";
import { View,Text, TextInput, StyleSheet, Image} from "react-native";

const PaymentScreen = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.top}>
            <View style={{flexDirection: 'row', marginTop: 150}}>
                <Text style={styles.text1}>Check  Out</Text>
                <Text style={styles.money}>$1.3</Text>
            </View>
            <Text style={{color: 'gray', marginLeft: 310}}>Including GST 18%</Text>

            <View style={styles.btn}>
            <TouchableOpacity>
                <View style={styles.creditCard}>
                    <Text style={{color: 'white'}}>Credit Card</Text>
                </View></TouchableOpacity>

              
                <View style={styles.ApplePay}>
                    <Text>Apple Pay</Text>
                </View>
            </View>
             
            </View>

            <View style={styles.cardNumber}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Card Number</Text>
                <TextInput style={styles.input}
                placeholder="Nhap vao so the hoặc quet"> 
            </TextInput> 
            <Image source = {require('../assets/Card_logo.png')}
            style={styles.logo}/>

            <Image source={require('../assets/Card_icon.png')}
                style={styles.icon}
            />
            </View>

            <View style={styles.cardName}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cardholder Name</Text>
                <TextInput style={styles.input}
                placeholder="Nhap ten chu the"> 
            </TextInput> 
            </View>


            <View style={styles.expDate}>
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Expiry Date</Text>
                    <TextInput style={styles.date}
                    placeholder="MM/DD/YY"> 
                </TextInput> 
            </View>

            <View style={{marginLeft: 90}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>CVV/CVC</Text>
                    <TextInput style={styles.date}> 
                </TextInput> 
                </View>
            </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Text style={{color: 'gray'}}>We will send you an order details </Text>
           <Text style={{color: 'gray'}} > to your email after the successfull payment</Text>
        </View>

        <TouchableOpacity>
        <View style={styles.button}>
            <Image source={require('../assets/lock_icon.png')}
            style={{marginRight: 5}}></Image>
            <Text style={styles.text2}>Pay for the order</Text>
      </View>
      </TouchableOpacity>
        </View>
    )
};

const styles =StyleSheet.create({
    top:{
        height: 300,
        width: 480,
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 70,
        marginLeft: 0,
        borderWidth: 1,
    },

    text1:{
        fontWeight: 'bold',
        fontSize: 20,
       marginLeft: 20,
    },

    money:{
        fontSize: 20,
        color: '#25D482',
        marginLeft: 260,
    },

    creditCard:{
        backgroundColor: '#25D482',
        height: 70,
        width: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ApplePay: {
        height: 70,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    btn:{
        flexDirection: 'row',
        height: 70, 
        width: 300,
        position: 'absolute',
        marginLeft: 80,
        marginTop: 270,
        borderWidth: 1,
        borderRadius: 20,
    },

    cardNumber:{
        marginTop: 50,
        marginLeft: 20,
        
    },

    input:{
        backgroundColor: '#e4e9f2',
        height: 50,
        width: 450,
        borderWidth: 1,
        padding: 15,
        borderColor: 'gray',
        borderRadius: 30,
    },

    logo:{
        position: 'absolute',
        marginLeft: 300,
        marginTop: 40,
    },

    icon:{
        position: 'absolute',
        marginTop: 40,
        marginLeft: 380,
    }, 

   cardName:{
        marginTop: 50,
        marginLeft: 20,
   }, 


   
   date:{
        height: 50, 
        width: 160,
        borderWidth: 1, 
        backgroundColor: '#e4e9f2',
        borderColor: 'gray',
        borderRadius: 20,
        padding: 17,
   },

   expDate:{
    marginTop: 50,
    marginLeft: 20,
    flexDirection: 'row',
   },

   button:{
        height: 70,
        width: 400,
        backgroundColor: '#25D482',
        marginLeft: 50,
        borderRadius: 25, 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
   },

   text2:{
        color: 'white',
        fontSize: 25,
       
   }
});

export default PaymentScreen;
