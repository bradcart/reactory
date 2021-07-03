import React, { useState } from "react";
import Link from "next/link";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from "copy-to-clipboard";
import { styled } from "../../../stitches.config";
import { StyledBox } from "../../styled/StyledBox";
import { StyledHeading } from "../../styled/StyledHeading";
import { Alert, AlertDialog } from "../../styled/settings";

export const TopbarButton = styled("button", {
  // Reset
  // all: "unset",
  appearance: "none",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  py: "$2",
  px: "$3",
  mx: "$2",
  backgroundColor: "$black100",
  color: "$white",
  fontFamily: "$grifter",
  fontSize: "$4",
  lineHeight: "1",
  textTransform: "uppercase",
  borderWidth: "2px",
  borderColor: "$gray700",
  borderStyle: "outset",
  borderRadius: "$1",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$white",
    color: "$black100",
  },
});

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [copyAlert, toggleCopyAlert] = useState(false);
  const [loadAlert, toggleLoadAlert] = useState(false);

  const handleActionClick = (stateToLoad) => {
    if (stateToLoad !== "") {
      setDialogOpen(false);
      const json = lz.decompress(lz.decodeBase64(stateToLoad));
      actions.deserialize(json);
      toggleLoadAlert(true);
    } else {
      setDialogOpen(false);
    }
  };

  return (
    <StyledBox
      flex
      align="center"
      css={{
        py: "$7",
        px: "40px",
        height: "5vh",
        backgroundColor: "$black100",
        borderBottom: "1px solid $black200",
        justifyContent: "space-between",
      }}
    >
      {/* <FormControl display="flex" alignItems="center">
          <Switch
            id="editor-enabled"
            colorScheme="brand"
            isChecked={enabled}
            onChange={() =>
              actions.setOptions((options) => (options.enabled = !enabled))
            }
          />
          <FormLabel htmlFor="editor-enabled" mb={0} ml={1} color="white">
            Enabled
          </FormLabel>
        </FormControl> */}
      <Link href="/">
        <StyledHeading
          as="a"
          css={{
            mx: "$2",
            color: "$white",
            fontFamily: "$hki",
            fontSize: "$8",
            transform: "rotate(0.725deg)",
            userSelect: "none",
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
            cursor: "pointer",
            letterSpacing: "0em",
            transition: "$default",
            "&:hover": {
              letterSpacing: "0.1em",
            },
          }}
        >
          REACTORY
        </StyledHeading>
      </Link>
      <StyledBox css={{ display: "flex" }}>
        <TopbarButton
          onClick={() => {
            const json = query.serialize();
            copy(lz.encodeBase64(lz.compress(json)));
            toggleCopyAlert(true);
          }}
        >
          Copy current state
        </TopbarButton>
        <AlertDialog
          open={dialogOpen}
          onTriggerClick={() => setDialogOpen(true)}
          onCancelClick={() => setDialogOpen(false)}
          onActionClick={handleActionClick}
        >
          Load
        </AlertDialog>
      </StyledBox>
      <Alert
        mount={copyAlert}
        toggleMount={toggleCopyAlert}
        content="State copied to clipboard!"
      />
      <Alert
        mount={loadAlert}
        toggleMount={toggleLoadAlert}
        content="State loaded!"
      />
    </StyledBox>
  );
};
