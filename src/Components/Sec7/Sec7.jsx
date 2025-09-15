import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Sec7 = () => {
  const [responseExit, setResponseExit] = useState(false)
  const [responseError, setResponseError] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1vl3t5q', 'template_mh382h8', form.current, {
        publicKey: 'dLocXZcPepWYauHeU',
      })
      .then(
        () => {
          e.target.reset();
          setResponseExit('Tu correo fue enviado con éxito! En breve nos pondremos en contacto contigo.')
        },
        () => {
          setResponseError('Tu correo fue enviado con éxito! En breve nos pondremos en contacto contigo.')
        }
      );
  };

  return (
    <div className="Sec7 p-5 d-flex align-items-center justify-content-center" id="contacto">
      <div className="col-8">
      {responseError && <div className="alert alert-danger">{responseError}</div>}
      {responseExit && <div className="alert alert-success">{responseExit}</div>}
      {!responseError && !responseExit && 
          <div
            className="p-4 shadow-sm"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <h2 className="text-center mb-4">Contacto</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="user_name"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  placeholder="nombre@ejemplo.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="message"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí"
                ></textarea>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
    }
      </div>
    </div>
  );
};

export default Sec7;
