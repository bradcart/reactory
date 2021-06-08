import React from "react";
import {
  Button as RebassButton,
  Box as RebassBox,
  Flex as RebassFlex,
} from "rebass";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "../user/Container";
import { Card } from "../user/Card";
import { Button } from "../user/Button";
import { Text } from "../user/Text";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <RebassBox px={2} py={2}>
      <RebassFlex flexDirection="column">
        <RebassBox pb={2}>
          <h3>Drag to add</h3>
        </RebassBox>
        <RebassFlex flexDirection="column">
          <RebassButton
            ref={(ref) => connectors.create(ref, <Button />)}
            isFullWidth
          >
            Button
          </RebassButton>
          <RebassButton
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            isFullWidth
          >
            Text
          </RebassButton>
          <RebassButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Container} padding={20} canvas />
              )
            }
            isFullWidth
          >
            Container
          </RebassButton>
          <RebassButton
            ref={(ref) => connectors.create(ref, <Card />)}
            isFullWidth
          >
            Card
          </RebassButton>
        </RebassFlex>
      </RebassFlex>
    </RebassBox>
  );
};
