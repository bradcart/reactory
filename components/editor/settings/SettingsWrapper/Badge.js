import { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { styled } from "../../../../stitches.config";

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

export const Badge = ({ selected, nodeName, setCustom }) => {
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
