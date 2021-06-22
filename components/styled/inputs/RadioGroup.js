import { styled } from "../../../stitches.config";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const StyledRadio = styled(RadioGroup.Item, {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  borderRadius: "50%",
  boxShadow: "inset 0 0 0 1px gainsboro",
  width: 15,
  height: 15,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",

  "& ~ &": { marginLeft: 5 },

  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue",
  },
});

export const StyledIndicator = styled(RadioGroup.Indicator, {
  width: 7,
  height: 7,
  borderRadius: "50%",
  backgroundColor: "dodgerblue",
});

// const StyledRadioGroup = ({
//   onValueChange,
//   initialValue,
//   value1,
//   value2,
//   value3,
// }) => (
//   <RadioGroup.Root onValueChange={onValueChange} value={initialValue}>
//     <StyledRadio value={value1}>
//       <StyledIndicator />
//     </StyledRadio>
//     <StyledRadio value={value2}>
//       <StyledIndicator />
//     </StyledRadio>
//     <StyledRadio value={value3}>
//       <StyledIndicator />
//     </StyledRadio>
//   </RadioGroup.Root>
// );

// export default StyledRadioGroup;
