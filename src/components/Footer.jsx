import { useState } from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiCheck, FiX } from 'react-icons/fi';
import emailjs from 'emailjs-com'; // 👈 Importamos EmailJS
import '../styles/Footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // Nuevo estado
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const RECAPTCHA_SITE_KEY = '6LeogmcrAAAAAABduQeyi0MYleI5fSWdzgY89882UÍ';

  const [captchaValue, setCaptchaValue] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!isVerified) {
    alert('Por favor, completa el CAPTCHA.');
    return;
  }

  setIsSending(true);


    emailjs.send(
      'service_10vp02u',     // Reemplaza con tu Service ID
      'template_lrfxvdp',    // Reemplaza con tu Template ID
      formData,
      'wx374IKPM0iJjsHQu'      // Reemplaza con tu Public Key
    )
    .then(() => {
    setFormData({ name: '', email: '', message: '' });
    setCaptchaValue(null);
    setIsVerified(false);

    toast.success("✅ Mensaje enviado correctamente. ¡Gracias!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      onClose: () => setShowContactForm(false)
    });

  })
  .catch((err) => {
    console.error(err);
    toast.error("❌ Hubo un error al enviar el mensaje.", {
      position: "top-right",
      autoClose: 6000,
    });
  })
  .finally(() => {
    setIsSending(false);
  });
};

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        <div className={`${showModal || showContactForm ? 'blur' : ''}`}>
          <div className="footer-grid">

            {/* Columna: Company Info */}
            <div className="footer-column">
              <h3 className="footer-title">PintuRapid</h3>
              <p className="footer-description">
                Todo en pinturas al alcance de tu mano, con rapidez y confianza.
              </p>

              <div className="footer-socials">
                <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://wa.me/34666555444"  target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp size={20} />
                </a>
                <a href="https://www.instagram.com"  target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
              </div>

              {/* Botón Enviar mensaje */}
              <button
                onClick={() => setShowContactForm(true)}
                className="footer-contact-button"
              >
                Enviar mensaje
              </button>
            </div>

            {/* Columna: Contáctanos */}
            <div className="footer-column contact-info">
              <h4 className="footer-subtitle">Contáctanos</h4>
              <ul className="footer-contact">
                <li><span>Carrer Casanova, 36<br />08757, Corbera de Lllobregat</span></li>
                <li><span>(+34) 666 55 54 57</span></li>
                <li><span>support@pinturapid.com</span></li>
              </ul>
            </div>

            {/* Columna: Hecho por... */}
            <div className="footer-column made-by">
              <h4 className="footer-subtitle">Hecho por</h4>
              <p>
                <button onClick={() => setShowModal(true)} className="footer-author-button">
                  Guillermo Martínez
                </button>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>© 2025 PintuRapid. Todos los Derechos Reservados.</p>
          </div>
        </div>
      </div>

      {/* Modal de contacto (Guillermo) */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content animated fadeInUp">
            <h3 className="modal-title">Datos de contacto</h3>
            <div className="modal-body">
              <p><strong>Nombre:</strong> Guillermo Martínez</p>
              <p><strong>Teléfono:</strong> +54 9 11 2233-4455</p>
              <p><strong>Email:</strong> guillermo@example.com</p>
              <a
                href="https://wa.me/5491122334455" 
                target="_blank"
                rel="noopener noreferrer"
                className="modal-whatsapp-button"
              >
                <FaWhatsapp size={20} />
                <span>Chatea por WhatsApp</span>
              </a>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="modal-close-button"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de formulario de contacto */}
      {showContactForm && (
        <div className="modal-overlay">
          <div className="modal-content animated fadeInUp">
            <h3 className="modal-title">Envíanos un mensaje</h3>

            {!messageSent ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Tu número de teléfono"
                  value={formData.from_phone}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Escribe tu mensaje..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{resize:'none'}} // 👈 Deshabilita el redimensionamiento
                ></textarea>
                <div className='recaptcha-container'>
                <ReCAPTCHA
                  sitekey={"6LeogmcrAAAAAABduQeyi0MYleI5fSWdzgY89882"}
                  // 6LeogmcrAAAAAKUxXqwF9DMTiouQjTWVMhtSfvWf
                  onChange={(value) => {
                  setCaptchaValue(value);
                  setIsVerified(!!value);
                  }}
                />
                </div>
 <div className="modal-button-group">
  <button
    type="submit"
    disabled={isSending}
    className="modal-action-button modal-send-button"
  >
    <FiCheck size={18} style={{ marginRight: '0.5rem' }} />
    {isSending ? 'Enviando...' : 'Enviar mensaje'}
  </button>

  <button
    type="button"
    className="modal-action-button modal-cancel-button"
    onClick={() => {
      setShowContactForm(false);
      setFormData({ name: '', email: '', message: '' });
      setCaptchaValue(null);
      setIsVerified(false);
    }}
  >
    <FiX size={18} style={{ marginRight: '0.5rem' }} />
    Cancelar
  </button>
</div>
              </form>
            ) : (
              <div className="success-message">
                <p>Mensaje enviado correctamente. ¡Gracias!</p>
                <button onClick={() => setShowContactForm(false)} className="modal-close-button">
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <ToastContainer />
    </footer>
  );
}