import { Element, useEditor } from "@craftjs/core";

import { Container } from "../../user/Container";
import { Button } from "../../user/Button";
import { Text } from "../../user/Text";
import { Image } from "../../user/Image";
import { Card } from "../../user/Card";

import { StyledBox } from "../../styled/StyledBox";
import { StyledButton } from "../../styled/StyledButton";

import { ContainerIcon } from "../../icons/ContainerIcon";
import { TextIcon } from "../../icons/TextIcon";
import { ButtonIcon } from "../../icons/ButtonIcon";
import { ImageIcon } from "../../icons/ImageIcon";
import { CardIcon } from "../../icons/CardIcon";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <StyledBox
      css={{ px: 10, pt: 40, height: "100%", backgroundColor: "$black100" }}
    >
      <StyledBox
        css={{
          display: "grid",
          gridTemplateRows: "repeat(5, 1fr)",
          gridRowGap: "$3",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <StyledButton
          variant="toolbox"
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={Container} padding={20} canvas />
            )
          }
        >
          <ContainerIcon width={60} />
        </StyledButton>
        <StyledButton
          variant="toolbox"
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
        >
          <TextIcon width={74} />
        </StyledButton>
        <StyledButton
          variant="toolbox"
          ref={(ref) => connectors.create(ref, <Button />)}
        >
          <ButtonIcon width={104} />
        </StyledButton>
        <StyledButton
          variant="toolbox"
          ref={(ref) => connectors.create(ref, <Image />)}
        >
          <ImageIcon width={78} />
        </StyledButton>
        <StyledButton
          variant="toolbox"
          ref={(ref) => connectors.create(ref, <Card />)}
        >
          <CardIcon width={78} />
        </StyledButton>
      </StyledBox>
    </StyledBox>
  );
};
