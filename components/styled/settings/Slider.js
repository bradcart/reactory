import { styled } from "../../../stitches.config";
import * as Slider from "@radix-ui/react-slider";
import { StyledTooltip } from "./Tooltip";
import { useState } from "react";

const SliderTrack = styled(Slider.Track, {
  position: "relative",
  flexGrow: 1,
  backgroundColor: "$gray100",
  borderRadius: "$pill",
  '&[data-orientation="horizontal"]': {
    height: 2,
  },
  '&[data-orientation="vertical"]': {
    width: 2,
    height: 100,
  },
});

const SliderRange = styled(Slider.Range, {
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

const SliderThumb = styled(Slider.Thumb, {
  //   position: "relative",
  display: "block",
  position: "relative",
  // alignItems: "center",
  // justifyContent: "center",
  width: 12,
  height: 12,
  outline: "none",
  opacity: 1,
  backgroundColor: "$gray600",
  boxShadow: "0 0 1px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.15)",
  borderRadius: "$round",
  cursor: "pointer",
  "&::after": {
    content: '""',
    m: 0,
    p: 0,
    display: "inline-block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 6,
    height: 6,
    backgroundColor: "$red",
    opacity: 1,
    borderRadius: "$round",
  },

  //   "&::after": {
  //     content: '""',
  //     position: "absolute",
  //     top: 0,
  //     right: 0,
  //     bottom: 0,
  //     left: 0,
  //     zIndex: -2,
  //     backgroundColor: "hsla(0,0%,0%,.035)",
  //     transform: "scale(1)",
  //     borderRadius: "$round",
  //     transition: "transform 200ms cubic-bezier(0.22, 1, 0.36, 1)",
  //   },

  //   "&:focus": {
  //     "&::after": {
  //       transform: "scale(2)",
  //     },
  //   },
});

// const SliderThumbInner = styled("span", {
//   display: "inline-block",
//   width: 7,
//   height: 7,
//   outline: "none",
//   opacity: 1,
//   backgroundColor: "$red",
//   borderRadius: "$round",
//   cursor: "pointer",
// });

const SliderRoot = styled(Slider.Root, {
  mt: "$1",
  mb: "$6",
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  userSelect: "none",
  touchAction: "none",
  height: 15,
  flexGrow: 1,

  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    width: 15,
  },

  "&:hover": {
    // [`& ${SliderTrack}`]: {
    //   backgroundColor: "$black300",
    // },
    [`& ${SliderThumb}`]: {
      opacity: 0.7,
    },
  },
});

// export const StyledSlider = React.forwardRef((props, forwardedRef) => {
//   const value = props.value || props.defaultValue;

//   return (
//     <SliderRoot {...props} ref={forwardedRef}>
//       <SliderTrack>
//         <SliderRange />
//       </SliderTrack>
//       <SliderThumb />
//     </SliderRoot>
//   );
// });

export const StyledSlider = (props) => {
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
      <StyledTooltip content={props.value} open={open}>
        <SliderThumb />
      </StyledTooltip>
    </SliderRoot>
  );
};
