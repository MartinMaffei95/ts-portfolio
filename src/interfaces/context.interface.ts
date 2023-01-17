import { OPEN_MODAL } from '../context/actions';

export type ModalCTX = {
  isOpen: boolean;
  type: 'COURSE' | 'PROJECT' | '';
  content: object | undefined;
  toggleModal?: Function;
};

export type Actions =
  | { type: typeof OPEN_MODAL; payload: ModalCTX }
  | { type: 'add'; payload: ModalCTX };
