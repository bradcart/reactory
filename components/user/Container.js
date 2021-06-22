import { useNode } from "@craftjs/core";

import { StyledBox } from "../styled/StyledBox";

import { StyledSlider } from "../styled/inputs/Slider";

export const Container = ({ background, padding, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <StyledBox
      ref={(ref) => connect(drag(ref))}
      style={{
        backgroundColor: background,
        padding: padding,
      }}
    >
      {children}
    </StyledBox>
  );
};

export const ContainerSettings = () => {
  const {
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    padding: node.data.props.padding,
  }));

  return (
    <>
      <StyledSlider
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      {/* <div className="slidecontainer">
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
      </div> */}
    </>
  );
};

// We export this because we'll be using this in the Card component as well
export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 20,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
