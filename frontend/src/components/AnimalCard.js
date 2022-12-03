import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import { useAnimalsContext } from '../hooks/useAnimalsContext';

const AnimalDetails = ({ animal, index }) => {
  const { dispatch } = useAnimalsContext();

  const handleClick = async () => {
    const response = await fetch('/api/animal/' + animal._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_ANIMAL', payload: json });
    }
  };
  const { title, breeder, price, sex, year, weight } = animal;

  return (
    <Card shadow='sm' p='lg' radius='md' withBorder>
      <Card.Section>
        <Image
          src='https://images.unsplash.com/photo-1613176748515-8cd503764873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          height={260}
          alt='Norway'
        />
      </Card.Section>

      <Group position='apart' mt='md' mb='xs'>
        <Text variant='dark' color='green' weight={800} size='l'>
          {title}
        </Text>
        <Text variant='dark' color='green' weight={800} size='l'>
          {sex}
        </Text>
        <Badge color='green' variant='dark'>
          ${price}
        </Badge>
      </Group>
      <Text size='sm' color='dimmed'>
        {breeder}
      </Text>
      <Text size='sm' color='dimmed'>
        {year
          ? `${new Date(year).getMonth()}/${new Date(year).getFullYear().toString().substr(-2)}`
          : 'null'}
      </Text>
      <Text size='sm' color='dimmed'>
        {weight}
      </Text>
      <Button onClick={handleClick}>delete</Button>
    </Card>
  );
};

export default AnimalDetails;

// <div>
//   <div className='animal'>
//     <div>
//       <p>{animal.Year}</p>
//     </div>
//     <div>
//       <img
//         src={
//           animal.Poster !== 'N/A'
//             ? 'https://images.unsplash.com/photo-1613176748515-8cd503764873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
//             : 'https://images.unsplash.com/photo-1613176748515-8cd503764873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
//         }
//         alt={animal.title}
//       />
//     </div>
//     <div>
//       <div></div>
//       <h3>{animal.title}</h3>
//       <span>${animal.price}</span>
//     </div>
//   </div>
// </div>
