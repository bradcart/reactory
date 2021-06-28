import * as Tooltip from "@radix-ui/react-tooltip";
import { Slot } from "@radix-ui/react-slot";
import { styled } from "../../../stitches.config";

const StyledContent = styled(Tooltip.Content, {
  borderRadius: "$1",
  padding: "7px 10px 5px 10px",
  fontFamily: "$helvetica",
  fontSize: 12,
  backgroundColor: "$black300",
  color: "$white",
});

const StyledArrow = styled(Tooltip.Arrow, {
  fill: "$black300",
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
