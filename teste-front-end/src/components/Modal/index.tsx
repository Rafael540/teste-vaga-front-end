
import './Modal.module.scss'; // Arquivo de estilos específico para o modal

interface ModalProps {
  isOpen: boolean;
  
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Modal = ({ isOpen }: ModalProps) => {
  if (!isOpen) {
    return(
        <div className='.background'>
            
        </div>  
  );
    
  }else{
    return <></>;
  }

};