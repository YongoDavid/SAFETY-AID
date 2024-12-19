import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VStack, Heading, Container, Box } from '@chakra-ui/react';
import DriverSearch from '../components/DriverSearch';
import { drivers } from '../data/drivers';

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const results = drivers.filter(
      (driver) =>
        driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        driver.plateNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelectDriver = (driver) => {
    navigate.push(`/driver/${driver.id}`);
  };

  return (
    <Container maxW="3xl" py={8} pb={20}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Haul<Box as="span" color="#06C167">Mate</Box>
        </Heading>
        <DriverSearch onSearch={handleSearch} />
        {searchResults.length > 0 && (
          <VStack align="stretch" width="100%" spacing={2}>
            <Heading as="h2" size="lg" mb={2}>Search Results:</Heading>
            {searchResults.map((driver) => (
              <Box
                key={driver.id}
                bg="white"
                color="black"
                p={4}
                borderRadius="lg"
                cursor="pointer"
                onClick={() => handleSelectDriver(driver)}
                _hover={{ bg: "gray.100" }}
                transition="background-color 0.2s"
              >
                <Box fontWeight="semibold">{driver.name}</Box>
                <Box fontSize="sm" color="gray.600">Plate: {driver.plateNumber}</Box>
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Container>
  );
}

export default Home;