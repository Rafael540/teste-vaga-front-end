// TestModal.tsx

import mobile from "../../assets/mobile.jpg";

interface ModalProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TestModal = ({ isOpen, setOpen }: ModalProps) => {

    if (!isOpen) {
        return (
            <div style={{
                position: 'fixed',
                width: '1440px',
                height: ' 837px',
                top: '0',
                left: '0',
                background: 'black',
                opacity: "60%",
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '2rem'
            }}>
                <div style={{
                    position: 'fixed',
                    width: "769px",
                    height: '299.257px',
                    opacity: '200%',
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '4px',
                    borderRadius: '8px'
                }}>
                    <div style={{
                        float: "right",
                        alignItems: "center,",
                        padding: "50px"
                    }}>
                        <h2>LOREM IPSUM DOLOR</h2>
                        <p>descrição</p>

                    </div>
                    <div style={{
                        float: "left",
                        alignContent: "center",
                        justifyContent: "center",
                        paddingLeft: "40px",
                        paddingTop: "40px",
                        paddingBottom: "56px"
                    }}>
                        <img src={mobile}></img>
                    </div>
                </div>
            </div >
        );
    };
}
