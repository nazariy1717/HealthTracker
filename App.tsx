import { StyleSheet, Text, View } from 'react-native';
import ValueColumn from "./src/components/ValueColumn";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <ValueColumn label={'Steps'} value={'1231'}/>
        <ValueColumn label={'Distance'} value={'0.75km'}/>
        <ValueColumn label={'Flights climbed'} value={'1231'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  row: {
    flexDirection: 'row',
    columnGap: 20
  },
});
