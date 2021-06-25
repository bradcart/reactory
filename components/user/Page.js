import { StyledBox } from "../styled/StyledBox";
import { useNode } from "@craftjs/core";

export const Page = ({ background, padding = 0, children }) => {
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

const PageDefaultProps = {
  background: "#eeeeee",
  padding: 0,
};

Page.craft = {
  displayName: "Page",
  props: PageDefaultProps,
  related: {
    settings: PageSettings,
  },
};
