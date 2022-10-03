import {useQuery} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import {getUserList} from './api';
import {getSelectUser, getUserSelector, selectId, selectUser} from './atom';
import {IUser} from './interface';

const HomeScreen = () => {
  const {data, isLoading} = useQuery<IUser[]>(['userList'], getUserList);
  const userLoadable = useRecoilValueLoadable(getUserSelector);
  console.log(userLoadable);
  const [id, setId] = useRecoilState(selectId);
  // const userId = useRecoilValue(selectId);
  // const setUserId = useSetRecoilState(selectId);
  // const [user, setUser] = useRecoilState(getUserSelector);

  // useEffect(() => {
  //   (async () => {
  //     const user = await fetch(
  //       `https://jsonplaceholder.typicode.com/users/${id}`,
  //     ).then(res => res.json());
  //     setUser(user);
  //   })();
  // }, []);

  const user = useRecoilValue<IUser>(getSelectUser(id));
  // const [user, setUser] = useRecoilState(selectingUser);
  return (
    <ScrollView style={{flex: 1}}>
      <Text style={{fontSize: 20, marginVertical: 16}}>List</Text>
      {data?.map(user => (
        <View style={{marginBottom: 8}} key={user.id}>
          <Text>id: {user.id}</Text>
          <Text>name: {user.name}</Text>
        </View>
      ))}
      <Text style={{fontSize: 24, marginTop: 20}}>Select User</Text>
      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
        {data?.map(user => (
          <TouchableOpacity
            key={user.id}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: 'black',
            }}
            onPress={() => setId(user.id)}>
            <Text>{user.id}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* {user && (
        <View>
          <Text>id: {user.id}</Text>
          <Text>name: {user.name}</Text>
        </View>
      )} */}
    </ScrollView>
  );
};

export default HomeScreen;

//  switch (userLoadable.state) {
//    case 'hasValue':
//      return (
//        <ScrollView style={{flex: 1}}>
//          <Text style={{fontSize: 20, marginVertical: 16}}>List</Text>
//          {data?.map(user => (
//            <View style={{marginBottom: 8}} key={user.id}>
//              <Text>id: {user.id}</Text>
//              <Text>name: {user.name}</Text>
//            </View>
//          ))}
//          <Text style={{fontSize: 24, marginTop: 20}}>Select User</Text>
//          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
//            {data?.map(user => (
//              <TouchableOpacity
//                key={user.id}
//                style={{
//                  width: 30,
//                  height: 30,
//                  alignItems: 'center',
//                  justifyContent: 'center',
//                  borderWidth: 1,
//                  borderColor: 'black',
//                }}
//                onPress={() => setId(user.id)}>
//                <Text>{user.id}</Text>
//              </TouchableOpacity>
//            ))}
//          </View>
//          {user && (
//            <View>
//              <Text>id: {user.id}</Text>
//              <Text>name: {user.name}</Text>
//            </View>
//          )}
//        </ScrollView>
//      );

//    case 'loading':
//      return (
//        <View>
//          <Text>loading....</Text>
//        </View>
//      );
//    case 'hasError':
//      return (
//        <View>
//          <Text>has error</Text>
//        </View>
//      );
//  }
