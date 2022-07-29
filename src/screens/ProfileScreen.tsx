import React from 'react';
import {Text, View, Image, Dimensions, ActivityIndicator} from 'react-native';
import {RootState, useSelector} from '../store';

const ProfileScreen = () => {
  const {animalData} = useSelector((s: RootState) => s?.profile);
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}>
      {Object.keys(animalData).length > 0 ? (
        <>
          <View
            style={{
              marginTop: 30,
            }}>
            <Text style={{fontSize: 30, color: 'black', textAlign: 'center'}}>
              {animalData?.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 30,
                marginTop: 30,
              }}>
              <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                {animalData?.animal_type}
              </Text>
              <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                {animalData?.active_time}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                color: 'gray',
                textAlign: 'center',
                marginTop: 30,
              }}>
              {animalData?.diet}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'green',
                textAlign: 'center',
                marginTop: 30,
              }}>
              {animalData?.geo_range}
            </Text>
          </View>
          <Image
            source={{uri: animalData?.image_link}}
            style={{width: '100%', height: '50%', zIndex: 999}}
          />
          <View
            style={{
              flex: 1,
              position: 'absolute',
              bottom: '20%',
              left: (windowWidth - 15) / 2,
            }}>
            <ActivityIndicator size={40} color="#00ff00" />
          </View>
        </>
      ) : (
        <View
          style={{
            height: windowHeight,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Вы не выбрали животное</Text>
        </View>
      )}
    </View>
  );
};
export default ProfileScreen;

/*

*/
