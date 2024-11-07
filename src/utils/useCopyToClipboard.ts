import { useState } from "react";

const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);
    const copyText = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (error) {
            console.error("Failed to copy text:", error);
            setIsCopied(false);
        }
    };
    return { isCopied, copyText };
};
export default useCopyToClipboard;