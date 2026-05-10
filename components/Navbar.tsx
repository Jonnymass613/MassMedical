'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { BookOpen, LogOut, User as UserIcon } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800 tracking-tight">MedEdu Pro</span>
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            Home
          </Link>
          {user && (
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Dashboard
            </Link>
          )}

          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <UserIcon className="w-5 h-5" />
                  <span className="text-sm font-medium hidden md:block">{user.email} ({user.subscription})</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-red-500 hover:text-red-600 font-medium transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden md:block">Logout</span>
                </button>
              </div>
            ) : (
              <Link
                href="/#pricing"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
