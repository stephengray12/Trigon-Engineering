import { useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

const ContactFormModal = ({ isOpen, onClose }) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert("Message sent!");
        onClose();
      }, (error) => {
        alert("Failed to send: " + error.text);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 min-h-screen bg-black bg-opacity-70 flex items-center justify-center z-50">
        {/* Modal Content */}
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl font-bold">&times;</button>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input type="text" name="user_name" placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input type="email" name="user_email" placeholder="Your Email" className="w-full p-2 border rounded" required />
          <input type="tel" name="user_phone" placeholder="Phone Number" className="w-full p-2 border rounded" required />
          <textarea name="message" placeholder="Purpose / Message" className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </div>
  );
};
ContactFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactFormModal;
