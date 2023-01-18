import { useNavigate } from 'react-router-dom';
import { ContactForm } from '../components/Contact/ContactForm';

export const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="section-bg border-none">
      <h3 className="title text-center font-extrabold font-mono">
        <span className="colored from-teal-300 to-cyan-700">Contactate</span>{' '}
        conmigo
      </h3>
      {/* <button
        onClick={() => {
          navigate('/');
        }}
        className="primary-button"
      >
        {'< < < '}ATRASSSS
      </button> */}
      <ContactForm />
    </div>
  );
};
