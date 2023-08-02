import { View, Text, ScrollView, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Card from './Card'

const CardList = () => {
  const [movie, setMovies] = useState(data)
  function handleAdd() {
    const randomIdx = Math.floor(Math.random() * 5);
    setMovies([{ ...data[randomIdx], id: Date.now().toString() }, ...movie])
    console.log(data)
  }
  function handleDelete() {
    setMovies([...movie.slice(1)])
    console.log(movie)
  }
  return (
    <SafeAreaView style = {{marginTop:25}}>
      <ScrollView>
        <Button title='Add' onPress={handleAdd} ></Button>
        <Button title='Delete' color={'red'} onPress={handleDelete}></Button>
        <ScrollView>
          <View style={{ paddingHorizontal: 18 ,marginTop:25}}>
            {movie.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const data = [
  {
    id: 1,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl: "https://picsum.photos/1200/800",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl: "https://picsum.photos/1600/900",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl: "https://picsum.photos/1024/768",
  },
  {
    id: 4,
    title: "The Godfather: Part II",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    posterUrl: "https://picsum.photos/800/600",
  },
  {
    id: 5,
    title: "12 Angry Men",
    description:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    posterUrl: "https://picsum.photos/640/480",
  },
];

export default CardList