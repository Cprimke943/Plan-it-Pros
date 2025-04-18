'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { doCredentialLogin } from '@/app/actions';

export default function LoginForm() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // ✅ success message
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (response?.error) {
        console.error(response.error);
        setError(response.error.message || 'An error occurred');
        setSuccess('');
      } else {
        setError('');
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => router.push('/'), 1000); // ✅ short delay to show message
      }
    } catch (e: any) {
      console.error(e);
      setError('Check your credentials');
      setSuccess('');
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Log In
        </button>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
      </form>
    </div>
  );
}
