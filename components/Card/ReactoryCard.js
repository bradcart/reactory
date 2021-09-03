import { useNode, Element } from "@craftjs/core";
import { Card, CardTop, CardBottom, CardBottomUpper, CardBottomLower } from ".";
import {
  ReactoryImage,
  ReactoryButton,
  ReactoryText,
  SettingsWrapper,
  ToggleGroup,
  Slider,
  ColorPicker,
  Label,
  Separator,
} from "..";

const dummyText =
  "Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...";

export const ReactoryCardText = ({ alignItems, children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <CardBottomUpper ref={connect} alignItems={alignItems}>
      {children}
    </CardBottomUpper>
  );
};

ReactoryCardText.craft = {
  displayName: "Card Text Container",
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.displayName == "Text",
  },
  custom: {
    droppableOnly: true,
  },
};

export const ReactoryCardButtons = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <CardBottomLower ref={connect}>{children}</CardBottomLower>;
};

ReactoryCardButtons.craft = {
  displayName: "Card Button Container",
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.displayName == "Button",
  },
  custom: {
    droppableOnly: true,
  },
};

export const ReactoryCard = ({
  size,
  padding,
  alignItems,
  radius,
  background,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Card
      ref={(ref) => connect(drag(ref))}
      size={size}
      radius={radius}
      padding={padding}
      style={{ backgroundColor: background }}
    >
      <CardTop>
        <Element is={ReactoryImage} id="card__image" width={100} height={100} />
      </CardTop>
      <CardBottom padding={padding}>
        <Element
          is={ReactoryCardText}
          id="card__text-container"
          canvas
          alignItems={alignItems}
        >
          <Element
            is={ReactoryText}
            id="card__text"
            text={dummyText}
            fontSize={12}
            activeFontFamily="Poppins"
          />
        </Element>
        <Element is={ReactoryCardButtons} id="card__button-container" canvas>
          <Element
            is={ReactoryButton}
            id="card__button-primary"
            color="#fff"
            skipParentNode
          />
          <Element
            is={ReactoryButton}
            id="card__button-secondary"
            variant="outline"
            color="#111"
            skipParentNode
          />
        </Element>
      </CardBottom>
    </Card>
  );
};

const ReactoryCardSettings = () => {
  const {
    size,
    padding,
    alignItems,
    radius,
    background,
    selected,
    nodeName,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    size: node.data.props.size,
    padding: node.data.props.padding,
    alignItems: node.data.props.alignItems,
    radius: node.data.props.radius,
    background: node.data.props.background,
    selected: node.events.selected,
    nodeName: node.data.custom.nodeName,
  }));

  return (
    <SettingsWrapper
      selected={selected}
      nodeName={nodeName}
      setCustom={setCustom}
    >
      <Separator decorative css={{ opacity: 0 }} />
      <Label htmlFor="card__padding">Padding</Label>
      <Slider
        id="card__padding"
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={10}
        min={10}
        max={80}
      />
      <Separator />

      <Label htmlFor="card__size">Size</Label>
      <ToggleGroup
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
      <Label htmlFor="card__align-items">Align Content</Label>
      <ToggleGroup
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
      <Label htmlFor="card__border-radius">Corners</Label>
      <ToggleGroup
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
      <Separator />
      <Label htmlFor="card__background">Background</Label>
      <ColorPicker
        id="card__background"
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </SettingsWrapper>
  );
};

const ReactoryCardDefaultProps = {
  size: "sm",
  padding: 20,
  alignItems: "center",
  radius: "round",
  background: "#eee",
};

ReactoryCard.craft = {
  displayName: "Card",
  props: ReactoryCardDefaultProps,
  custom: {
    nodeName: "Card",
  },
  related: {
    settings: ReactoryCardSettings,
  },
};
