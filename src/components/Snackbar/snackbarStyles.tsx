import { MdCheck, MdClose, MdInfoOutline, MdOutlineWarningAmber } from "react-icons/md";

export const snackbarStyles: Record<string, { border: string, icon: React.ReactElement }> = {
    info: {
      border: 'border-l-blue-500',
      icon: <MdInfoOutline color="#3b82f6"/>,
      
    },
    error: {
      border: 'border-l-red-500',
      icon: <MdClose  color="#ef4444"/>,
    },
    alert: {
      border: 'border-l-yellow-500',
      icon: <MdOutlineWarningAmber color="#eab308" />,
    },
    success: {
      border: 'border-l-green-500',
      icon: <MdCheck color="#22c55e" />,
    },
  };
  