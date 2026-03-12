import { useAuth } from '@/lib/auth-context';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FaLock } from 'react-icons/fa';

export default function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!login(password)) {
      setError('Invalid password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
          <div className="flex justify-center mb-6">
            <img src="/divfixer logo.png" alt="DivFixer" className="h-14 w-auto" />
          </div>
          <h1 className="text-xl font-bold text-center text-neutral-900 mb-1">Admin Dashboard</h1>
          <p className="text-neutral-500 text-center text-sm mb-6">Enter password to manage projects</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium transition-all hover:shadow-md"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-neutral-500 hover:text-neutral-700">&larr; Back to website</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
