'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const router = useRouter();
  const { createToast } = React.useContext(ToastContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/exercises/02-flash-messages');
    createToast('Your message was submitted, thanks!', 'success');
  };

  return (
    <main>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
