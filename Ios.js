import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
const PagIos = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>IOS</Text>
            <Text style={styles.content}>O iOS é o sistema operacional da Apple para dispositivos móveis. A plataforma foi lançada junto com o primeiro iPhone, em 29 de junho de 2007. Inicialmente, o programa era chamado de OS 1 e estava disponível exclusivamente para o famoso smartphone da empresa. Hoje, o software também é a a base do iPad e do iPod Touch.

            Com atualizações anuais, o sistema está chegando ao iOS 13, e podem existir alguns segredos e curiosidades em torno de suas origens. O TechTudo fez uma lista com cinco perguntas e respostas sobre o sistema operacional móvel da Apple.</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        marginBottom: 20,
    },
    content: {
        fontSize:18,
        alignItems:'center'
    }
});
 
export default PagIos;