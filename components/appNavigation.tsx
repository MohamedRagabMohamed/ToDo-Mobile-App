import React from 'react';
import HomeScreen from '../screens/homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddNewToDo} from '../screens/addNewToDo';
import MyContextProvider from './context';
import {ToDoDetails} from '../screens/toDoDetails';
import {Button} from 'react-native';
import {View} from 'react-native-original-style';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <MyContextProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {backgroundColor: '#fff'},
            headerTintColor: '#3772FF',
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="New ToDo"
            component={AddNewToDo}
            options={({navigation, route}) => ({
              headerLeft: props => (
                <View mr-10>
                  <Button
                    title="◁ Back"
                    onPress={() => navigation.navigate('Home')}
                  />
                </View>
              ),
            })}
          />
          <Stack.Screen name="ToDo Details" component={ToDoDetails} />
        </Stack.Navigator>
      </MyContextProvider>
    </NavigationContainer>
  );
};

export default Navigator;
