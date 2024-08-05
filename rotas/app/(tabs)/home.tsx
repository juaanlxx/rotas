import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function Home() {
  const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Go to About" onPress={() => router.push('/about')} color="#1F511E" />
        <br/>
      <Button title="Go to Contact" onPress={() => router.push('/contact')} color="#16473E" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Fundo preto
  },
  title: {
    fontSize: 28,
    color: '#86FF84', // Verde neon
    marginBottom: 20,
    fontFamily: 'Inter', // Fonte 'Inter'
  },
});