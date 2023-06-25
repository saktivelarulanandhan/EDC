import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddFormTab from "../Tab/AddFormTab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 0.5,
  pb: 0.5,
  pl: 0.5,
  pr: 0.5,
};

export default function CreateFormModal(props) {
  const [open, setOpen] = React.useState(props.popupForm);
  const handleClose = () => props.addPopupcloseHandler();

  React.useEffect(() => {
    setOpen(props.popupForm);
  }, [props.popupForm]);

  const closeForm = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{props.loadComp}</Box>
      </Modal>
    </div>
  );
}
