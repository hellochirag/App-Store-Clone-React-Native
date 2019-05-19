import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor:'white'

    },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                />}
            />

    </View>
);

export default CustomListview;