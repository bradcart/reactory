import { styled } from "../../stitches.config";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const SCROLLBAR_SIZE = 8;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: "90%",
  height: "calc(95vh - 60px)",
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  padding: 2,
  background: "rgba(0, 0, 0, 0.3)",
  "&:hover": {
    background: "rgba(0, 0, 0, 0.5)",
  },
  transition: "background 160ms ease-out",
  '&[data-orientation="vertical"]': {
    width: SCROLLBAR_SIZE,
  },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: "black",
  borderRadius: SCROLLBAR_SIZE,
});

// const StyledCorner = styled(ScrollArea.Corner, {
//   background: "rgba(0, 0, 0, 0.3)",
// });

export const ScrollArea = ({ children }) => (
  <StyledScrollArea>
    <StyledViewport>{children}</StyledViewport>

    <StyledScrollbar orientation="vertical">
      <StyledThumb />
    </StyledScrollbar>

    {/* <StyledScrollbar orientation="horizontal">
        <StyledThumb />
      </StyledScrollbar> */}

    {/* <StyledCorner /> */}
  </StyledScrollArea>
);
