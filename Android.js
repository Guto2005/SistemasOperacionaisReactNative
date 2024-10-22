import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
const PagAndroid = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Android</Text>
            <Text style={styles.content}>Android é um termo proveniente do inglês, tanto significando o sistema operacional para aparelhos moveis quanto uma máquina que possui aparência humana.


            Essa palavra pode ser traduzida para o português como “androide“. No entanto, atualmente ela costuma ser mais utilizada para designar um sistema operacional (SO) para aparelhos móveis como smartphones e tablets.

            Tal sistema possui sua base no SO Linux, sendo esse criado pela Open Handset Alliance, tendo ainda a parceria de outras, como é o caso do Google (tempos depois).

            Um sistema operacional para aparelhos móveis possui a mesma função que os sistemas para computador, realizando o gerenciamento dos processos que os usuários precisam executar ou que sejam executados em segundo plano no aparelho.

            Android é um sistema operacional para aparelhos móveis que é um concorrente do iOS, esse segundo é um sistema operacional também para dispositivos móveis, mas o qual é produzido pela Apple. Outros concorrentes do Android são o Blackberry OS e o Symbian, mas que não chegam a ser concorrente diretos.

            O primeiro dispositivo móvel que rodou o Android foi o celular T-Mobile G1 (da HTC Dream), que a Google fabricou no ano de 2008 (o Android foi lançado de forma oficial nesse mesmo ano). Atualmente, esse é o SO mais usado em todo o mundo.

            Uma curiosidade é que para esse sistema, desenvolvido pelos empresários Rich Miner, Nick Sears, Andy Rubin e Chris White, se tinha o foco de que ele fosse usado em câmera fotográficas.

            O sistema operacional Android foi criado pela empresa Android Inc., qual foi fundada no ano de 2003, no estado da Califórnia.</Text>
            {/* Botão para á página inicial */}
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
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
        fontSize:14,
        alignItems:'center'
    }
});
 
export default PagAndroid;