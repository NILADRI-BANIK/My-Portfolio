import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "niladrib657@gmail.com";

    const copyToClipboard = () => {
        // Copy email to clipboard
        navigator.clipboard.writeText(email);
        setCopied(true);

        // Automatically download the resume
        const link = document.createElement("a");
        link.href = "/assets/resume.pdf"; 
        link.download = "Niladri_Banik_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset copied state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <motion.button
            onClick={copyToClipboard}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 1.05 }}
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[14rem] cursor-pointer overflow-hidden"
        >
            <AnimatePresence>
                {copied ? (
                    <motion.p
                        className="flex items-center justify-center gap-2"
                        key="copied"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        <img src="assets/copy-done.svg" className="w-5" alt="copy done icon" />
                        Email Copied & Resume Downloaded
                    </motion.p>
                ) : (
                    <motion.p
                        className="flex items-center justify-center gap-2"
                        key="copy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <img src="assets/copy.svg" className="w-5" alt="copy icon" />
                        Copy Email & Get Resume
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default CopyEmailButton;

