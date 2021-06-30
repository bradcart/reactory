import * as Tooltip from "@radix-ui/react-tooltip";
import { Slot } from "@radix-ui/react-slot";
import { styled } from "../../../stitches.config";

const StyledContent = styled(Tooltip.Content, {
  borderRadius: "$1",
  py: "$1",
  px: "$2",
  fontFamily: "$ddin",
  fontSize: "$3",
  backgroundColor: "$glass",
  color: "$white",
});

const StyledArrow = styled(Tooltip.Arrow, {
  fill: "$glass",
});

export function StyledTooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}) {
  return (
    <Tooltip.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <Tooltip.Trigger as={Slot}>{children}</Tooltip.Trigger>
      <StyledContent side="top" {...props}>
        {content}
        <StyledArrow offset={5} width={11} height={5} />
      </StyledContent>
    </Tooltip.Root>
  );
}
