// MyContextProvider.js
import React, {useContext, useState} from 'react';
import {createContext} from 'react';

const initialValue: ToDo[] = [
  {
    title: 'Not Run',
    data: [],
  },
  {
    title: 'In Progress',
    data: [],
  },
  {
    title: 'Done',
    data: [],
  },
];

type ContextData = {
  updateData: (data: ToDoData) => void;
  changeData: (data: ToDoData, sectionTitle: string, index: number) => void;
  sharedData: ToDo[];
};

const MyContext = createContext<ContextData | null>(null);

const MyContextProvider = ({children}: any) => {
  const [sharedData, setSharedData] = useState(initialValue);

  const updateData = (newValue: ToDoData) => {
    sharedData?.['0']?.data?.push(newValue);
    setSharedData([...sharedData]);
  };

  const changeData = (
    changedValue: ToDoData,
    sectionTitle: string,
    itemIndex: number,
  ) => {
    const currentSectionIndex = sharedData.findIndex(
      item => item.title === sectionTitle,
    );
    setSharedData(prevData =>
      prevData.map((section, index) => {
        if (index === currentSectionIndex) {
          return {
            ...section,
            data: section.data.filter((_, i) => i !== itemIndex),
          };
        }
        if (currentSectionIndex + 1 === index) {
          return {
            ...section,
            data: [changedValue, ...section.data],
          };
        }
        return section;
      }),
    );
  };

  return (
    <MyContext.Provider value={{sharedData, updateData, changeData}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;

export const useCustomContext = (): ContextData => {
  const context = useContext(MyContext);
  if (!context)
    throw Error('useComponent should be used within <ComponentProvider />');
  return context;
};
