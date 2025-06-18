import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider, db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get the redirect path from location state, default to dashboard
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  // Create admin user if it doesn't exist
  useEffect(() => {
    const createAdminUser = async () => {
      const adminEmail = 'admin@arifulgfx.com';
      const adminPassword = 'admin123456';

      try {
        // Check if admin user exists in Firestore
        const adminDocRef = doc(db, 'users', 'admin');
        const adminDoc = await getDoc(adminDocRef);

        if (!adminDoc.exists()) {
          // Create admin user in Firebase Auth
          const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
          
          // Store admin data in Firestore
          await setDoc(adminDocRef, {
            email: adminEmail,
            role: 'admin',
            createdAt: new Date(),
            uid: userCredential.user.uid
          });

          console.log('Admin user created successfully');
        }
      } catch (error) {
        console.error('Error checking/creating admin:', error);
      }
    };

    createAdminUser();
  }, []);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Successfully logged in!');
      navigate(from);
    } catch (error) {
      toast.error('Invalid credentials. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithPopup(auth, googleProvider);
      toast.success('Successfully logged in!');
      navigate(from);
    } catch (error) {
      toast.error('Failed to login. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Sign in to access your dashboard
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          {/* Email/Password Form */}
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          {/* Google Sign In */}
          <div>
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-700 text-sm font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign in with Google'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            By signing in, you agree to our{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 