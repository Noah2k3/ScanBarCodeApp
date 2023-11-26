import React from "react";
import { TouchableOpacity } from "react-native";
import { View,Text, TextInput, StyleSheet, Button , Image} from "react-native";

const PaymentScreen = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.top}>
            <View style={{flexDirection: 'row', marginTop: 150}}>
                <Text style={styles.text1}>Check  Out</Text>
                <Text style={styles.money}>$1.3</Text>
            </View>
            <Text style={{color: 'gray', marginLeft: 310}}>Including GST 18%</Text>

            <TouchableOpacity style={{flexDirection: 'row', position: }}>
                <View style={styles.creditCard}>
                    <Text>Credit Card</Text>
                </View>
                <View style={styles.ApplePay}>
                    <Text>Apple Pay</Text>
                </View>
            </TouchableOpacity>
             
            </View>
        </View>
    )
};

const styles =StyleSheet.create({
    top:{
        height: 300,
        width: 450,
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 70,
        marginLeft: 20,
        borderWidth: 1,
    },

    text1:{
        fontWeight: 'bold',
        fontSize: 20,
       marginLeft: 20,
    },

    money:{
        fontSize: 20,
        color: 'green',
        marginLeft: 260,
    },

    creditCard:{
        color: 'white',
        backgroundColor: 'green',
        height: 50,
        width: 100,
    },

    ApplePay: {
        height: 50,
        width: 100,
    }, 

});

export default PaymentScreen;
