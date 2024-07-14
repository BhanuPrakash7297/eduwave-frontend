import React from "react";
import ReactConfetti from "react-confetti";
import useConfettiStore from "../component/Hooks/use-confeti-store";

export const ConfettiProvider = () => {
  const confetti = useConfettiStore();
    console.log(confetti.isOpen);
  if (!confetti.isOpen) return null;

  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={5000}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose();
      }}
    />
  );
};
