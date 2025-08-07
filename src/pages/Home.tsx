import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import batmanLogo  from '../../assets/batman.png'


export function Home() {
    const [visible, setVisible] = useState(true)
    const [buttonEnable, setButtonEnable] = useState(false)
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [descricao, setDescricao] = useState('')
    
    function handleNome(text: string) {
        setNome(text)
        handleEnableButton()
    }

    function handleTel(text: string) {
        setTelefone(text)
        handleEnableButton()
    }

    function handleEndereco(text: string) {
        setEndereco(text)
        handleEnableButton()
    }

    function handleDesc(text: string) {
        setDescricao(text)
        handleEnableButton()
    }

    function handleEnableButton() {
        if (nome && telefone && endereco && descricao) {
            setButtonEnable(true)
        } else {
            setButtonEnable(false)
        }
    }

    function clearInputsAndSend() {
        Alert.alert('Enviado', 'Seu chamado foi enviado com sucesso')
        setNome('')
        setTelefone('')
        setEndereco('')
        setDescricao('')
        setButtonEnable(false);
        setVisible(false);
    }

    return (
        <View style={styles.container}>
            <View style={!visible ? styles.home : styles.invisible}>
                <Image 
                source={batmanLogo}
                />
                <Pressable onPress={() => setVisible(!visible)} style={styles.button}>
                    <Text style={styles.text}>Ativar Bat-Sinal</Text>
                </Pressable>
            </View>

            <View style={visible ? styles.form : styles.invisible}>
                <Image 
                style={{height: 90, resizeMode: 'contain', alignSelf: 'flex-start'}}
                source={batmanLogo}
                />
                <TextInput onChangeText={(e) => handleNome(e)} value={nome} placeholder='Seu Nome' style={styles.input} />
                <TextInput onChangeText={(e) => handleTel(e)} value={telefone} placeholder='Telefone' style={styles.input} />
                <TextInput onChangeText={(e) => handleEndereco(e)} value={endereco} placeholder='Endereço da ocorrência' style={styles.input} />
                <TextInput onChangeText={(e) => handleDesc(e)} value={descricao} numberOfLines={10} placeholder='Descrição da ocorrência' style={[styles.input, { height: 80}]} />
                <Pressable disabled={!buttonEnable} onPress={clearInputsAndSend} style={styles.button}>
                    <Text style={[styles.text]}>Enviar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e7e7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    home: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 100
    },
    button: {
        padding: 20,
        backgroundColor: '#1c1c1c',
        borderRadius: 5      
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    invisible: {
        display: 'none'
    },
    form: {
        flex: 1,
        width: '100%',
        paddingTop: 50,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 50
    },
    input: {
        borderColor: '#1c1c1c',
        borderWidth: 2,
        width: '90%',
        borderRadius: 8,
        
    }
})