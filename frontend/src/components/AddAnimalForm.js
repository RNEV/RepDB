import { Button, TextInput, NumberInput, Select, Text, Container, Title } from '@mantine/core';
import { MonthPicker } from 'mantine-dates-6';
import { DatePicker } from '@mantine/dates';
import React, { useState } from 'react';
import { useAnimalsContext } from '../hooks/useAnimalsContext';


const AddAnimalForm = () => {
  const { dispatch } = useAnimalsContext();
  const [title, setTitle] = useState('');
  const [breeder, setBreeder] = useState('');
  const [price, setPrice] = useState(null);
  const [sex, setSex] = useState('');
  const [year, setYear] = useState(new Date());
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const animal = { title, breeder, price, sex, year };

    const response = await fetch('/api/animal', {
      method: 'POST',
      body: JSON.stringify(animal),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.err);
    }
    if (response.ok) {
      setTitle('');
      setBreeder('');
      setPrice(null);
      setSex('');
      setYear(new Date());
      setError(null);
      console.log('New Animal Added', json);
      //add to global context state
      dispatch({ type: 'CREATE_ANIMAL', payload: json });
    }
  };

  return (
    <Container size={420} my={40}>
      <form onSubmit={handleSubmit}>
        <Title
          align='center'
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Add Animal
        </Title>
        <TextInput label='Title' onChange={(e) => setTitle(e.target.value)} value={title} />
        <TextInput label='Breeder' onChange={(e) => setBreeder(e.target.value)} value={breeder} />
        <NumberInput
          label='Price'
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            !Number.isNaN(parseFloat(value))
              ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : '$ '
          }
          onChange={setPrice}
          value={price}
        />
        <Select
          label='Sex'
          placeholder='Assign Sex'
          data={[
            { value: 'F', label: 'Female' },
            { value: 'M', label: 'Male' },
            { value: '?', label: 'Unknown' },
          ]}
          value={sex}
          onChange={setSex}
        />
        <div>
          {/* <Text mb='sm'>
            Pick one value, current value:{' '}
            <b>
              {year ? `${year.getMonth()}/${year.getFullYear().toString().substr(-2)}` : 'null'}
            </b>
          </Text> */}
          <DatePicker placeholder='Hatch Date' label='Hatch Date' value={year} onChange={setYear} />
        </div>
        <Button fullWidth mt='xl' type='submit' color='green'>
          Add Animal
        </Button>
        {error && <div>{error}</div>}
      </form>
    </Container>
  );
};

export default AddAnimalForm;
