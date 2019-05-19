import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:350,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,

        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
        borderRadius:15
    },
});

const CustomRow = ({ title, description, image_url }) => (
    <View style={styles.container}>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text  style={styles.description}>
                {description}
            </Text>
            <View style={{height:2,marginTop:20, width:350, backgroundColor:'#F4F6F6'}}></View>
        </View>
        
        <TouchableOpacity
          style={{marginTop:10,
            padding:5,
            justifyContent:'center',
            width:90,
            height:40,
            marginLeft:30,
            
            backgroundColor:'#F4F6F6',
            borderRadius:20,
            borderWidth: 1,
            borderColor: '#fff'}}
          activeOpacity = { .5 }
       >
 
            <Text style={{color:'blue',fontSize:15,
      textAlign:'center',}}> GET </Text>
            
      </TouchableOpacity>

   
    </View>
);

export default CustomRow;