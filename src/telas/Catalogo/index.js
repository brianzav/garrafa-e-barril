import React from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";

const winesData = {
  argentinos: [
    { id: '1', name: 'Guaspari Syrah Vista ', price: 20, image: require('../../../assets/argentino1.png') },
    { id: '2', name: 'Guaspari Syrah  ', price: 20, image: require('../../../assets/argentino1.png') },
  ],
  brasileiros: [
    { id: '1', name: 'Guaspari Syrah Vista ', price: 20, image: require('../../../assets/argentino1.png') },
    { id: '2', name: 'Guaspari Syrah Vista ', price: 20, image: require('../../../assets/argentino1.png') },
  ],
  uruguaios: [
    { id: '1', name: 'Guaspari Syrah Vista ', price: 20, image: require('../../../assets/argentino1.png') },
    { id: '2', name: 'Guaspari Syrah Vista ', price: 20, image: require('../../../assets/argentino1.png') },
  ],
  chilenos: [
    { id: '1', name: 'Guaspari Syrah Vista ', price: 20, image: require('../../../assets/argentino1.png') },
    { id: '2', name: 'Guaspari Syrah Vista ', price: 20, image: require('../../../assets/argentino1.png') },
  ],
};

const WineItem = ({ item, navigation }) => {
  const navigateToProduct = () => {
    navigation.navigate('DetalheProduto', { product: item }); 
  };

  return (
    <TouchableOpacity onPress={navigateToProduct}>
      <View style={{ marginRight: 15 }}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
          <Image
            source={item.image}
            style={{ width: '100%', height: 150, aspectRatio: 1, borderRadius: 10 }}
            resizeMode="contain"
          />
          <Text style={{ color: 'black', marginTop: 5, textAlign: 'left' }}>{item.name}</Text>
          <Text style={{ color: 'red', textAlign: 'left', fontWeight: 'bold' }}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CatalogScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#250000', paddingHorizontal: 20, paddingTop: 20 }}>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image source={require('../../../assets/icon.png')} style={{ width: 100, height: 100, marginRight: 10 }} />
          <Text style={{ fontSize: 18, color: 'white', marginLeft: 'auto' }}>Nosso Catálogo:</Text>
        </View>

      
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Vinos Argentinos</Text>
          <FlatList
            data={winesData.argentinos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <WineItem item={item} navigation={navigation} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>


      
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Vinhos brasileiros</Text>
          <FlatList
            data={winesData.brasileiros}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <WineItem item={item} navigation={navigation} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>

        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Vinos uruguaios</Text>
          <FlatList
            data={winesData.uruguaios}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <WineItem item={item} navigation={navigation} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>

        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Vinos chilenos</Text>
          <FlatList
            data={winesData.chilenos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <WineItem item={item} navigation={navigation} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
       

      </View>
    </ScrollView>
  );
};

export default CatalogScreen;
