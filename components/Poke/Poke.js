import * as React from 'react';
import { Text, ScrollView, View, Linking, Pressable } from 'react-native';
import styles from '../../styles/StyleSheet';
import { PokeService } from './PokeService';
import { useEffect, useState } from 'react';

const Poke = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentLetter, setCurrentLetter] = useState('a');

  const alphabet = (() =>
    [...Array(26)].map((_, i) => String.fromCharCode(i + 97)))();

  const pokeService = new PokeService();
  const getPokemon = async (letter, service) => {
    try {
      const pokemonData = await service.getPokemonByFirstLetter(letter);

      setPokemons(pokemonData);
    } catch (error) {
      if (error) console.error(error);
    }
  };

  useEffect(() => {
    getPokemon(currentLetter, pokeService);
  }, [currentLetter]);

  return (
    <View>
      <ScrollView horizontal>
        {alphabet.map((letter) => (
          <Pressable
            key={letter}
            style={
              (letter === currentLetter && styles.button) ||
              styles.buttonCurrent
            }
            onPress={() => setCurrentLetter(letter)}
          >
            <Text style={styles.buttonText}>{letter.toUpperCase()}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <ScrollView>
        {pokemons.map((pokemon, idx) => (
          <Text
            key={idx}
            style={styles.text}
            onPress={() => Linking.openURL(pokemon.url)}
          >
            {pokemon.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Poke;
