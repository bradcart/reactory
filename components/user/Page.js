import { useNode } from "@craftjs/core";
import { StyledBox } from "../styled/StyledBox";
import { StyledText } from "../styled/StyledText";
import { StyledSlider } from "../styled/inputs/Slider";
import { ColorPicker } from "../styled/inputs/ColorPicker";

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
    <>
      <StyledText variant="settings">Padding</StyledText>
      <StyledSlider
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      <StyledText variant="settings">Background</StyledText>
      <ColorPicker
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </>
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
