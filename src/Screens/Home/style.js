import {StyleSheet} from 'react-native';
import {globalColors} from '../../common/palette';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: globalColors.white,
    borderBottomEndRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    height: 60,
  },
  text: {
    color: globalColors.text,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});
