import React, { useState } from "react";

// import "./App.css";
import Modal from "../components/datamodal";
import Demo from "../components/demo";
// import Modal from "../components/datamodal";
import { Header } from "../module/index";
import Button from '@mui/material/Button';


function ModalY() {
  // const [modalOpen, setModalOpen] = useState(false);

  return (
   <div>
      <Header/>
      <Modal>
      <Demo/>
     </Modal>
    
    
    </div>
  );
}

export default ModalY;