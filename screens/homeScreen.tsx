import React from 'react';
import {Pressable, Text, View} from 'react-native-original-style';
import {StyleSheet} from 'react-native';
import {ToDoViewList} from './toDoList';
const HomeScreen = ({navigation}: any) => {
  const plusButtonHandler = () => {
    navigation.navigate('New ToDo');
  };

  return (
    <View h-full bg-color-white>
      <View row style={[styles.flexRow, {margin: 10}]}>
        <Text weight-bold color-primary size-28>
          ToDo List
        </Text>
        <Pressable
          onPress={plusButtonHandler}
          style={[styles.flexRow, styles.addButton]}
          bg-color-primary>
          <Text size-18 color-white>
            ✚ New ToDo
          </Text>
        </Pressable>
      </View>
      <ToDoViewList navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    gap: 5,
    borderRadius: 12,
    padding: 5,
    elevation: 20,
  },
});

// لما نكتب ال title ممكن يضيف to do without description
// ضيف تاريخ و alert
// عند done خلي ال todo بعلامه تبان انها تمت
// ممكن ايموشانات عند done لما تتنقل ال todo ل done
