import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/apiService';
import { useAuth } from '../hooks/useAuth';
import { theme } from '../theme';

function Login() {
  const navigate = useNavigate();
  const { saveUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await loginUser(username, password);
      saveUser(data.username);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className='min-h-screen flex items-center justify-center px-4'
      style={{ backgroundColor: theme.colors.background }}
    >
      <div
        className='w-full max-w-sm rounded-2xl p-8'
        style={{
          backgroundColor: theme.colors.surface,
          boxShadow: theme.colors.shadow.xl,
        }}
      >
        {/* Brand */}
        <div className='text-center mb-8'>
          <h1
            className='text-2xl font-extrabold tracking-tight'
            style={{ color: theme.colors.brand.primary }}
          >
            ofoscar
          </h1>
          <p
            className='text-sm mt-1'
            style={{ color: theme.colors.text.secondary }}
          >
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='username'
              className='text-sm font-medium'
              style={{ color: theme.colors.text.primary }}
            >
              Username
            </label>
            <input
              id='username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete='username'
              placeholder='Enter your username'
              className='w-full px-3 py-2 rounded-lg text-sm outline-none transition-all'
              style={{
                border: `1px solid ${theme.colors.border.medium}`,
                color: theme.colors.text.primary,
                backgroundColor: theme.colors.background,
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = theme.colors.brand.primary)
              }
              onBlur={(e) =>
                (e.target.style.borderColor = theme.colors.border.medium)
              }
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label
              htmlFor='password'
              className='text-sm font-medium'
              style={{ color: theme.colors.text.primary }}
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete='current-password'
              placeholder='Enter your password'
              className='w-full px-3 py-2 rounded-lg text-sm outline-none transition-all'
              style={{
                border: `1px solid ${theme.colors.border.medium}`,
                color: theme.colors.text.primary,
                backgroundColor: theme.colors.background,
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = theme.colors.brand.primary)
              }
              onBlur={(e) =>
                (e.target.style.borderColor = theme.colors.border.medium)
              }
            />
          </div>

          {error && (
            <p
              className='text-sm text-center rounded-lg px-3 py-2'
              style={{
                color: theme.colors.accent.error,
                backgroundColor: '#FEF2F2',
              }}
            >
              {error}
            </p>
          )}

          <button
            type='submit'
            disabled={loading}
            className='w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-all mt-2'
            style={{
              backgroundColor: loading
                ? theme.colors.text.muted
                : theme.colors.brand.primary,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <button
          onClick={() => navigate('/')}
          className='mt-6 w-full text-center text-sm transition-colors'
          style={{ color: theme.colors.text.secondary }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = theme.colors.brand.primary)
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = theme.colors.text.secondary)
          }
        >
          ← Back to site
        </button>
      </div>
    </div>
  );
}

export default Login;
