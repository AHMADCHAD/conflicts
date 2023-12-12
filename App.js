import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Ahamad here</Text>
      <Text>Chnanged</Text>
      
      <Button />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
