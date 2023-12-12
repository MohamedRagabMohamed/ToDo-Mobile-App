import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {Pressable, Text, TextInput, View} from 'react-native-original-style';
import {useCustomContext} from '../components/context';

export const AddNewToDo = ({navigation}: any) => {
  const [title, SetTitle] = useState('');
  const [description, SetDescription] = useState('');
  const {updateData} = useCustomContext();

  const onSubmit = () => {
    if (title.length && description.length) {
      updateData({
        title,
        description,
      });
      navigation.navigate('Home');
      return;
    }
    Alert.alert('Error', 'You can not create ToDo with title and description');
  };
  return (
    <View pt-50 h-full bg-color-white>
      <Text mh-10 size-24 color-primary>
        Title
      </Text>
      <TextInput
        onChangeText={SetTitle}
        value={title}
        style={[styles.border, styles.input]}
        placeholder="Title"
      />
      <Text mh-10 size-24 color-primary>
        Description
      </Text>
      <TextInput
        multiline={true}
        placeholder="Description"
        numberOfLines={10}
        placeholderTextColor="grey"
        style={[styles.border, styles.input, styles.textArea]}
        onChangeText={SetDescription}
        value={description}
      />
      <View style={styles.viewContainer} bg-color-primary>
        <Pressable
          style={styles.rowCenter}
          p-10
          android_ripple={{color: '#2867fb'}}
          onPress={onSubmit}>
          <Text
            color={'#fff'}
            font-bold
            size-16
            text-center
            style={[styles.rowCenter]}>
            Add New ToDo
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 8,
  },
  input: {
    height: 50,
    margin: 16,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#f3f3f3',
    elevation: 4,
  },
  textArea: {
    textAlignVertical: 'top',
    height: 200,
  },
  rowCenter: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewContainer: {
    marginHorizontal: 60,
    borderRadius: 22,
    padding: 10,
  },
});
