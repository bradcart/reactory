import { useNode } from "@craftjs/core";
import { StyledBox } from "../styled/Box/StyledBox";
import {
  SettingsWrapper,
  Separator,
  Label,
  Slider,
  ColorPicker,
} from "../styled/settings";

export const Page = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect },
  } = useNode();

  //VARIANTS: PADDING, BACKGROUND, BACKGROUND IMAGE SETTINGS
  return (
    <StyledBox
      ref={connect}
      style={{
        width: "90%",
        height: "calc(95vh - 60px)",
        position: "absolute",
        padding: `${padding}px`,
        background: background,
        overflow: "auto",
        boxShadow: "0px 4px 20px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      {children}
    </StyledBox>
  );
};

const PageSettings = () => {
  const {
    background,
    padding,
    selected,
    nodeName,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
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
      <Label htmlFor="page__padding">Padding</Label>
      <Slider
        id="page__padding"
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      <Label htmlFor="page__background">Background</Label>
      <ColorPicker
        id="page__background"
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </SettingsWrapper>
  );
};

const PageDefaultProps = {
  background: "#fcfafc",
  padding: 40,
};

Page.craft = {
  displayName: "Page",
  props: PageDefaultProps,
  custom: {
    nodeName: "Page",
  },
  related: {
    settings: PageSettings,
  },
};
