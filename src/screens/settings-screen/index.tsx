import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ISettingsScreen {}

const SettingsScreen: FC<ISettingsScreen> = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
