import { MdCheck, MdClose, MdInfoOutline, MdOutlineWarningAmber } from "react-icons/md";

export const snackbarStyles: Record<string, { border: string, icon: React.ReactElement }> = {
    info: {
      border: 'border-blue-500',
      icon: <MdInfoOutline color="#3b82f6"/>,
      
    },
    error: {
      border: 'border-red-500',
      icon: <MdClose  color="#ef4444"/>,
    },
    alert: {
      border: 'border-yellow-500',
      icon: <MdOutlineWarningAmber color="#eab308" />,
    },
    success: {
      border: 'border-green-500',
      icon: <MdCheck color="#22c55e" />,
    },
  };
  