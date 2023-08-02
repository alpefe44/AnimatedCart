import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { Layout, RollInLeft, RollOutRight } from 'react-native-reanimated';

const Card = (movie) => {
  const { id, title, description, posterUrl } = movie;
  return (
    <Animated.View
      layout={Layout.stiffness()}
      entering={RollInLeft}
      exiting={RollOutRight}
      style={styles.card}>
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{description}</Text>
      <Image style={styles.poster} source={{ uri: posterUrl }} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 28,
    marginBottom:10,
    padding: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowRadius: 6,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.1
  },
  body: {
    fontSize: 14,
    color: '#575757',
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#383838',
    marginBottom: 8
  },
  poster: {
    height: 345,
    width: '100%',
    marginTop: 20,
    borderRadius: 14
  }
})
export default Card