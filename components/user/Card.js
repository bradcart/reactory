import { useNode, Element } from "@craftjs/core";
import { Image } from "./Image";
import { Text } from "./Text";
import { Button } from "./Button";
import {
  StyledCard,
  StyledCardTop,
  StyledCardBottom,
} from "../styled/StyledCard";
import { StyledBox } from "../styled/StyledBox";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";
import { ColorPicker } from "../styled/settings/ColorPicker";
import { StyledLabel } from "../styled/settings/Label";
import { StyledSeparator } from "../styled/settings/Separator";

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const Card = ({ size }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <StyledCard ref={(ref) => connect(drag(ref))} size={size}>
      <StyledCardTop>
        <Element is={Image} id="card__image" width={100} height={100} />
      </StyledCardTop>
      <StyledCardBottom>
        <Element
          is={Text}
          id="card__text"
          text={dummyText}
          fontSize={16}
          activeFontFamily="Montserrat"
        />
        <Element is={Button} id="card__button" />
      </StyledCardBottom>
    </StyledCard>
  );
};

const CardSettings = () => {
  const {
    size,
    background,
    actions: { setProp },
  } = useNode((node) => ({
    size: node.data.props.size,
    background: node.data.props.background,
  }));

  return (
    <StyledBox css={{ mt: "$1" }}>
      <StyledSeparator decorative css={{ opacity: 0 }} />
      <StyledLabel htmlFor="card__size">Size</StyledLabel>
      <StyledToggleGroup
        id="card__size"
        currentValue={size}
        onValueChange={(value) => setProp((props) => (props.size = value))}
        valueOne="sm"
        labelOne="Small"
        valueTwo="md"
        labelTwo="Medium"
        valueThree="lg"
        labelThree="Large"
      />
      <StyledSeparator />
      <StyledLabel>Background</StyledLabel>
      <ColorPicker
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </StyledBox>
  );
};

const CardDefaultProps = {
  size: "sm",
};

Card.craft = {
  displayName: "Card",
  props: CardDefaultProps,
  related: {
    settings: CardSettings,
  },
};
