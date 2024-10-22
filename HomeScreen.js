import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
 
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-Vindo a nossa página!</Text>
            <Button
            title="Ir para IOS"
            onPress={() => navigation.navigate('Page1')} // Navega para Page1
            />
            {/* Botão para navegar para a Page2 */}
            <Button
            title="Ir para Android"
            onPress={() => navigation.navigate('Page2')} // Navega para Page2
            style={styles.button}
            />
        </View>
    );
};
 
// Estilos para a página inicial
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
    },
});
 
export default HomeScreen;
 