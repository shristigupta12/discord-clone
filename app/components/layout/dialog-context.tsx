import { createContext } from "react";

interface DialogContextType {
    dialogState: string;
    handleDialogState: (newState: string) => void;
  }
  
  // Provide a default value matching the interface
  const DialogContext = createContext<DialogContextType>({
    dialogState: "",
    handleDialogState: () => {},
  });
  

export default DialogContext;