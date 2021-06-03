import React from "react";
import {
  Button as ChakraButton,
  SimpleGrid,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useNode } from "@craftjs/core";

export const Button = ({ size, variant, color, text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <ChakraButton
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      colorScheme={color}
    >
      {text}
    </ChakraButton>
  );
};

const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <SimpleGrid rows={4} spacingY={4}>
      <Box>
        <FormControl
          as="fieldset"
          onChange={(e) => setProp((props) => (props.size = e.target.value))}
        >
          <FormLabel as="legend">Size</FormLabel>
          <RadioGroup defaultValue={props.size}>
            <HStack>
              <Radio size="sm" value="sm">
                Small
              </Radio>
              <Radio size="sm" value="md">
                Medium
              </Radio>
              <Radio size="sm" value="lg">
                Large
              </Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl
          as="fieldset"
          onChange={(e) => setProp((props) => (props.variant = e.target.value))}
        >
          <FormLabel as="legend">Variant</FormLabel>
          <RadioGroup defaultValue={props.variant}>
            <HStack>
              <Radio size="sm" value="link">
                Text
              </Radio>
              <Radio size="sm" value="outline">
                Outlined
              </Radio>
              <Radio size="sm" value="solid">
                Solid
              </Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl
          as="fieldset"
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
        >
          <FormLabel as="legend">Color</FormLabel>
          <RadioGroup defaultValue={props.color}>
            <HStack>
              <Radio size="sm" value="blue">
                Blue
              </Radio>
              <Radio size="sm" value="purple">
                Purple
              </Radio>
              <Radio size="sm" value="pink">
                Pink
              </Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <Input
          variant="outline"
          size="sm"
          defaultValue={props.text}
          onChange={(e) => setProp((props) => (props.text = e.target.value))}
        />
      </Box>
    </SimpleGrid>
  );
};

Button.craft = {
  props: {
    size: "sm",
    variant: "solid",
    color: "blue",
    text: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
};
