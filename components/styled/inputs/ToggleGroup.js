import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Button } from "../StyledButton";

export const StyledToggleGroup = ({
  currentValue,
  onValueChange,
  valueOne,
  labelOne,
  valueTwo,
  labelTwo,
  valueThree,
  labelThree,
}) => {
  return (
    <ToggleGroup.Root
      type="single"
      value={currentValue}
      onValueChange={onValueChange}
    >
      <ToggleGroup.Item
        value={valueOne}
        disabled={currentValue === valueOne ? true : false}
        as={Button}
        css={{
          "&[data-state=on]": { backgroundColor: "$white", color: "$black" },
        }}
      >
        {labelOne}
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value={valueTwo}
        disabled={currentValue === valueTwo ? true : false}
        as={Button}
        css={{
          "&[data-state=on]": { backgroundColor: "$white", color: "$black" },
        }}
      >
        {labelTwo}
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value={valueThree}
        disabled={currentValue === valueThree ? true : false}
        as={Button}
        css={{
          "&[data-state=on]": { backgroundColor: "$white", color: "$black" },
        }}
      >
        {labelThree}
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
