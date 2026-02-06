import React from 'react';

const Label = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img 
          src={imageSrc} 
          alt="Certificate Detail" 
          className="modal-image" 
        />
      </div>
      
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99999; /* Pastikan di atas segalanya */
          backdrop-filter: blur(10px);
        }
        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          animation: zoomIn 0.3s ease-out;
        }
        .modal-image {
          max-width: 100%;
          max-height: 85vh;
          border: 2px solid #dc143c;
          box-shadow: 0 0 40px rgba(220, 20, 60, 0.4);
          border-radius: 8px;
        }
        .modal-close {
          position: absolute;
          top: -60px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 50px;
          cursor: pointer;
        }
        @keyframes zoomIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Label;