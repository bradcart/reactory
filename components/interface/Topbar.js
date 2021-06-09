import React, { useState } from "react";
import { Box, Flex, Button as RebassButton } from "rebass";
import css from "@styled-system/css";
import StyledBox from "../styled/Box";
import StyledFlex from "../styled/Flex";
import StyledButton from "../styled/Button";
import Heading from "../styled/Heading";
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
    <StyledBox px={3} py={4} bg="black">
      <Flex alignItems="center" justifyContent="space-between">
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
        <Heading level={1} color="white">
          Reactory
        </Heading>
        <div>
          <StyledFlex>
            <StyledButton
              variant="primary"
              mr={3}
              onClick={() => {
                const json = query.serialize();
                copy(lz.encodeBase64(lz.compress(json)));
                // toggleAlert(true);
              }}
            >
              Copy current state
            </StyledButton>
            <StyledButton
              variant="secondary"
              onClick={() => setDialogOpen(true)}
            >
              Load
            </StyledButton>
          </StyledFlex>
          {dialogOpen ? (
            <Flex
              px={3}
              py={3}
              bg="black"
              flexDirection="column"
              sx={{
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
                <Flex>
                  <RebassButton onClick={() => setDialogOpen(false)}>
                    Cancel
                  </RebassButton>
                  <RebassButton
                    onClick={() => {
                      setDialogOpen(false);
                      const json = lz.decompress(lz.decodeBase64(stateToLoad));
                      actions.deserialize(json);
                    }}
                  >
                    Load
                  </RebassButton>
                </Flex>
              </div>
            </Flex>
          ) : null}
        </div>
      </Flex>
    </StyledBox>
  );
};
