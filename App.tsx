import React from 'react';
import {
  View,
} from 'react-native';
import Counter from './src/component/Counter';
import Scroll_component from './src/component/Scroll_component';


function App(): React.JSX.Element {
  return (
    <View>
      <Scroll_component/>
      <Counter/>
    </View>
  );
}



export default App;
