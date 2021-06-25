import { styled } from "../../../stitches.config";
import * as Slider from "@radix-ui/react-slider";
import { useEffect } from "react";
import React from "react";

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
  width: 13,
  height: 13,
  outline: "none",
  opacity: 1,
  backgroundColor: "$gray700",
  boxShadow: "0 0 1px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.15)",
  borderRadius: "$round",

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

const SliderRoot = styled(Slider.Root, {
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
    // [`& ${SliderThumb}`]: {
    //   opacity: 1,
    // },
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
  return (
    <SliderRoot {...props}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </SliderRoot>
  );
};
