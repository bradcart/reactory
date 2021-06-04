import {
  Box,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useNode } from "@craftjs/core";

export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Box ref={(ref) => connect(drag(ref))} bg={background} p={`${padding}px`}>
      {children}
    </Box>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <>
      <div>
        <HexColorPicker
          value={background}
          onChange={(color) => {
            setProp((props) => (props.background = color));
          }}
        />
        <HexColorInput
          value={background}
          placeholder={background}
          onChange={(color) => {
            setProp((props) => (props.background = color));
          }}
          style={{ width: "50%", margin: "10px 0" }}
        />
      </div>
      <FormControl w="100%" as="fieldset">
        <FormLabel as="legend">Padding</FormLabel>
        <Slider
          aria-label="padding-amount-slider"
          defaultValue={padding}
          onChange={(value) => {
            setProp((props) => (props.padding = value));
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
    </>
  );
};

// We export this because we'll be using this in the Card component as well
export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
