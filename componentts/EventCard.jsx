import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const EventCard = ({ event, onPress }) => {
  // Handle case where event image might not be available yet
  const handleImageError = () => {
    console.warn('Image could not be loaded for event:', event.title);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(event)} activeOpacity={0.8}>
      <View style={styles.glowBorder}>
        <LinearGradient
          colors={['rgba(0, 0, 60, 0.85)', 'rgba(5, 0, 20, 0.95)']}
          style={styles.cardContent}
        >
          <Text style={styles.mainText}>{event.title}</Text>
          
          <View style={styles.divider} />
          
          <View style={styles.infoContainer}>
            <Text style={styles.dateText}>coming up ~ {event.date}</Text>
            <Text style={styles.locationText}>Location 📍 {event.location}</Text>
          </View>
          
          <View style={styles.bubble1} />
          <View style={styles.bubble2} />
          <View style={styles.bubble3} />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
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
    marginBottom: 10,
  },
  dateText: {
    fontSize: 18,
    color: '#ffff00',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
    textShadowColor: 'rgba(255, 255, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  locationText: {
    fontSize: 16,
    color: '#00ffff',
    textAlign: 'center',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
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
});