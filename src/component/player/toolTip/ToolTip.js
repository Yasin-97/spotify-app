import React, { useState, useEffect, useRef } from "react";
import { Overlay } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

const ToolTip = ({ child, placement = "right" }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    if (show) {
      const timerId = setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [show]);
  return (
    <>
      <div
        ref={target}
        onClick={() => {
          setShow(!show);
        }}
      >
        {child}
      </div>
      <Overlay target={target.current} show={show} placement={placement}>
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Not provided yet!
          </Tooltip>
        )}
      </Overlay>
    </>
  );
};

export default ToolTip;
