'use client';

import { tiers } from '@/lib/data';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';

export default function Home() {
  const { login, user } = useAuth();
  const router = useRouter();

  const handleSubscribe = (tierId: any) => {
    login(tierId);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Master Your Medical Education</h1>
          <p className="text-xl mb-8">Access world-class curriculum, videos, and study tools tailored for your level.</p>
          {user ? (
            <button
              onClick={() => router.push('/dashboard')}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Go to Dashboard
            </button>
          ) : (
            <a
              href="#pricing"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Choose Your Learning Tier</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-8 text-center border-b border-gray-50">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <div className="text-gray-500">per month</div>
                </div>
                <div className="p-8 flex-grow">
                  <p className="text-gray-600 mb-6 text-center">{tier.description}</p>
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <button
                    onClick={() => handleSubscribe(tier.id)}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                  >
                    {user?.subscription === tier.id ? 'Already Subscribed' : 'Subscribe Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Comprehensive Learning Resources</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📺</span>
              </div>
              <h4 className="font-bold mb-2">Explanatory Videos</h4>
              <p className="text-gray-600">Complex concepts broken down by expert educators.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold mb-2">Detailed Diagrams</h4>
              <p className="text-gray-600">High-resolution illustrations for better visualization.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-bold mb-2">Slideshows</h4>
              <p className="text-gray-600">Structured lessons for self-paced learning.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-bold mb-2">Mind Maps</h4>
              <p className="text-gray-600">Visual summaries to help with retention.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
