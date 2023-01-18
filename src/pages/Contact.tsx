import { useNavigate } from 'react-router-dom';
import { ContactForm } from '../components/Contact/ContactForm';

export const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="section-bg border-none">
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
