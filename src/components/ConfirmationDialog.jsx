import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const ConfirmationDialog = ({ open, setOpen, handleConfirm, title, content }) => {
  return (
    <Dialog
      onClose={() => setOpen(false)}
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth='xs'
      aria-labelledby='confirmation-dialog-title'
      open={open}
    >
      <DialogTitle id='confirmation-dialog-title'>{title}</DialogTitle>
      <DialogContent dividers>
        {content}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setOpen(false)} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleConfirm} color='primary'>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;


