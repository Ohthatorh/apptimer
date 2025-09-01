import { Button, useTheme } from '@rneui/themed';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import AppIcon from '../../../components/app-icon';

interface IRoundSwitcher {}

const RoundSwitcher: FC<IRoundSwitcher> = () => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Button buttonStyle={styles.buttonArrows} radius={16} color={'text2'}>
        <AppIcon
          name={'SkipBack'}
          color={theme.colors.background}
          fill={theme.colors.background}
        />
      </Button>
      <Button buttonStyle={styles.buttonPlay} radius={16} color={'accent1'}>
        <AppIcon
          name={'Play'}
          color={theme.colors.background}
          fill={theme.colors.background}
        />
      </Button>
      <Button buttonStyle={styles.buttonArrows} radius={16} color={'text2'}>
        <AppIcon
          name={'SkipForward'}
          color={theme.colors.background}
          fill={theme.colors.background}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
    marginBottom: 20,
  },
  buttonArrows: {
    width: 58,
    height: 58,
  },
  buttonPlay: {
    width: 126,
    height: 70,
  },
});

export default RoundSwitcher;
