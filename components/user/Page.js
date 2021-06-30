import { useNode } from "@craftjs/core";
import { StyledBox } from "../styled/StyledBox";
import { StyledSeparator } from "../styled/settings/Separator";
import { StyledLabel } from "../styled/settings/Label";
import { StyledSlider } from "../styled/settings/Slider";
import { ColorPicker } from "../styled/settings/ColorPicker";

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
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <StyledBox css={{ mt: "$1" }}>
      <StyledSeparator decorative css={{ opacity: 0 }} />
      <StyledLabel htmlFor="page__padding">Padding</StyledLabel>
      <StyledSlider
        id="page__padding"
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      <StyledLabel htmlFor="page__background">Background</StyledLabel>
      <ColorPicker
        id="page__background"
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
