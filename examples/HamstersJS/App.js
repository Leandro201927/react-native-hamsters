/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
/**
 * ------------------------------------------------------------------------------------------
 * -------------------------------- HAMSTERS.JS SAMPLE --------------------------------------
 * ------------------------------------------------------------------------------------------
 */

import React, { useEffect, useMemo, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { Thread } from 'react-native-threads';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));

// import { Worker} from 'react-native-hamsters';

// const hamsters = require('hamsters.js');

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   console.log("Hamsters.js Initializing Self Test!");
//   hamsters.init({
//     Worker: Worker,
//     debug: true
//   });
//   let params = {
//     array: Array(10 - 1 + 1).fill().map((_, idx) => 1 + idx),
//     threads: 2,
//     aggregate: true
//   };
//   console.log("Hamsters.js Self Test Using 2 Threads!");
//   hamsters.run(params, function() {
//     let arr = params.array;
//     arr.forEach(function(item) {
//      rtn.data.push((item * 120)/10 * 1000 * 1200);
//     });
//   }, function(results) {
//     console.log("Hamsters.js Self Test Success!", results);
//   });
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

/**
 * ---------------------------------------------------------------------------------------------------
 * -------------------------------- REACT-NATIVE-THREADS SAMPLE --------------------------------------
 * ---------------------------------------------------------------------------------------------------
 */

export default function App() {
  const [message, setMessage] = useState('');

  const thread = useMemo(() => {
    return new Thread('./worker.thread.js');
  }, []);

  const handleMessage = m => {
    console.log('omgggg ssiiisasss', m);
    setMessage(m);
  };

  useEffect(() => {
    thread.onmessage = handleMessage;
  }, [thread]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native Threads!</Text>

      <Button
        title="Send Message To Worker Thread"
        onPress={() => {
          thread.postMessage('Hello');
        }}
      />

      <View>
        <Text>Messages:</Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
