import React from 'react';
import {StyleSheet} from 'react-native';
import {Pressable, SectionList, Text, View} from 'react-native-original-style';
import {useCustomContext} from '../components/context';

export const ToDoViewList = ({navigation}: any) => {
  const {sharedData, changeData} = useCustomContext();

  return (
    <View h-full bg-color-white mt-20>
      <SectionList
        style={{minHeight: 1000}}
        sections={sharedData}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({item, section, index}) => {
          return (
            <View style={styles.border} m-10 p-5 bg-color-white>
              <Pressable
                onPress={() => {
                  if (section.title !== 'Done') {
                    changeData(item, section.title, index);
                  }
                }}
                onLongPress={() => {
                  navigation.navigate('Home');
                  navigation.navigate('ToDo Details', {...item});
                }}
                style={styles.rowCenter}
                android_ripple={{color: '#f6f6f6'}}>
                <Text size-16 p-10 color-primary>
                  {item.title}
                </Text>
                <Text size-16 p-10>
                  {(section.title === 'Done' && '✅') ||
                    (section.title === 'In Progress' && '🔄')}
                </Text>
              </Pressable>
            </View>
          );
        }}
        renderSectionHeader={({section: {title}}) => {
          return (
            <View
              bg-color-white
              style={{
                marginVertical: 20,
                marginHorizontal: 60,
                alignItems: 'center',
                elevation: 1,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  color:
                    title === 'In Progress'
                      ? '#3772FF'
                      : title === 'Done'
                      ? '#397367'
                      : '#25283D',
                }}
                size-36
                weight-bold>
                {title}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 16,
    elevation: 4,
  },
  rowCenter: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
