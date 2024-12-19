import React from 'react';
import { ThumbsUp, ThumbsDown, Star } from 'lucide-react';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

function ReviewItem({ review }) {
  return (
    <Flex gap={4} pb={4} borderBottom="1px" borderColor="gray.200" _last={{ borderBottom: 'none' }}>
      <Avatar name={review.author} src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.author}`} />
      <Box flex={1}>
        <Flex justifyContent="space-between" alignItems="center" mb={2}>
          <Text fontWeight="semibold" fontSize="lg">{review.author}</Text>
          <Text fontSize="sm" color="gray.500">{review.date}</Text>
        </Flex>
        <Flex mb={2}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < review.rating ? "#06C167" : "gray.300"}
              color={i < review.rating ? "#06C167" : "gray.300"}
            />
          ))}
        </Flex>
        <Text color="gray.600" mb={2}>{review.content}</Text>
        <Flex gap={4} fontSize="sm" color="gray.500">
          <Flex alignItems="center" gap={1}>
            <ThumbsUp size={16} color="#06C167" />
            <Text>{review.helpful}</Text>
          </Flex>
          <Flex alignItems="center" gap={1}>
            <ThumbsDown size={16} color="red.500" />
            <Text>{review.notHelpful}</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ReviewItem;