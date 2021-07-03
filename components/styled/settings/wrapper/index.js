import { Wrapper } from "./Wrapper";
import { Badge } from "./Badge";

export const SettingsWrapper = ({
  selected,
  nodeName,
  setCustom,
  children,
}) => (
  <Wrapper>
    <Badge selected={selected} nodeName={nodeName} setCustom={setCustom} />
    {children}
  </Wrapper>
);
