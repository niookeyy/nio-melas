import React, { useEffect } from "react";
import { X } from "lucide-react";

const Label = ({ isOpen, imageSrc, imageAlt = "Certificate Preview", onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
    >
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close certificate preview"
        >
          <X size={22} />
        </button>

        <img src={imageSrc} alt={imageAlt} className="modal-image" />
      </div>
    </div>
  );
};

export default Label;