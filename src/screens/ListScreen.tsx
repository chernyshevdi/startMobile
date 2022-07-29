import React from 'react';
import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {RootState, useSelector} from '../store';
import {useGetAnimals} from './hooks/useGetAnimals';
import {Dimensions} from 'react-native';
import {ProfileScreenActionCreators} from '../slices/ProfileScreenSlice';

const ListScreen = ({navigation}) => {
  const {fetch, status} = useGetAnimals();
  const {animalList} = useSelector((s: RootState) => s?.list);
  const windowHeight = Dimensions.get('window').height;
  const {setAnimalData} = ProfileScreenActionCreators();

  React.useEffect(() => {
    fetch();
  }, []);

  const renderAnimalsList = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => (setAnimalData(item), navigation.navigate('Профиль'))}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          paddingBottom: 10,
          marginTop: 15,
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>{item.name}</Text>
        <Text style={{fontSize: 15, color: 'gray'}}>{item.animal_type}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
      }}>
      <FlatList
        data={animalList}
        keyExtractor={(item, index: number) => index}
        renderItem={renderAnimalsList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View
            style={{
              height: windowHeight,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
           <ActivityIndicator size={40} color="#00ff00" />
          </View>
        )}
      />
    </View>
  );
};

export default ListScreen;
