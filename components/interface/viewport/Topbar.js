import React, { useState } from "react";
import { StyledBox } from "../../styled/StyledBox";
import { StyledButton } from "../../styled/StyledButton";
import { StyledHeading } from "../../styled/StyledHeading";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from "copy-to-clipboard";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [stateToLoad, setStateToLoad] = useState("");

  return (
    <StyledBox
      flex
      align="center"
      css={{
        py: "2.5%",
        px: 40,
        height: "5vh",
        backgroundColor: "$black100",
        borderBottom: "1px solid $black200",
        // display: "flex",
        // alignItems: "center",
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
      <StyledHeading size={7} css={{ mx: "$2" }}>
        REACTORY
      </StyledHeading>
      <StyledBox css={{ display: "flex" }}>
        <StyledButton
          variant="topbar"
          onClick={() => {
            const json = query.serialize();
            copy(lz.encodeBase64(lz.compress(json)));
            // toggleAlert(true);
          }}
        >
          Copy current state
        </StyledButton>
        <StyledButton variant="topbar" onClick={() => setDialogOpen(true)}>
          Load
        </StyledButton>
      </StyledBox>
      {dialogOpen ? (
        <StyledBox
          // px={3}
          // py={3}
          // bg="black"
          // flexDirection="column"
          css={{
            display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <h2>Load state</h2>

          <div>
            <input
              placeholder='Paste the contents that was copied from the "Copy Current State" button'
              value={stateToLoad}
              onChange={(e) => setStateToLoad(e.target.value)}
            />
          </div>

          <div>
            <StyledBox css={{ display: "flex" }}>
              <StyledButton onClick={() => setDialogOpen(false)}>
                Cancel
              </StyledButton>
              <StyledButton
                onClick={() => {
                  setDialogOpen(false);
                  const json = lz.decompress(lz.decodeBase64(stateToLoad));
                  actions.deserialize(json);
                }}
              >
                Load
              </StyledButton>
            </StyledBox>
          </div>
        </StyledBox>
      ) : null}
    </StyledBox>
  );
};
