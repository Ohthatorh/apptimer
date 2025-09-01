import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ISportScreen {}

const SportScreen: FC<ISportScreen> = () => {
  return (
    <View>
      <Text>SportScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SportScreen;
