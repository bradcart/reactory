import Box from "../styled/Box";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useNode } from "@craftjs/core";

export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Box ref={(ref) => connect(drag(ref))} bg={background} p={`${padding}px`}>
      {children}
    </Box>
  );
};

export const ContainerSettings = () => {
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
      <div>
        <HexColorPicker
          value={background}
          onChange={(color) => {
            setProp((props) => (props.background = color));
          }}
        />
        <HexColorInput
          value={background}
          placeholder={background}
          onChange={(color) => {
            setProp((props) => (props.background = color));
          }}
          style={{ width: "50%", margin: "10px 0" }}
        />
      </div>
      <div className="slidecontainer">
        <input
          type="range"
          min={1}
          max={50}
          step={7}
          className="slider"
          value={padding}
          onChange={(e) => {
            setProp((props) => (props.padding = e.target.value));
          }}
        />
      </div>
    </>
  );
};

// We export this because we'll be using this in the Card component as well
export const ContainerDefaultProps = {
  background: "#fff",
  padding: 3,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
