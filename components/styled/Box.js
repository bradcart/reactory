import styled from "styled-components";
import {
  compose,
  color,
  position,
  layout,
  space,
  background,
} from "styled-system";

const Box = styled("div")(compose(color, position, layout, space, background));

export default Box;
