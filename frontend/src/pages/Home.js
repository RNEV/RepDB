import { useState, useEffect } from 'react';
import { useAnimalsContext } from '../hooks/useAnimalsContext';

import { SimpleGrid, Autocomplete } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

import AnimalCard from '../components/AnimalCard';
import AddAnimalForm from '../components/AddAnimalForm';

const Home = () => {
  const { animals, dispatch } = useAnimalsContext();
  const [searchTerm, setSearchTerm] = useState('');

  const fetchAnimals = async () => {
    const response = await fetch('/api/animal');
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'SET_ANIMALS', payload: data });
    }
  };
  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <div>
      <AddAnimalForm />
      <SimpleGrid cols={4} spacing='xl' verticalSpacing='xl'>
        {animals && animals.map((animal) => <AnimalCard animal={animal} key={animal._id} />)}
      </SimpleGrid>
    </div>
  );
};

export default Home;
