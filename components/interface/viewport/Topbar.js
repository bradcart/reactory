import React, { useState } from "react";
import { Box, Flex, Button as RebassButton } from "rebass";
import css from "@styled-system/css";
import StyledBox from "../../styled/Box";
import StyledFlex from "../../styled/Flex";
import StyledButton from "../../styled/Button";
import Heading from "../../styled/Heading";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from "copy-to-clipboard";

// import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // const [dialogOpen, setDialogOpen] = useState(false);
  const [stateToLoad, setStateToLoad] = useState("");

  return (
    <StyledFlex
      px={4}
      height="7vh"
      width="100%"
      // position="absolute"
      // top={0}
      // left={0}
      // zIndex={9999}
      alignItems="center"
      justifyContent="space-between"
      bg="black"
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
      <Heading level={1} color="white">
        Reactory
      </Heading>
      <AlertDialog.Root>
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
          <AlertDialog.Trigger className="alert-dialog-trigger">
            Load
          </AlertDialog.Trigger>
        </StyledFlex>
        <AlertDialog.Overlay className="alert-dialog-overlay" />
        <AlertDialog.Content className="alert-dialog-content">
          <AlertDialog.Title>Load state</AlertDialog.Title>
          <AlertDialog.Description>
            <input
              className="alert-dialog-input"
              placeholder='Paste the contents that were copied from the "Copy Current State" button.'
              value={stateToLoad}
              onChange={(e) => setStateToLoad(e.target.value)}
            />
          </AlertDialog.Description>
          <StyledFlex mt={3} width="25%" justifyContent="space-between">
            <AlertDialog.Cancel className="alert-dialog-cancel">
              Cancel
            </AlertDialog.Cancel>
            <AlertDialog.Action
              className="alert-dialog-action"
              onClick={() => {
                const json = lz.decompress(lz.decodeBase64(stateToLoad));
                actions.deserialize(json);
                setStateToLoad("");
              }}
            >
              Load
            </AlertDialog.Action>
          </StyledFlex>
        </AlertDialog.Content>
        {/* {dialogOpen ? (
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
        ) : null} */}
      </AlertDialog.Root>
    </StyledFlex>
  );
};
