import React from "react";
import { StyledBox } from "../base/Box/StyledBox";
import { useEditor } from "@craftjs/core";
import { Topbar } from "./panels/Topbar";
import { Toolbox } from "./panels/Toolbox";
import { SettingsPanel } from "./panels/SettingsPanel";
import { ViewportWarning } from "./misc/ViewportWarning";

export const Viewport = ({ children }) => {
  const { enabled, connectors } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div className="viewport">
      <ViewportWarning />
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
          {enabled ? <Toolbox /> : null}
          <div
            className="page-container"
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              gridColumn: enabled ? "2 / 3" : "1 / 4",
            }}
          >
            <div
              className="craftjs-renderer"
              style={{
                position: "relative",
                height: "100%",
                // width: enabled ? "90%" : "98%",
                // width: "clamp(740px, 90%, 2100px)",
                width: enabled ? "max(90%, 740px)" : "max(98%, 740px)",
                paddingTop: "30px",
                paddingBottom: "8px",
                margin: "0 auto",
                transition: "width 0.3s ease",
                // overflow: "auto",
              }}
              ref={(ref) =>
                connectors.select(connectors.hover(ref, null), null)
              }
            >
              {children}
            </div>
          </div>
          {enabled ? <SettingsPanel /> : null}
        </div>
      </StyledBox>
    </div>
  );
};
