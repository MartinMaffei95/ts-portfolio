import { useReducer } from 'react';
import { ModalCTX } from '../../interfaces/context.interface';
import { OPEN_MODAL } from '../actions';
import ModalContext from './ModalContext';
import ModalReducer from './ModalReducer';
type ModalStateProps = {
  children: JSX.Element | JSX.Element[];
};

const ModalState = ({ children }: ModalStateProps) => {
  const initialState: ModalCTX = {
    isOpen: false,
    type: '',
    content: undefined,
  };

  const [state, dispatch] = useReducer(ModalReducer, initialState);
  const toggleModal = ({ isOpen, type, content }: ModalCTX) => {
    const modalPayload = {
      isOpen,
      type,
      content,
    };
    dispatch({
      type: OPEN_MODAL,
      payload: modalPayload,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen: state.isOpen,
        type: state.type,
        content: state.content,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
