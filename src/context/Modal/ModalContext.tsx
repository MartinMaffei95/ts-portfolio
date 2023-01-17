import { createContext } from 'react';
import { ModalCTX } from '../../interfaces/context.interface';

const ModalContext = createContext<ModalCTX>({} as ModalCTX);

export default ModalContext;
