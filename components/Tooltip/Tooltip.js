import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Slot } from "@radix-ui/react-slot";
import { styled } from "../../stitches.config";

const Content = styled(TooltipPrimitive.Content, {
  borderRadius: "$1",
  py: "$1",
  px: "$2",
  fontFamily: "$ddin",
  fontSize: "$3",
  backgroundColor: "$glass",
  color: "$white",
});

const Arrow = styled(TooltipPrimitive.Arrow, {
  fill: "$glass",
});

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}) {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger as={Slot}>{children}</TooltipPrimitive.Trigger>
      <Content side="top" {...props}>
        {content}
        <Arrow offset={5} width={11} height={5} />
      </Content>
    </TooltipPrimitive.Root>
  );
}
