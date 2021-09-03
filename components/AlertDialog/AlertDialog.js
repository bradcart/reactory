import { useState } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { styled } from "../../stitches.config";
import { TopbarButton } from "../../layouts/Topbar";
import { TextInput } from "../TextInput";

const AlertDialogOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: "rgba(0, 0, 0, .15)",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(2px)",
});

const AlertDialogContent = styled(AlertDialogPrimitive.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "200px",
  backgroundColor: "$black100",
  borderRadius: 6,
  padding: 20,
});

const AlertDialogTitle = styled(AlertDialogPrimitive.Title, {
  fontFamily: "$grifter",
  color: "$white",
});

const AlertDialogInput = styled(TextInput, {
  "&::placeholder": {
    color: "$gray600",
    fontSize: "14px",
  },
});

// export const AlertDialogContent = React.forwardRef(
//   ({ children, ...props }, forwardedRef) => (
//     <StyledContent {...props} ref={forwardedRef}>
//       {children}
//     </StyledContent>
//   )
// );

// export const AlertDialogContent = ({children}) => (
//     <StyledContent>
//         {children}
//     </StyledContent>
// )

export const AlertDialog = ({
  children,
  open,
  onTriggerClick,
  onCancelClick,
  onActionClick,
}) => {
  const [stateToLoad, setStateToLoad] = useState("");
  return (
    <AlertDialogPrimitive.Root open={open}>
      <AlertDialogPrimitive.Trigger as={TopbarButton} onClick={onTriggerClick}>
        {children}
      </AlertDialogPrimitive.Trigger>
      <AlertDialogOverlay />
      <AlertDialogContent
        onPointerDownOutside={onCancelClick}
        onEscapeKeyDown={onCancelClick}
      >
        <AlertDialogTitle>Load state</AlertDialogTitle>
        <AlertDialogPrimitive.Description>
          <AlertDialogInput
            placeholder='Paste the string that was copied from the "Copy Current State" button'
            onChange={(e) => setStateToLoad(e.target.value)}
          />
        </AlertDialogPrimitive.Description>
        <AlertDialogPrimitive.Cancel
          as={TopbarButton}
          onClick={onCancelClick}
          css={{ mt: "$1" }}
        >
          Cancel
        </AlertDialogPrimitive.Cancel>
        <AlertDialogPrimitive.Action
          as={TopbarButton}
          onClick={() => onActionClick(stateToLoad)}
        >
          Load
        </AlertDialogPrimitive.Action>
      </AlertDialogContent>
    </AlertDialogPrimitive.Root>
  );
};

// export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
// export const AlertDialogTitle = AlertDialogPrimitive.Title;
// export const AlertDialogDescription = AlertDialogPrimitive.Description;
// export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
// export const AlertDialogAction = AlertDialogPrimitive.Action;
