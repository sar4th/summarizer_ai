import { Alert } from '@mui/material';
import React, { useState } from 'react';

const ErrorPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Alert onClose={handleClose} severity="error" sx={{ mb: 2 }}>
          Failed to summarize!
        </Alert>
      )}
    </>
  );
};

export default ErrorPage;
