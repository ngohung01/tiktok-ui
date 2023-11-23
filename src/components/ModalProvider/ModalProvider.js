import { createContext, useState } from "react";

export const ModalContext = createContext(null)

function ModalProvider({children}) {
    const [isOpen,setIsOpen] = useState(false);
    const [typeForm,setTypeForm] = useState('login-list');

    const body = document.querySelector('body');
    
    const handleOpenModal = () => {
        setIsOpen(true)
        body.classList.add('hidden');
    }
    const handleCloseModal = () => {
        setTypeForm('login-list')
        setIsOpen(false)
        body.classList.remove('hidden');
    }

    const value ={
        isOpen,
        typeForm,
        setTypeForm,
        handleOpenModal,
        handleCloseModal,
    }
    return ( 
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
}

export default ModalProvider;