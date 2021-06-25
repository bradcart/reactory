import { StyledBox } from "../styled/StyledBox";
import { useNode } from "@craftjs/core";

export const Canvas = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <StyledBox
      ref={(ref) => connect(drag(ref))}
      css={{
        backgroundColor: background,
        padding: `${padding}px`,
        height: "calc(95vh - 60px)",
        position: "absolute",
        width: "90%",
      }}
    >
      {children}
    </StyledBox>
  );
};

const CanvasSettings = () => {
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

const CanvasDefaultProps = {
  background: "#eeeeee",
  padding: 0,
};

Canvas.craft = {
  props: CanvasDefaultProps,
  related: {
    settings: CanvasSettings,
  },
};
