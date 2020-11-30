import React, { useState, useCallback } from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { Modal, Button } from "@components";

storiesOf("Modal", module).add("Sign In", () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <CenteredContainer>
      <Button onClick={handleOpen}>Sign In</Button>
      <Modal setOpen={setOpen} open={open}>
        <div
          style={{
            width: "300px",
            height: "300px",
            background: "var(--white)",
          }}
        />
      </Modal>
    </CenteredContainer>
  );
});
