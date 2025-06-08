import React from 'react';
import notfound from '../assets/image.webp';
import { Link } from 'react-router-dom';

function Noacces() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 px-4 py-10 text-center">
      <img
        src={notfound}
        alt="Access Denied"
        className="w-96 max-w-full mb-8"
      />
      
      <div className="text-orange-900 font-semibold text-lg space-y-4">
        <p className="text-xl">You need to login to access this page.</p>
        <p className="text-lg">
          Want to login?{' '}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Noacces;
