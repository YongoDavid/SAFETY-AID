import React, { useState } from 'react';
import { Search, Camera } from 'lucide-react';
import { Input, Button, VStack} from '@chakra-ui/react';

function DriverSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <VStack spacing={4} width="100%">
          <Input
            size="lg"
            type="text"
            placeholder="Enter plate number or driver name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bg="white"
            color="black"
            borderWidth={2}
            borderColor="gray.300"
            borderRadius="full"
            _focus={{ borderColor: "#06C167", boxShadow: "0 0 0 1px #06C167" }}
          />
          <Button
            width="4.5rem"
            h="1.75rem"
            size="sm"
            variant="ghost"
            onClick={() => {}}
            _hover={{ color: "#06C167" }}
          >
            <Camera />
          </Button>
        <Button
          type="submit"
          width="100%"
          bg="#06C167"
          _hover={{ bg: "#05a057" }}
          color="white"
          borderRadius="full"
          leftIcon={<Search />}
        >
          Search Driver
        </Button>
      </VStack>
    </form>
  );
}

export default DriverSearch;