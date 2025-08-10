import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactFormModal = ({ isOpen, onClose }) => {
  const modalRootRef = useRef(null);
  const formRef = useRef(null);
  const firstFieldRef = useRef(null);
  const closeBtnRef = useRef(null);
  const previouslyFocusedEl = useRef(null);

  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Close on ESC, trap focus, lock scroll, restore focus on close
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedEl.current = document.activeElement;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const focusable = modalRootRef.current?.querySelectorAll(
          [
            'a[href]:not([tabindex="-1"])',
            'button:not([disabled]):not([tabindex="-1"])',
            'textarea:not([disabled]):not([tabindex="-1"])',
            'input:not([disabled]):not([tabindex="-1"])',
            'select:not([disabled]):not([tabindex="-1"])',
            '[tabindex]:not([tabindex="-1"])',
          ].join(",")
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);

    // Focus first field on open
    setTimeout(() => {
      (firstFieldRef.current || closeBtnRef.current)?.focus();
    }, 0);

    // prevent background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = originalOverflow;
      // restore focus
      if (previouslyFocusedEl.current instanceof HTMLElement) {
        previouslyFocusedEl.current.focus();
      }
    };
  }, [isOpen, onClose]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    // Honeypot check
    if (e.currentTarget.elements.bot_field.value) return;

    try {
      setSending(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSuccessMsg("Thanks! Your message has been sent.");
      formRef.current.reset();
      setTimeout(onClose, 1200);
    } catch (err) {
      setErrorMsg("Sorry, something went wrong. Please try again or call us.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  // Render to body so it sits above everything (no bleed-through)
  return createPortal(
    <div className="fixed inset-0 z-[9999]" aria-hidden={!isOpen}>
      {/* Solid black backdrop */}
      <div
        className="absolute inset-0 bg-black"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRootRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        aria-describedby="contact-desc"
        className="relative mx-auto mt-24 w-[90%] max-w-md rounded-2xl border border-white/10 bg-neutral-900 text-white shadow-2xl"
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-1 text-xl leading-none text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Close contact form"
        >
          &times;
        </button>

        <div className="p-6">
          <h2 id="contact-title" className="mb-1 text-2xl font-bold text-blue-400">
            Contact Us
          </h2>
          <p id="contact-desc" className="mb-5 text-sm text-gray-300">
            Tell us a bit about your project and how we can help.
          </p>

          {/* Status messages (aria-live for screen readers) */}
          <div aria-live="polite" className="min-h-[1.5rem]">
            {successMsg && (
              <div className="mb-3 rounded-md border border-green-500/40 bg-green-500/10 px-3 py-2 text-sm text-green-300">
                {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="mb-3 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                {errorMsg}
              </div>
            )}
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="bot_field"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div>
              <label htmlFor="user_name" className="mb-1 block text-sm text-gray-300">
                Your Name
              </label>
              <input
                ref={firstFieldRef}
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Jane Doe"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="mb-1 block text-sm text-gray-300">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                inputMode="email"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              />
            </div>

            <div>
              <label htmlFor="user_phone" className="mb-1 block text-sm text-gray-300">
                Phone
              </label>
              <input
                id="user_phone"
                name="user_phone"
                type="tel"
                placeholder="(501) 312-2111"
                autoComplete="tel"
                inputMode="tel"
                pattern="[\d\-\+\(\)\.\s]{7,}"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-gray-300">
                Purpose / Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                rows={5}
                required
                className="w-full resize-y rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              />
            </div>

            <button
              type="submit"
              disabled={sending || !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY}
              className={`w-full rounded-full px-4 py-2 font-semibold transition
                ${sending ? "bg-blue-400 cursor-wait" : "bg-blue-600 hover:bg-blue-700"}
                ${(!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {sending ? "Sending…" : "Send"}
            </button>

            <p className="mt-1 text-center text-xs text-gray-400">
              We’ll never share your info. By submitting, you agree to be contacted about your request.
            </p>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

ContactFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactFormModal;
