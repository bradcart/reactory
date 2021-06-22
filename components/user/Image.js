import { useNode } from "@craftjs/core";
import { useState } from "react";
import { StyledBox } from "../styled/StyledBox";
import { StyledImage } from "../styled/StyledImage";
import { TextInput } from "../styled/inputs/TextInput";

export const Image = ({ src, width }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div style={{ width: `${width}px` }}>
      <StyledImage ref={(ref) => connect(drag(ref))} src={src} />
    </div>
  );
};

const ImageSettings = () => {
  const {
    width,
    actions: { setProp },
  } = useNode((node) => ({
    src: node.data.props.src,
    width: node.data.props.width,
  }));

  const updateImage = (newImg) => {
    setProp((props) => (props.src = newImg));
  };

  const updateWidth = (newWidth) => {
    setProp((props) => (props.width = newWidth));
  };

  return (
    <StyledBox css={{ backgroundColor: "$black" }}>
      <TextInput
        initialValue="Paste image URL here."
        updateValue={updateImage}
        formId="img-src"
        formLabel="Image Source"
      />
      <TextInput
        initialValue={width}
        updateValue={updateWidth}
        formId="img-width"
        formLabel="Width"
      />
    </StyledBox>
  );
};

const ImageDefaultProps = {
  src: "/placeholder.png",
  width: 600,
};

Image.craft = {
  props: ImageDefaultProps,
  related: {
    settings: ImageSettings,
  },
};
