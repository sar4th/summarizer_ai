"use client";
import { setError } from "@/redux/slice";
import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ErrorPage = ({ message }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    dispatch(setError());
  };
  useEffect(() => {
    setIsOpen(true);
  }, [message]);

  return (
    <>
      {isOpen && (
        <Alert onClose={handleClose} severity="error" sx={{ mb: 2 }}>
          {message}
        </Alert>
      )}
    </>
  );
};

export default ErrorPage;
