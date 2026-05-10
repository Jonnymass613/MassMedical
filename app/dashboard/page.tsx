'use client';

import { useAuth } from '@/context/AuthContext';
import { courses } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PlayCircle, FileText, Layout, Map } from 'lucide-react';

export default function Dashboard() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const getTierPriority = (tier: string | null) => {
    if (tier === 'medical') return 3;
    if (tier === 'nursing') return 2;
    if (tier === 'highschool') return 1;
    return 0;
  };

  const hasAccess = (courseTier: string) => {
    return getTierPriority(user.subscription) >= getTierPriority(courseTier);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Explore the curriculum and continue your learning journey.</p>
          <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Active Subscription: {user.subscription ? user.subscription.charAt(0).toUpperCase() + user.subscription.slice(1) : 'None'}
          </div>
        </div>

        {['medical', 'nursing', 'highschool'].map((tierKey) => {
          const tierCourses = courses.filter(c => c.tier === tierKey);
          if (tierCourses.length === 0) return null;

          const isLocked = !hasAccess(tierKey);

          return (
            <div key={tierKey} className="mb-12">
              <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
                <h2 className="text-2xl font-bold text-gray-800 capitalize">
                  {tierKey} Curriculum
                </h2>
                {isLocked && (
                  <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-100">
                    Upgrade to Unlock
                  </span>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tierCourses.map((course) => (
                  <div key={course.id} className="relative">
                    {isLocked ? (
                      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 opacity-75 grayscale-[0.5]">
                        <div className="h-48 bg-gray-200 relative flex items-center justify-center">
                          <div className="bg-white/90 p-3 rounded-full shadow-lg">
                            <Layout className="w-8 h-8 text-gray-400" />
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-400 mb-2">{course.title}</h3>
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
                          <button
                            onClick={() => router.push('/')}
                            className="w-full py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                          >
                            Unlock Course
                          </button>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={`/courses/${course.id}`}
                        className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
                      >
                        <div className="h-48 bg-blue-100 relative">
                          <img
                            src={course.diagramUrl}
                            alt={course.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                            <PlayCircle className="w-12 h-12 text-white" />
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                          <div className="flex items-center space-x-4 text-gray-400">
                            <div className="flex items-center space-x-1">
                              <PlayCircle className="w-4 h-4" />
                              <span className="text-xs">Video</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Layout className="w-4 h-4" />
                              <span className="text-xs">Slides</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Map className="w-4 h-4" />
                              <span className="text-xs">Mind Map</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
