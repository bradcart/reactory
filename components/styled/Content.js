import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const StyledContent = styled(AlertDialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  backgroundColor: "black",
  borderRadius: 6,
  padding: 20,
});
