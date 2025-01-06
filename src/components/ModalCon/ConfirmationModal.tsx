// src/components/ConfirmationModal.tsx
import { Dialog, DialogOverlay, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";


interface ConfirmationModalProps {

  title: string;
  description: string;
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ConfirmationModal({
  title,
  description,
  isOpen,
  onCancel,
  onConfirm,

}: ConfirmationModalProps) {


  return (
    <Dialog open={isOpen}>
      <DialogOverlay
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.75)",
        }}
      />
      <DialogContent
        style={{
          position: "fixed",
          color: "#2A2A2B",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#FBF8F8",
          padding: "20px",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "400px",
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <DialogTitle>{title}</DialogTitle>
    
        <DialogDescription>{description}</DialogDescription>


        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <button

            onClick={onCancel}
            style={{
              background: "#F4F1f1",
              border: "none",
              borderRadius: "15px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            style={{
              background: "#D72F59",
              border: "none",
              borderRadius: "15px",
              color: "white",
              padding: "8px 16px",
              cursor: "pointer"
            }}
          >
            Confirmar
            
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}
