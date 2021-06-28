import { styled } from "../../../stitches.config";
// import { keyframes } from "@stitches/react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const Root = styled(Accordion.Root, {
  width: "100%",
  justifySelf: "stretch",
  alignSelf: "stretch",
  //   border: "1px solid $black300",
  //   borderRadius: "$3",
  overflow: "hidden",
});

export const Item = styled(Accordion.Item, {
  borderBottom: "1px solid $black300",
  "&:last-of-type": {
    borderBottom: "none",
  },
});

export const Header = styled(Accordion.Header, {
  margin: 0,
  display: "flex",
  alignItems: "center",
  fontFamily: "$compagnon",
  fontSize: "16px",
});

const StyledTrigger = styled(Accordion.Trigger, {
  backgroundColor: "transparent",
  color: "$white",
  fontSize: "inherit",
  textTransform: "uppercase",
  border: "none",
  px: "$2",
  pt: "$1",
  pb: "$2",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  //   "[data-state=open] &": {
  //     backgroundColor: "$gray700",
  //     color: "$black100",
  //   },
});

const AccordionChevron = styled(ChevronDownIcon, {
  transition: "transform 300ms",

  "[data-state=open] &": {
    transform: "rotate(180deg)",
  },
});

export const Trigger = ({ children }) => (
  <StyledTrigger>
    {children}
    <AccordionChevron aria-hidden />
  </StyledTrigger>
);

// const slideDown = keyframes({
//   from: { height: 0 },
//   to: { height: "var(--radix-accordion-content-height)" },
// });

// const slideUp = keyframes({
//   from: { height: "var(--radix-accordion-content-height)" },
//   to: { height: 0 },
// });

export const Content = styled(Accordion.Content, {
  padding: "$2",
  //   '&[data-state="open"]': {
  //     animation: `${slideDown} 250ms ease`,
  //   },
  //   '&[data-state="closed"]': {
  //     animation: `${slideUp} 250ms ease`,
  //   },
});

// export default () => (
//     <StyledAccordion type="single" defaultValue="item-1">
//       <StyledItem value="item-1">
//         <StyledHeader>
//           <StyledTrigger>Item 1</StyledTrigger>
//         </StyledHeader>
//         <StyledContent>
//           Here goes the content for the accordion item 1.
//         </StyledContent>
//       </StyledItem>

//       <StyledItem value="item-2">
//         <StyledHeader>
//           <StyledTrigger>Item 2</StyledTrigger>
//         </StyledHeader>
//         <StyledContent>
//           Here goes the content for the accordion item 2.
//         </StyledContent>
//       </StyledItem>

//       <StyledItem value="item-3">
//         <StyledHeader>
//           <StyledTrigger>Item 3</StyledTrigger>
//         </StyledHeader>
//         <StyledContent>
//           Here goes the content for the accordion item 3.
//         </StyledContent>
//       </StyledItem>
//     </StyledAccordion>
//   );
