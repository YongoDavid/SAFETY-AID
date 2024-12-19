import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import DriverProfile from '../components/DriverProfile';
import { drivers } from '../data/drivers';

function DriverDetails() {
  const { id } = useParams();
  const driver = drivers.find(d => d.id === id);

  if (!driver) {
    return <Container>Driver not found</Container>;
  }

  return (
    <Container maxW="3xl" py={8} pb={20}>
      <DriverProfile driver={driver} />
    </Container>
  );
}

export default DriverDetails;