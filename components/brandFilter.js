import {StyleSheet, Text, Pressable, View} from 'react-native';



export default function BrandFilterBtn({brandName, logo}) {
    return(
        <Pressable>
            <View style={styles.container}>
                {logo}
                <Text style={styles.label}>{brandName}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create ({ 
    container: {
        width: 60, 
        height: 60,
        backgroundColor: "#d9d9d9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12.5,
        gap: 2
    },

    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 8,
        color: '#444444'
    }
});