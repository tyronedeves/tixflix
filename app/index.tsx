import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();

  const handleGetStarted = () => {
    router.push
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>TixFLIX</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Get started!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16, // spacing between buttons (or use margin if not supported)
  },
  buttonPrimary: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  buttonSecondary: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
