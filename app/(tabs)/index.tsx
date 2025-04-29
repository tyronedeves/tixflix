import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.touchable}>
            <View style={styles.glowBorder}>
              <View style={styles.cardContent}>
                <Text style={styles.mainText}>ASABA Y2K RAVE SHUTDOWN</Text>
                
                <View style={styles.divider} />
                
                <View style={styles.infoContainer}>
                  <Text style={styles.dateText}>coming up ~ May 1st</Text>
                  <Text style={styles.locationText}>Location 📍 Maddison square garden</Text>
                </View>
                
                <View style={styles.bubble1} />
                <View style={styles.bubble2} />
                <View style={styles.bubble3} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity style={styles.touchable}>
            <View style={styles.glowBorder}>
              <View style={styles.cardContent}>
                <Text style={styles.mainText}>ASABA Y2K RAVE SHUTDOWN</Text>
                
                <View style={styles.divider} />
                
                <View style={styles.infoContainer}>
                  <Text style={styles.dateText}>coming up ~ May 1st</Text>
                  <Text style={styles.locationText}>Location 📍 Maddison square garden</Text>
                </View>
                
                <View style={styles.bubble1} />
                <View style={styles.bubble2} />
                <View style={styles.bubble3} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity style={styles.touchable}>
            <View style={styles.glowBorder}>
              <View style={styles.cardContent}>
                <Text style={styles.mainText}>ASABA Y2K RAVE SHUTDOWN</Text>
                
                <View style={styles.divider} />
                
                <View style={styles.infoContainer}>
                  <Text style={styles.dateText}>coming up ~ May 1st</Text>
                  <Text style={styles.locationText}>Location 📍 Maddison square garden</Text>
                </View>
                
                <View style={styles.bubble1} />
                <View style={styles.bubble2} />
                <View style={styles.bubble3} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardWrapper: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  card: {
    width: '100%',
    maxWidth: 350,
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  touchable: {
    width: '100%',
    height: '100%',
  },
  glowBorder: {
    flex: 1,
    padding: 2,
    borderRadius: 15,
    backgroundColor: '#ff00ff',
    borderWidth: 2,
    borderColor: '#00ffff',
    shadowColor: '#ff00ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  cardContent: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 40, 0.85)',
    padding: 15,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 1.5,
    marginTop: 10,
    textShadowColor: '#ff00ff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  divider: {
    height: 2,
    backgroundColor: '#00ffff',
    marginVertical: 15,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  infoContainer: {
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    color: '#ffff00',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
  },
  locationText: {
    fontSize: 16,
    color: '#00ffff',
    textAlign: 'center',
    fontWeight: '500',
  },
  bubble1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 0, 255, 0.15)',
    top: -20,
    right: -20,
  },
  bubble2: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(0, 255, 255, 0.15)',
    bottom: 30,
    left: -15,
  },
  bubble3: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 0, 0.15)',
    bottom: -10,
    right: 40,
  }
})