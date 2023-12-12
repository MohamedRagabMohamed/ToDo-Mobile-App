import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TextInput, View} from 'react-native-original-style';

export const ToDoDetails = ({route}: any) => {
  const {title, description} = route.params;

  return (
    <View pt-50 h-full bg-color-white>
      <Text mh-10 size-24 color-primary>
        Title
      </Text>
      <TextInput
        editable={false}
        value={title}
        style={[styles.border, styles.input]}
      />
      <Text mh-10 size-24 color-primary>
        Description
      </Text>
      <TextInput
        editable={false}
        multiline={true}
        numberOfLines={10}
        placeholderTextColor="grey"
        style={[styles.border, styles.input, styles.textArea]}
        value={description}
      />
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
    borderWidth: 1,
    padding: 10,
  },
});
