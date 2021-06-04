import React from "react";
import {
  Box,
  Flex,
  VStack,
  Heading,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "../user/Container";
import { Card } from "../user/Card";
import { Button } from "../user/Button";
import { Text } from "../user/Text";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <Box px={2} py={2}>
      <Flex direction="column">
        <Box pb={2}>
          <Heading size="md">Drag to add</Heading>
        </Box>
        <VStack spacing={1}>
          <ChakraButton
            ref={(ref) => connectors.create(ref, <Button />)}
            isFullWidth
          >
            Button
          </ChakraButton>
          <ChakraButton
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            isFullWidth
          >
            Text
          </ChakraButton>
          <ChakraButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Container} padding={20} canvas />
              )
            }
            isFullWidth
          >
            Container
          </ChakraButton>
          <ChakraButton
            ref={(ref) => connectors.create(ref, <Card />)}
            isFullWidth
          >
            Card
          </ChakraButton>
        </VStack>
      </Flex>
    </Box>
  );
};
