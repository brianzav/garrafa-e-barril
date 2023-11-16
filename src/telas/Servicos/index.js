import React from "react";

import { SafeAreaView, StatusBar, Text, FlatList } from "react-native";
import Item from './Item';

const servicos = [
{
    id: 1,
    nome: "Vinho Rosé brasileiro",
    preco: 79.9,
    descricao: "Espumante, gostoso",
},
{
    id: 2,
    nome: "Vinho argentino mendocino",
    preco: 89.9,
    descricao: "Gostoso!",
},
{
    id: 3,
    nome: "Vinhoo malbec",
    preco: 99.9,
    descricao: "Gostosisimoo!"
}
]

export default function Servicos(){
    return <SafeAreaView>
        <StatusBar />
        <Text>Serviços!</Text>
        <FlatList
            data={servicos}
            renderItem={({item}) => <Item {...item} />}
            keyExtractor={(id) => String(id)}
        />
    </SafeAreaView>
    
}