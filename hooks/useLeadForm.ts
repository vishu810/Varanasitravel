import { useState } from 'react';

export function useLeadForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const submitForm = () => {
    // Submit logic
  };

  return { formData, setFormData, submitForm };
}