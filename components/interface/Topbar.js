import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Button as ChakraButton,
  FormControl,
  FormLabel,
  Switch,
  HStack,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from "copy-to-clipboard";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [stateToLoad, setStateToLoad] = useState(null);

  const toast = useToast();
  const cancelRef = useRef();

  return (
    <Box px={3} py={1} mt={3} mb={1} bg="#cbe8e7" borderRadius={6}>
      <Flex align="center" justify="space-between">
        <FormControl display="flex" alignItems="center">
          <Switch
            id="editor-enabled"
            isChecked={enabled}
            onChange={() =>
              actions.setOptions((options) => (options.enabled = !enabled))
            }
          />
          <FormLabel htmlFor="editor-enabled" mb={0} ml={1}>
            Enabled
          </FormLabel>
        </FormControl>
        <Box>
          <HStack>
            <ChakraButton
              size="sm"
              onClick={() => {
                const json = query.serialize();
                copy(lz.encodeBase64(lz.compress(json)));
                toast({
                  title: "State copied to clipboard.",
                  status: "info",
                  duration: 2000,
                });
              }}
            >
              Copy current state
            </ChakraButton>
            <ChakraButton size="sm" onClick={() => setDialogOpen(true)}>
              Load
            </ChakraButton>
          </HStack>
          <AlertDialog
            isOpen={dialogOpen}
            leastDestructiveRef={cancelRef}
            onClose={() => setDialogOpen(false)}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Load state
                </AlertDialogHeader>

                <AlertDialogBody>
                  <Input
                    placeholder='Paste the contents that was copied from the "Copy Current State" button'
                    value={stateToLoad}
                    onChange={(e) => setStateToLoad(e.target.value)}
                  />
                </AlertDialogBody>

                <AlertDialogFooter>
                  <HStack>
                    <ChakraButton
                      ref={cancelRef}
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancel
                    </ChakraButton>
                    <ChakraButton
                      onClick={() => {
                        setDialogOpen(false);
                        const json = lz.decompress(
                          lz.decodeBase64(stateToLoad)
                        );
                        actions.deserialize(json);
                        toast({
                          title: "State loaded.",
                          status: "success",
                          duration: 2000,
                        });
                      }}
                    >
                      Load
                    </ChakraButton>
                  </HStack>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Box>
      </Flex>
    </Box>
  );
};
