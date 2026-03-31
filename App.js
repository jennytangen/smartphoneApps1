import { DateTime } from "luxon"
import { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

const WelcomeScreen = () => (
  <View style={styles.background}>
    <Image style={styles.logoImage}
    source={require('./components/logo.jpg')} />
    <View>
      <Text style={styles.welcomeTitle}  >Digital Clock Customiser</Text>
    </View>
    </View>
);

const MainApp = ({ time}) => (
      <View style={styles.container}>
    <Image style={styles.logoImage}
    source={require('./components/logo.jpg')} />
<View style={styles.mainInterface}>
    <View style={styles.information}>
      <Button
      title="Click here for more infomation"
      onPress={() => 
      Alert.alert("More Information", "In this app you can change the colour using the Colour Changer button.You can change the font using the font changer. You can also move the alignment of the items up/down or left/right depending on your preference. You can also change the size of the clock using the size changer button. ", [
        { text: "Done" },
      ])
    }
  />
  </View>

    <View>
      <Text style={styles.title}>Digital Clock Customiser</Text>
    </View>
    <View>
      <Text style={styles.clock}>{time.toFormat("hh:mm:ss")}
      </Text>
    </View>
    <View>
    <Text style={styles.colourChanger}>Colour changer</Text>
    </View>
    <View>
    <Text style={styles.fontChanger}>Font changer</Text>
    </View>
    <View>
    <Text style={styles.upOrDownChanger}>Move up/down</Text>
    </View>
    <View>
    <Text style={styles.leftOrRightChanger}>Move left/right</Text>
    </View>
    <View>
    <Text style={styles.sizeChanger}>Size changer</Text>
    </View>

  </View>
  </View>
);

export default function App() {

  const [time, setTime] = useState(DateTime.now())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(DateTime.now())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return showWelcome ? <WelcomeScreen /> : <MainApp time={time} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 8,
    alignItems: "center",
  },
  logoImage: {
    width: 70,
    height: 70,
    borderWidth: 1,
    position: "absolute",
    top: 70,
    left: 30,
  },
  clock: {
    colour: "#000000",
    position: "absolute",
    top: -150,
    left: -80,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    fontSize: 30,
  },
  title: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    colour: "#000000",
    top: -180,
    fontSize: 22,
  },
  colourChanger: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    colour: "#000000",
    top: -50,
    left: -10,
    fontSize: 18,
  },
  fontChanger: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    colour: "#000000",
    top: -40,
    left: -10,
    fontSize: 18,
  },
  upOrDownChanger: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    colour: "#000000",
    top: -30,
    left: -10,
    fontSize: 18,
  },
  leftOrRightChanger: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    colour: "#000000",
    top: -20,
    left: -10,
    fontSize: 18,
  },
  sizeChanger: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    colour: "#000000",
    top: -10,
    left: -10,
    fontSize: 18,
  },
  mainInterface: {
    alignItems: "center",
    paddingTop: 200,
  },
  information: {
    fontSize: 15,
    top: -190,
  },
  background: {
    backgroundColor: "#F879FF",
    width: '100%',
    height: '100%',
  },
  welcomeTitle: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    colour: "#000000",
    top: 200,
    fontSize: 22,
  },
});