import {StyleSheet} from 'react-native';
import {globalColors} from '../../common/palette';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 6,
    padding: 16,
    backgroundColor: globalColors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  description: {
    marginTop: 8,
    marginBottom: 21,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 21,
  },
  bold: {
    fontWeight: 'bold',
  },
});
