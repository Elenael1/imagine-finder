import { Component, useEffect } from "react"
import { createPortal } from "react-dom";
import s from './modal.module.css'
const modalRoot = document.querySelector("#modal-root");
const overlay = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(199, 41, 41, 0.8)",
    zIndex: "1200",
};

// modal = {
//     background-color: crimson,
//     max-width: calc(100vw - 48px),
//     max-height: calc(100vh - 24px),
// }

const Modal = ({changeModal, largeImage}) => {

    const closeModal = (e) => {
        if(e.code ==="Escape" ){
            changeModal()
        };
    };

        useEffect(()=> {
            
        },[])
        
        useEffect(() => {
            window.addEventListener("keydown", closeModal)
            return () => {
                window.removeEventListener("keydown", closeModal)
            };
        }, [closeModal]);
       

  return createPortal(
    <>
            <div className={s.overlay} onClick={changeModal}>
                <div className={s.modal}>
                        <img src={largeImage} alt="" />
                </div>  
            </div>
        </> ,modalRoot
  )
}

export default Modal



// if (this.state.openModal === true) {
    
// }
