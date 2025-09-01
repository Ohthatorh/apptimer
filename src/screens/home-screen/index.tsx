import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import RoundSwitcher from './round-switcher';
import { useGlobalStyles } from '../../styles/global';
import AppText from '../../components/app-text';

interface IHomeScreen {}

const HomeScreen: FC<IHomeScreen> = () => {
  const { container } = useGlobalStyles();
  return (
    <View style={container}>
      <AppText type="body1Up" style={styles.roundText} color="white">
        Раунд 1
      </AppText>
      <RoundSwitcher />
    </View>
  );
};

const styles = StyleSheet.create({
  roundText: {
    textAlign: 'center',
  },
});

export default HomeScreen;
