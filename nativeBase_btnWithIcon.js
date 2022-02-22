import React from "react";
import { Button, HStack, Icon, Center, NativeBaseProvider, Divider } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Example = () => {
  return (
    <HStack>
      <Button
        leftIcon={<Icon as={AntDesign} name="totop" size="sm" />} >
        Click
      </Button> 

      <Divider bg="emerald.500" thickness="2" orientation="vertical" mx="5" />

      <Button isLoading _loading={{bg: "emerald.400:alpha.70", _text: {color: "emerald.700"}}} 
      _spinner={{color: "black"}} isLoadingText="Submitting">
        Button
      </Button>

    </HStack>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
