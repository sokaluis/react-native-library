import { StyleSheet } from 'react-native';

export const appColors = {
  light: 'white',
  dark: 'black',
};

export const globalStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  globalContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
