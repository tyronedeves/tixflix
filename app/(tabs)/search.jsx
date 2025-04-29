import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { events } from '../../data/data'
import EventCard from '../../componentts/EventCard'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredEvents, setFilteredEvents] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (text) => {
    setSearchQuery(text)
    
    if (text.trim() === '') {
      setFilteredEvents([])
      setIsSearching(false)
      return
    }
    
    setIsSearching(true)
    const filtered = events.filter(event => 
      event.title.toLowerCase().includes(text.toLowerCase()) ||
      event.location.toLowerCase().includes(text.toLowerCase())
    )
    setFilteredEvents(filtered)
  }

  const handleEventPress = (event) => {
    console.log('Event selected:', event.title)
    // Navigation to event details could be added here
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search Events</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by event name or location..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => handleSearch('')}>
            <Ionicons name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>

      {isSearching ? (
        filteredEvents.length > 0 ? (
          <FlatList
            data={filteredEvents}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <EventCard event={item} onPress={handleEventPress} />
            )}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.noResults}>
            <Ionicons name="search-outline" size={60} color="#666" />
            <Text style={styles.noResultsText}>No events found</Text>
          </View>
        )
      ) : (
        <View style={styles.initialState}>
          <Ionicons name="search-outline" size={60} color="#666" />
          <Text style={styles.initialStateText}>Search for your favorite events</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a20',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: '#ff00ff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a30',
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    padding: 20,
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  noResultsText: {
    color: '#666',
    fontSize: 18,
    marginTop: 20,
  },
  initialState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  initialStateText: {
    color: '#666',
    fontSize: 18,
    marginTop: 20,
  }
})