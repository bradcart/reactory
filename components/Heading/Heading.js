import React from "react";
// import { styled } from "../../../stitches.config";
import { Text } from "..";

const DEFAULT_TAG = "h1";

export const Heading = React.forwardRef((props, forwardedRef) => (
  <Text as={DEFAULT_TAG} {...props} ref={forwardedRef} />
));

// const variants = {
//   1: {
//     fontWeight: "bold",
//     fontSize: "xxl",
//   },
//   2: {
//     fontWeight: "bold",
//     fontSize: "xl",
//   },
//   3: {
//     fontWeight: "bold",
//     fontSize: "l",
//   },
//   4: {
//     fontWeight: "semibold",
//     fontSize: "m",
//   },
//   5: {
//     fontWeight: "medium",
//     fontSize: "s",
//   },
//   6: {
//     fontWeight: "regular",
//     fontSize: "xs",
//   },
// };

// const HeadingBase = ({ level, as: Component = `h${level}`, ...props }) => (
//   <Component {...props} />
// );

// const Heading = styled(HeadingBase)(
//   {
//     margin: 0,
//     lineHeight: "100%",
//   },
//   variant({
//     variants,
//     prop: "level",
//   }),
//   space,
//   color
// );

// export default Heading;
