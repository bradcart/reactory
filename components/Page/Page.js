import { useNode } from "@craftjs/core";
import {
  Box,
  SettingsWrapper,
  Separator,
  Label,
  Slider,
  ColorPicker,
} from "..";

export const Page = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect },
  } = useNode();

  //VARIANTS: PADDING, BACKGROUND, BACKGROUND IMAGE SETTINGS
  return (
    <Box
      ref={connect}
      style={{
        // width: "90%",
        width: "100%",
        height: "calc(95vh - 60px)",
        position: "absolute",
        padding: `${padding}px`,
        background: background,
        overflow: "auto",
        boxShadow: "0px 4px 20px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      {children}
    </Box>
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
  background: "#fbfcfd",
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
