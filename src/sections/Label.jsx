import React from 'react';

const Label = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={imageSrc} alt="Certificate Detail" className="modal-image" />
      </div>
      
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          backdrop-filter: blur(5px);
        }
        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }
        .modal-image {
          max-width: 100%;
          max-height: 80vh;
          border: 4px solid white;
          box-shadow: 0 0 30px rgba(220, 20, 60, 0.5);
        }
        .modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 40px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Label;