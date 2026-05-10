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

  const filteredCourses = courses.filter((course) => course.tier === user.subscription);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Explore your {user.subscription} curriculum and continue your learning journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 group"
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
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
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
            <h3 className="text-xl font-medium text-gray-500">No courses available for your tier yet.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
