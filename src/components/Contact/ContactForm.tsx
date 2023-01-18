// ## REACT, TYPES, & INTERFACES
import { FormEvent } from 'react';
import { ContactFormType } from '../../interfaces/contactForm.interface';

// ## COMPONENTS
import InputField from '../InputField';
import TextArea from '../TextArea';

// ## TOASTIFY
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ## FORMIK
import * as yup from 'yup';
import { useFormik } from 'formik';
import { FormikProps } from 'formik/dist/types';

// ## eMAILjs
import emailjs, { send } from '@emailjs/browser';

export const ContactForm = () => {
  const initialValues: ContactFormType = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const requiredMessage = 'Este campo es requerido';
  const validationSchema = yup.object({
    name: yup.string().required(requiredMessage),
    email: yup.string().email().required(requiredMessage),
    subject: yup.string().required(requiredMessage),
    message: yup.string().required(requiredMessage),
  });
  const toast_config: ToastOptions<{}> = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(values);
    try {
      emailjs
        .send(
          'service_0oe7msl',
          'template_kemb6qk',
          values,
          'user_94OEa5I6liQW8zLBMtZDj'
        )
        .then(() => {
          toast.success('Tu mensaje se envio correctamente!', toast_config);
        })
        .catch((err) => {
          toast.error(
            'Ocurrio un error. No pudimos enviar tu mensaje',
            toast_config
          );
        });
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        toast.error(
          'Ocurrio un error. No pudimos enviar tu mensaje',
          toast_config
        );
      } else {
        toast.error(
          'Ocurrio un error. No pudimos enviar tu mensaje',
          toast_config
        );
      }
    }
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
  }: FormikProps<any> = useFormik<any>({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <div className="p-2 ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={handleSubmit}>
        <InputField
          value={values.name}
          label={'Nombre'}
          inputName={'name'}
          labelClassname="label-style"
          inputClassname={'input-style'}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorMessage={
            touched.name && errors.name ? (errors.name as string) : null
          }
        />
        <InputField
          value={values.email}
          label={'Email'}
          inputName={'email'}
          type="email"
          labelClassname="label-style"
          inputClassname={'input-style'}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorMessage={
            touched.email && errors.email ? (errors.email as string) : null
          }
        />
        <InputField
          value={values.subject}
          label={'Asunto'}
          inputName={'subject'}
          labelClassname="label-style"
          inputClassname={'input-style'}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorMessage={
            touched.subject && errors.subject
              ? (errors.subject as string)
              : null
          }
        />
        <TextArea
          value={values.message}
          label={'Mensaje'}
          inputName={'message'}
          labelClassname="label-style"
          inputClassname={'input-style'}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorMessage={
            touched.message && errors.message
              ? (errors.message as string)
              : null
          }
        />
        <button
          className="primary-button font-bold text-lg mt-2 mb-2 w-full"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
