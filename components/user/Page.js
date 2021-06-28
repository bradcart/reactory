import { useNode } from "@craftjs/core";
import { StyledBox } from "../styled/StyledBox";
import { StyledLabel } from "../styled/settings/Label";
import { StyledSlider } from "../styled/settings/Slider";
import { ColorPicker } from "../styled/settings/ColorPicker";

export const Page = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  //VARIANTS: PADDING, BACKGROUND, BACKGROUND IMAGE SETTINGS
  return (
    <StyledBox
      ref={(ref) => connect(drag(ref))}
      style={{
        width: "90%",
        height: "calc(95vh - 60px)",
        position: "absolute",
        padding: `${padding}px`,
        background: background,
        overflow: "auto",
        boxShadow: "0px 4px 16px 8px rgba(0, 0, 0, 0.25)",
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
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <StyledBox css={{ mt: "$1" }}>
      <StyledLabel>Padding</StyledLabel>
      <StyledSlider
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      <StyledLabel>Background</StyledLabel>
      <ColorPicker
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </StyledBox>
  );
};

const PageDefaultProps = {
  background: "#eeeeee",
  padding: 40,
};

Page.craft = {
  displayName: "Page",
  props: PageDefaultProps,
  related: {
    settings: PageSettings,
  },
};
