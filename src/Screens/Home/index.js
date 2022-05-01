import React, {useState} from 'react';

import {View, Text, Button, FlatList, ScrollView} from 'react-native';
import {globalColors} from '../../common/palette';
import {TaskCard} from '../../components/TaskCard';
import {styles} from './style';

export const Home = ({navigation}) => {
  const [countTasks, setCountTasks] = useState({
    pending: 0,
    done: 0,
    onHold: 0,
  });

  const _data = [
    {
      id: 1,
      title: 'Assistir Ozark',
      effort: 148,
      description:
        'Lorem ipsum consectur mot azi vult lorem ipsum consectur mot azi vult lorem ipsum consectur mot azi vult lorem',
      targetDate: new Date().toLocaleDateString('pt-br'),
    },
    {
      id: 2,
      title: 'Prova cálculo II',
      effort: 4,
      description: 'Lorem ipsum consectur mot azi vult',
      targetDate: new Date().toLocaleDateString('pt-br'),
    },
    {
      id: 3,
      title: 'Estudar React Native',
      effort: '-',
      description: 'Lorem ipsum consectur mot azi vult',
      targetDate: new Date().toLocaleDateString('pt-br'),
    },
    {
      id: 4,
      title: 'Bater em flamenguista',
      effort: '-',
      description: 'Lorem ipsum consectur mot azi vult',
      targetDate: new Date().toLocaleDateString('pt-br'),
    },
  ];

  const _renderItem = ({item, key}) => <TaskCard key={key} data={item} />;

  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.counters}>
            <Text
              style={{
                fontSize: 18,
                color: globalColors.pending,
              }}>
              {countTasks.pending}
            </Text>
            <Text style={styles.text}>Pendentes</Text>
          </View>
          <View style={styles.counters}>
            <Text style={{fontSize: 18, color: globalColors.done}}>
              {countTasks.done}
            </Text>
            <Text style={styles.text}>Finalizadas</Text>
          </View>
          <View style={styles.counters}>
            <Text style={{fontSize: 18, color: globalColors.onHold}}>
              {countTasks.onHold}
            </Text>
            <Text style={styles.text}>Em espera</Text>
          </View>
        </View>

        <FlatList
          data={_data}
          renderItem={_renderItem}
          keyExtractor={m => m.id}
        />
      </ScrollView>
    </View>
  );
};
