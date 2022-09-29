import logo from './logo.svg';
import './App.css';
import {ScrollView, StyleSheet} from 'react-native';
import SimpleState from "../components/simplecomponent"

function App() {
  return (
    <ScrollView>
      <SimpleState/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;
