import { Actions, ModalCTX } from '../../interfaces/context.interface';
import { OPEN_MODAL } from '../actions';

export default (state: ModalCTX, action: Actions): ModalCTX => {
  const { payload, type } = action;

  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: payload.isOpen,
        type: payload.type,
        content: payload.content,
      };
    default:
      return state;
  }
};
