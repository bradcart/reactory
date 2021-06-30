import { useNode, Element } from "@craftjs/core";
import { Image } from "./Image";
import { Text } from "./Text";
import { Button } from "./Button";
import {
  StyledCard,
  StyledCardTop,
  StyledCardBottom,
  StyledCardBottomUpper,
  StyledCardBottomLower,
} from "../styled/StyledCard";
import { SettingsWrapper } from "../styled/settings/SettingsWrapper";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";
import { StyledSlider } from "../styled/settings/Slider";
import { ColorPicker } from "../styled/settings/ColorPicker";
import { StyledLabel } from "../styled/settings/Label";
import { StyledSeparator } from "../styled/settings/Separator";

const dummyText =
  "Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...";

export const CardText = ({ alignItems, children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <StyledCardBottomUpper ref={connect} alignItems={alignItems}>
      {children}
    </StyledCardBottomUpper>
  );
};

CardText.craft = {
  displayName: "Card Text Container",
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.displayName == "Text",
  },
  custom: {
    droppableOnly: true,
  },
};

export const CardButtons = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <StyledCardBottomLower ref={connect}>{children}</StyledCardBottomLower>
  );
};

CardButtons.craft = {
  displayName: "Card Button Container",
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.displayName == "Button",
  },
  custom: {
    droppableOnly: true,
  },
};

export const Card = ({ size, padding, alignItems, radius, background }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <StyledCard
      ref={(ref) => connect(drag(ref))}
      size={size}
      radius={radius}
      padding={padding}
      style={{ backgroundColor: background }}
    >
      <StyledCardTop>
        <Element is={Image} id="card__image" width={100} height={100} />
      </StyledCardTop>
      <StyledCardBottom padding={padding}>
        <Element
          is={CardText}
          id="card__text-container"
          canvas
          alignItems={alignItems}
        >
          <Element
            is={Text}
            id="card__text"
            text={dummyText}
            fontSize={12}
            activeFontFamily="Poppins"
          />
        </Element>
        <Element is={CardButtons} id="card__button-container" canvas>
          <Element
            is={Button}
            id="card__button-primary"
            skipParentNode
            invertDefaultTextColor
          />
          <Element
            is={Button}
            id="card__button-secondary"
            variant="outline"
            color="#111"
            skipParentNode
          />
        </Element>
      </StyledCardBottom>
    </StyledCard>
  );
};

const CardSettings = () => {
  const {
    size,
    padding,
    alignItems,
    radius,
    background,
    actions: { setProp },
  } = useNode((node) => ({
    size: node.data.props.size,
    padding: node.data.props.padding,
    alignItems: node.data.props.alignItems,
    radius: node.data.props.radius,
    background: node.data.props.background,
  }));

  return (
    <SettingsWrapper>
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
      <StyledLabel htmlFor="card__padding">Padding</StyledLabel>
      <StyledSlider
        id="card__padding"
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={10}
        min={10}
        max={80}
      />
      <StyledLabel htmlFor="card__align-items">Align</StyledLabel>
      <StyledToggleGroup
        id="card__align-items"
        currentValue={alignItems}
        onValueChange={(value) =>
          setProp((props) => (props.alignItems = value))
        }
        valueOne="start"
        labelOne="Top"
        valueTwo="center"
        labelTwo="Center"
        valueThree="end"
        labelThree="Bottom"
      />
      <StyledSeparator />
      <StyledLabel htmlFor="card__border-radius">Corners</StyledLabel>
      <StyledToggleGroup
        id="card__border-radius"
        currentValue={radius}
        onValueChange={(value) => setProp((props) => (props.radius = value))}
        valueOne="straight"
        labelOne="Straight"
        valueTwo="round"
        labelTwo="Round"
        valueThree="rounder"
        labelThree="Rounder"
      />
      <StyledSeparator />
      <StyledLabel>Background</StyledLabel>
      <ColorPicker
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </SettingsWrapper>
  );
};

const CardDefaultProps = {
  size: "sm",
  padding: 20,
  alignItems: "center",
  radius: "round",
  background: "#eee",
};

Card.craft = {
  displayName: "Card",
  props: CardDefaultProps,
  related: {
    settings: CardSettings,
  },
};
