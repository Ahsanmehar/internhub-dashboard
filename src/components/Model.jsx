import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300">
      <div
        className="absolute inset-0 backdrop-blur-xs opacity-90 z-10"
        onClick={onClose}
      ></div>

      <div className="relative z-50 w-full max-w-lg max-h-[90vh] flex flex-col">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <div className="flex justify-between items-center border-b border-neutral/20 p-6 sticky top-0 bg-white z-10">
            <h3 className="text-lg font-semibold text-black">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
