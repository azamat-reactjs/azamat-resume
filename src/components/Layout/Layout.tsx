import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import { Box, Flex, VStack } from '@chakra-ui/react'

export const Layout = () => {
  return (
    <Box className="Layout" h="100%">
      <VStack w="100%" h="100%">
        <Header />
        <Flex w="100%" flex="1 1 auto">
          <Main />
        </Flex>
        <Footer />
      </VStack>
    </Box>
  )
}
