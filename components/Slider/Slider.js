import { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { styled } from "../../stitches.config";
import { Tooltip } from "..";

const SliderTrack = styled(SliderPrimitive.Track, {
  position: "relative",
  flexGrow: 1,
  backgroundColor: "$whiteDim",
  borderRadius: "$pill",
  '&[data-orientation="horizontal"]': {
    height: 2,
  },
  '&[data-orientation="vertical"]': {
    width: 2,
    height: 100,
  },
});

const SliderRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  background: "$red",
  borderRadius: "inherit",
  '&[data-orientation="horizontal"]': {
    height: "100%",
  },
  '&[data-orientation="vertical"]': {
    width: "100%",
  },
});

const SliderThumb = styled(SliderPrimitive.Thumb, {
  display: "block",
  position: "relative",
  width: 14,
  height: 14,
  outline: "none",
  opacity: 1,
  backgroundColor: "$gray500",
  // boxShadow: "0 0 1px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.15)",
  borderRadius: "$round",
  "&:hover": {
    backgroundColor: "$gray600",
  },
  // "&::after": {
  //   content: '""',
  //   m: 0,
  //   p: 0,
  //   display: "inline-block",
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 6,
  //   height: 6,
  //   backgroundColor: "$red",
  //   opacity: 1,
  //   borderRadius: "$round",
  // },
});

const SliderRoot = styled(SliderPrimitive.Root, {
  width: "95%",
  mt: "$2",
  mb: "$5",
  // alignSelf: "stretch",
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  userSelect: "none",
  touchAction: "none",
  height: 15,
  flexGrow: 1,
  cursor: "pointer",

  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    width: 15,
  },

  // "&:hover": {
  // [`& ${SliderTrack}`]: {
  //   backgroundColor: "$black300",
  // },
  // [`& ${SliderThumb}`]: {
  //   opacity: 0.7,
  // },
  // },
});

export const Slider = (props) => {
  const [open, toggleOpen] = useState(false);
  return (
    <SliderRoot
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={() => toggleOpen(false)}
      {...props}
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <Tooltip content={props.value} open={open}>
        <SliderThumb />
      </Tooltip>
    </SliderRoot>
  );
};
