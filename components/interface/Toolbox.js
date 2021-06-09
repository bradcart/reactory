import React from "react";
import {
  Button as RebassButton,
  Box as RebassBox,
  Flex as RebassFlex,
} from "rebass";
import StyledBox from "../styled/Box";
import StyledFlex from "../styled/Flex";
import StyledGrid from "../styled/Grid";
import StyledButton from "../styled/Button";
import Heading from "../styled/Heading";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "../user/Container";
import { Card } from "../user/Card";
import { Button } from "../user/Button";
import { Text } from "../user/Text";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <StyledBox px={2} pt={4} minHeight="90vh" bg="white">
      <StyledFlex flexDirection="column">
        {/* <StyledFlex pb={2} justifyContent="center">
          <Heading level={4}>Drag to add</Heading>
        </StyledFlex> */}
        <StyledGrid gridTemplateRows="repeat(4, 1fr)" gridRowGap={2}>
          <StyledButton
            variant="toolbox"
            ref={(ref) => connectors.create(ref, <Button />)}
          >
            Button
          </StyledButton>
          <StyledButton
            variant="toolbox"
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
          >
            Text
          </StyledButton>
          <StyledButton
            variant="toolbox"
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Container} padding={20} canvas />
              )
            }
          >
            Container
          </StyledButton>
          <StyledButton
            variant="toolbox"
            ref={(ref) => connectors.create(ref, <Card />)}
          >
            Card
          </StyledButton>
        </StyledGrid>
      </StyledFlex>
    </StyledBox>
  );
};
