import { StyleSheet, View } from 'react-native';
import ValueColumn from "./src/components/ValueColumn";
import RingProgress from "./src/components/RingProgress";

export default function App() {
  return (
    <View style={styles.container}>

      <RingProgress radius={150}/>
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
