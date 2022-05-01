import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

export const TaskCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.bold}>{data.effort}</Text>
        </View>
        <Text style={styles.description}>{data.description}</Text>
        <Text>
          Target date:
          <Text style={{fontWeight: 'bold'}}>{data.targetDate}</Text>
        </Text>
      </View>
    </View>
  );
};
