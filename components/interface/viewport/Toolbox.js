import { Element, useEditor } from "@craftjs/core";

import { Container } from "../../user/Container";
import { Button } from "../../user/Button";
import { Text } from "../../user/Text";

import { StyledBox } from "../../styled/StyledBox";
import { StyledButton } from "../../styled/StyledButton";

import { ContainerIcon } from "../../icons/ContainerIcon";
import { TextIcon } from "../../icons/TextIcon";
import { ButtonIcon } from "../../icons/ButtonIcon";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <StyledBox
      css={{ px: 10, pt: 40, height: "100%", backgroundColor: "$black100" }}
    >
      <StyledBox
        css={{
          display: "grid",
          gridTemplateRows: "repeat(4, 1fr)",
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
          <ContainerIcon width={64} />
        </StyledButton>
        <StyledButton
          variant="toolbox"
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
        >
          <TextIcon width={72} />
        </StyledButton>
        <StyledButton
          variant="toolbox"
          ref={(ref) => connectors.create(ref, <Button />)}
        >
          <ButtonIcon width={104} />
        </StyledButton>
      </StyledBox>
    </StyledBox>
  );
};

/*
<StyledButton
    variant="toolbox"
    ref={(ref) => connectors.create(ref, <Card />)}
  >
    Card
</StyledButton> 
*/

/* <StyledText variant="toolbox">container</StyledText> */
