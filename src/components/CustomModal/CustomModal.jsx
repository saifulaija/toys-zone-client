// CustomModal.js
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaLocationArrow } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Modal from "react-modal";

const CustomModal = ({ isOpen, onRequestClose }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleProceed = () => {
    onRequestClose(); // Close the modal
    if (!user) {
      alert("You have to log in first to view details");
      navigate("/login");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          width: "300px",
          margin: "auto",
          textAlign: "center",
          borderRadius: "10px",
        },
      }}
    >
      <h2>View Details</h2>
      <p>Are you sure you want to view the details?</p>
      <button onClick={handleProceed}>Proceed</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default CustomModal;
