import { useNode, useEditor } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { styled } from "../../stitches.config";
import { DragIcon, ArrowUpIcon, DeleteIcon } from "../icons/RenderNodeIcons";

const IndicatorDiv = styled("div", {
  height: "30px",
  mt: "-29px",
  px: "$1",
  py: "$1",
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "$ddin",
  fontSize: "10px",
  lineHeight: "12px",
  color: "$white",
  backgroundColor: "$black100",
  // boxShadow: "0px 4px 12px 5px rgba(3, 3, 3, 0.25)",
  // backdropFilter: "blur(4px)",
  "& svg": {
    fill: "$white",
    width: "15px",
    height: "15px",
  },
  variants: {
    variant: {
      dropzone: {
        backgroundColor: "$viridian",
      },
    },
  },
});

const Btn = styled("a", {
  p: "1px",
  mx: "3px",
  flexGrow: "1",
  opacity: 0.9,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // "> div": {
  // position: "relative",
  // top: "-50%",
  // left: "-50%",
  // },
});

export const RenderNode = ({ render }) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((state) => ({
    isActive: state.nodes[id].events.selected,
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    custom,
    parent,
    parentOfParent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parentOfParent: query.node(node.id).ancestors()[1],
    parent: node.data.parent,
    props: node.data.props,
    custom: node.data.custom,
  }));

  const currentRef = useRef(<HTMLDivElement />);

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) {
        // console.log(dom);
        custom && custom.droppableOnly
          ? dom.classList.add("dropzone-selected")
          : dom.classList.add("component-selected");
      } else dom.classList.remove("component-selected", "dropzone-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document
      .querySelector(".craftjs-renderer")
      .addEventListener("scroll", scroll);

    return () => {
      document
        .querySelector(".craftjs-renderer")
        .removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <>
      {(isHover || isActive) && name !== "Page"
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
              variant={custom && custom.droppableOnly ? "dropzone" : ""}
            >
              <h2 style={{ marginRight: "5px" }}>{name}</h2>
              {moveable ? (
                <Btn
                  style={{
                    cursor: "move",
                  }}
                  ref={drag}
                >
                  <DragIcon />
                </Btn>
              ) : null}
              {id !== ROOT_NODE && !custom.droppableOnly && (
                <Btn
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    // console.log(parent);
                    // console.log(parentOfParent);
                    custom.skipParentNode
                      ? actions.selectNode(parentOfParent)
                      : actions.selectNode(parent);
                  }}
                >
                  <ArrowUpIcon />
                </Btn>
              )}
              {deletable ? (
                <Btn
                  style={{ cursor: "pointer" }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <DeleteIcon />
                </Btn>
              ) : null}
            </IndicatorDiv>,
            document.querySelector(".page-container")
          )
        : null}
      {render}
    </>
  );
};
