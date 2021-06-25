import React, { useEffect } from "react";
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
          className="below-topbar"
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            position: "fixed",
            gridTemplateColumns: "230px 1fr 230px",
            gridTemplateRows: "100%",
            // overflow: "hidden",
          }}
        >
          <Toolbox />
          <div
            className="page-container"
            style={{
              display: "flex",
              flex: 1,
              height: "100%",
              flexDirection: "column",
            }}
          >
            <div
              className="craftjs-renderer"
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                paddingBottom: "8px",
                // overflow: "auto",
              }}
              ref={(ref) =>
                connectors.select(connectors.hover(ref, null), null)
              }
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "30px",
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
