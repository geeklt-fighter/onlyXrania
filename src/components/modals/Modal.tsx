"use client"
import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative max-w-2xl w-full mx-4 animate-modalFadeIn">
        <div className="relative bg-black/90 border border-white/10 rounded-2xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal; 