import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function Contact() {
    const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Screen</Text>
      <Text style={styles.description}>
        This is the About Screen with some interesting facts and details about the app.
      </Text>
      <Button title="Go to Home" onPress={() => router.push('/home')} color="#000" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', 
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#00008B',
    marginBottom: 20,
    fontFamily: 'Inter', 
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Love Light', 
    paddingBottom: 10,
  },
});
 