import { useState, useEffect, createElement } from "react";
import { useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { Box } from "../components";
import { styled } from "../stitches.config";
// import { Layers } from "@craftjs/layers";

const Wrapper = styled("div", {
  boxSizing: "border-box",
  width: "100%",
  mt: "$1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

const StyledBadge = styled("span", {
  // Reset
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  alignItems: "center",
  lineHeight: 1.1,
  verticalAlign: "middle",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
    content: '""',
  },
  "&::after": {
    boxSizing: "border-box",
    content: '""',
  },

  // Custom
  alignSelf: "center",
  backgroundColor: "$white",
  opacity: 0.8,
  borderRadius: "$pill",
  color: "$black100",
  fontFamily: "$ddin",
  fontSize: "$3",
  fontWeight: "bolder",
  textTransform: "uppercase",
  textAlign: "center",
  whiteSpace: "nowrap",
  height: "$4",
  px: "$2",
  py: "$2",
});

const Badge = ({ selected, nodeName, setCustom }) => {
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  // const alphaNumeric = "^[a-zA-Z0-9]*$";

  return (
    <StyledBadge>
      <ContentEditable
        html={nodeName.replace("&nbsp;", "")}
        onClick={() => setEditable(true)}
        disabled={!editable}
        tagName="span"
        style={{ fontFamily: "inherit", fontSize: "inherit", cursor: "text" }}
        onChange={(e) =>
          setCustom(
            (custom) =>
              (custom.nodeName = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
      />
    </StyledBadge>
  );
};

const SettingsWrapper = ({ selected, nodeName, setCustom, children }) => (
  <Wrapper>
    <Badge selected={selected} nodeName={nodeName} setCustom={setCustom} />
    {children}
  </Wrapper>
);

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    // const currentNodeId = query.getEvent("selected").first();
    const currentNodeId = state.events.selected;
    let selected;

    if (currentNodeId) {
      // console.log(query.getEvent('selected').first());
      // console.log(state.events.selected.entries());
      // console.log(currentNodeId);
      // console.log(state.nodes);

      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        displayName: state.nodes[currentNodeId].data.displayName,
        nodeName:
          state.nodes[currentNodeId].data.custom &&
          state.nodes[currentNodeId].data.custom.nodeName,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  return (
    <Box
      flex
      direction="column"
      css={{
        // justifyContent: "space-between",
        px: "$3",
        py: 40,
        width: "100%",
        height: "100%",
        backgroundColor: "$black100",
        overflow: "auto",
      }}
    >
      {selected && selected.settings ? createElement(selected.settings) : null}
    </Box>
  );
};
