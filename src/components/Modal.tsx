import { XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose }: Props) => {
  if(!open) return null

  return (<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded shadow-lg w-1/3">
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-2xl">Erro!</h3>

        <XMarkIcon onClick={onClose} className="h-5 w-5 mr-2 cursor-pointer" />
      </div>

      <p className="text-black p-4 text-center">
        Por favor, selecione o ponto de partida e destino!
      </p>
    </div>
  </div>)
}

export default Modal;