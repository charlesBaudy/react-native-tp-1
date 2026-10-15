import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={require('../../assets/images/dictador.jpeg')} 
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={styles.title}>Kylian MBAPPE</Text>
        <Text style={styles.sub}>Attaquant</Text>
        <View style={ styles.tags }>
          <Text style={styles.tag}>Ester Esposito</Text>
          <Text style={styles.tag}>Buts</Text>
          <Text style={styles.tag}>Ballon d'or</Text>
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={ () => Alert.alert("Contact", "charles.baudy@yncrea.fr") }>
            <Text style={styles.btnText}>Me contacter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey"
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 30
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  sub: {
    fontSize: 20,
    color: "#666666",
    marginTop: 8
  },
  tags: {
    marginTop: 20,
    flexDirection: "row",
    gap: 8
  },
  tag: {
    backgroundColor: "lightblue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: "darkblue",
    fontWeight: "bold"
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  btnContainer: {
    marginTop: 20,
    borderStyle: "dashed",
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    borderColor: "blue"
  }
})
