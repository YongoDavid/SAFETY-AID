import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, User, MessageSquare } from 'lucide-react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

function Navigation() {
  const location = useLocation();
  // const history = useHistory();
  // useHistory() now replaced with use navigate 
  const navigate = useNavigate();

  const getActiveTab = () => {
    if (location.pathname === '/') return 'search';
    if (location.pathname.startsWith('/driver/')) return 'profile';
    return '';
  };

  const setActiveTab = (tab) => {
    if (tab === 'search') navigate.push('/');
    // For 'profile' and 'reviews', we'd need the current driver ID
    // This is a simplified version
  };

  const activeTab = getActiveTab();

  return (
    <Box position="fixed" bottom={0} left={0} right={0} bg="white" borderTop="1px" borderColor="gray.200">
      <Flex maxW="3xl" mx="auto" justify="space-around">
        {['search', 'profile', 'reviews'].map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            flex={1}
            py={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg="transparent"
            color={activeTab === tab ? "#06C167" : "gray.500"}
            _hover={{ bg: "gray.100" }}
          >
            {tab === 'search' && <Search size={24} style={{ marginBottom: '0.25rem' }} />}
            {tab === 'profile' && <User size={24} style={{ marginBottom: '0.25rem' }} />}
            {tab === 'reviews' && <MessageSquare size={24} style={{ marginBottom: '0.25rem' }} />}
            <Text fontSize="xs" textTransform="capitalize">{tab}</Text>
          </Button>
        ))}
      </Flex>
    </Box>
  );
}

export default Navigation;