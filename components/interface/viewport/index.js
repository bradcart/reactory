import React from "react";
import { useEditor } from "@craftjs/core";
import { Toolbox } from "./Toolbox";
import { Topbar } from "./Topbar";
import { SettingsPanel } from "./SettingsPanel";
import { StyledBox } from "../../styled/StyledBox";

export const Viewport = ({ children }) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div className="viewport">
      <StyledBox
        css={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          backgroundColor: "$black400",
        }}
      >
        <Topbar />
        <div
          className="under-topbar"
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "230px 1fr 230px",
            gridTemplateRows: "100%",
            position: "fixed",
            // overflow: "hidden",
          }}
        >
          <Toolbox />
          <div
            className="page-container"
            style={{
              height: "100%",
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <div
              className="craftjs-renderer"
              style={{
                width: "100%",
                height: "100%",
                paddingBottom: "8px",
                flex: 1,
                overflow: "auto",
              }}
              ref={(ref) =>
                connectors.select(connectors.hover(ref, null), null)
              }
            >
              <div
                style={{
                  position: "relative",
                  paddingTop: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {children}
              </div>
            </div>
          </div>
          <SettingsPanel />
        </div>
      </StyledBox>
    </div>
  );
};
