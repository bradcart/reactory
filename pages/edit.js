import { Editor, Frame, Element } from "@craftjs/core";
// import { Layers } from "@craftjs/layers";
import {
  Box,
  Button,
  Card,
  CardText,
  CardButtons,
  Image,
  Page,
  Section,
  Text,
} from "../components/user";
import { Viewport } from "../components/interface/Viewport";
import { RenderNode } from "../components/interface/misc/RenderNode";
// import fetchProjectData from "../components/utils/fetchProjectData";

// const texture = "/texture.png";

export default function Edit() {
  /* const [json, setJson] = useState(null);
  const data = FetchProjectData();
  useEffect(() => {
    setJson(data);
  }, [data]); */

  return (
    <Editor
      resolver={{
        Page,
        Card,
        CardText,
        CardButtons,
        Button,
        Text,
        Box,
        Image,
        Section,
      }}
      onRender={RenderNode}
    >
      {/* {json ? ( */}
      <Viewport>
        <Frame>
          <Element is={Page} canvas>
            <Element
              is={Section}
              id="canvas__intro-section"
              canvas
              justify="spaceBetween"
              padding={10}
            >
              <Element
                is={Text}
                id="canvas__intro-section-title"
                text="Reactory is a single-page website builder with a drag and drop interface."
                activeFontFamily="Poppins"
                fontSize={50}
                fontWeight={700}
                lineHeight={60}
                width={62}
              />
              <Element
                is={Text}
                id="canvas__intro-section-paragraph"
                text={`Built in Next.js.
                  <br />
                Styled with Stitches and Radix-UI.`}
                activeFontFamily="Poppins"
                fontSize={18}
                fontWeight={400}
                lineHeight={28}
                width={32}
              />
            </Element>
            <Element
              is={Section}
              id="canvas__card-section"
              canvas
              justify="left"
              padding={0}
            >
              <Element is={Card} id="canvas__card" canvas />
            </Element>
          </Element>
        </Frame>
      </Viewport>
      {/* ) : null} */}
      {/* <Layers /> */}
    </Editor>
  );
}
