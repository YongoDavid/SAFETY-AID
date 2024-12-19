import React, { useEffect, useState } from 'react';
import { User, Truck, Star, Award, MessageSquare } from 'lucide-react';
import { Box, VStack, Heading, Text, Flex, Progress } from '@chakra-ui/react';
import ReviewItem from './ReviewItem';

function DriverProfile({ driver }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(0), 100);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= driver.successRate) {
          clearInterval(interval);
          return driver.successRate;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [driver.successRate]);

  return (
    <Box bg="white" color="black" borderRadius="lg" boxShadow="md">
      <Box borderBottom="1px" borderColor="gray.200" p={6}>
        <Heading as="h2" size="xl" color="#06C167" display="flex" alignItems="center" gap={2}>
          <User />
          Driver Profile
        </Heading>
      </Box>
      <VStack spacing={6} p={6} align="stretch">
        <Flex flexWrap="wrap" gap={4}>
          <Box flex="1" minW="45%">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">Name</Text>
            <Text fontSize="xl" fontWeight="bold">{driver.name}</Text>
          </Box>
          <Box flex="1" minW="45%">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">Plate Number</Text>
            <Text fontSize="xl" fontWeight="bold">{driver.plateNumber}</Text>
          </Box>
          <Box flex="1" minW="45%">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">Rating</Text>
            <Flex alignItems="center" gap={1}>
              <Star fill="#06C167" color="#06C167" />
              <Text fontSize="xl" fontWeight="bold">{driver.rating.toFixed(1)}</Text>
            </Flex>
          </Box>
          <Box flex="1" minW="45%">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">Total Rides</Text>
            <Flex alignItems="center" gap={1}>
              <Truck color="#06C167" />
              <Text fontSize="xl" fontWeight="bold">{driver.totalRides}</Text>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Text fontSize="sm" fontWeight="semibold" color="gray.500" mb={2}>Success Rate</Text>
          <Box position="relative" pt={1}>
            <Progress value={progress} size="lg" borderRadius="full" />
            <Text
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="sm"
              fontWeight="bold"
              color="white"
            >
              {progress}%
            </Text>
          </Box>
        </Box>
        {driver.successRate >= 95 && (
          <Flex
            alignItems="center"
            justifyContent="center"
            bg="#06C16710"
            p={4}
            borderRadius="lg"
          >
            <Award color="#06C167" size={32} style={{ marginRight: '0.5rem' }} />
            <Text fontSize="lg" fontWeight="semibold" color="#06C167">Top Rated Driver</Text>
          </Flex>
        )}
        <Box>
          <Heading as="h3" size="lg" color="#06C167" mb={4} display="flex" alignItems="center" gap={2}>
            <MessageSquare />
            Reviews ({driver.reviews.length})
          </Heading>
          <VStack spacing={4} align="stretch">
            {driver.reviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default DriverProfile;