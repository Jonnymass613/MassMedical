'use client';

import { useAuth } from '@/context/AuthContext';
import { courses } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PlayCircle, FileText, Layout, Map, Lock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="container mx-auto px-6">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">My Learning Dashboard</h1>
            <p className="text-gray-500 text-lg">Continue your journey through the standard curriculum.</p>
          </div>
          <div className="flex items-center space-x-3 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
             <div className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-200">
                Tier: {user.subscription ? user.subscription.charAt(0).toUpperCase() + user.subscription.slice(1) : 'Guest'}
             </div>
          </div>
        </header>

        {['medical', 'nursing', 'highschool'].map((tierKey) => {
          const tierCourses = courses.filter(c => c.tier === tierKey);
          if (tierCourses.length === 0) return null;

          const isLocked = !hasAccess(tierKey);

          return (
            <section key={tierKey} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold text-gray-900 capitalize tracking-tight">
                    {tierKey} Curriculum
                  </h2>
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-400">
                    {tierCourses.length} Courses
                  </span>
                </div>
                {isLocked && (
                  <button
                    onClick={() => router.push('/')}
                    className="flex items-center space-x-2 text-amber-600 font-bold text-sm bg-amber-50 px-4 py-2 rounded-xl border border-amber-100 hover:bg-amber-100 transition-colors"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Upgrade to Unlock</span>
                  </button>
                )}
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {tierCourses.map((course) => (
                  <motion.div key={course.id} variants={item}>
                    {isLocked ? (
                      <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 opacity-60 grayscale group relative">
                        <div className="h-56 bg-gray-100 relative overflow-hidden">
                           <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px] flex items-center justify-center">
                              <Lock className="w-12 h-12 text-white/80" />
                           </div>
                        </div>
                        <div className="p-8">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                          <p className="text-gray-500 text-sm mb-6 line-clamp-2">{course.description}</p>
                          <div className="h-10" />
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={`/courses/${course.id}`}
                        className="block bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 group relative overflow-hidden"
                      >
                        <div className="h-56 bg-blue-50 relative overflow-hidden">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl">
                                <PlayCircle className="w-10 h-10 text-white" />
                             </div>
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="flex items-center space-x-2 mb-3">
                             <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                {course.lessons.length} Lessons
                             </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                          <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{course.description}</p>

                          <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                             <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center"><PlayCircle className="w-4 h-4 text-blue-600" /></div>
                                <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center"><Layout className="w-4 h-4 text-emerald-600" /></div>
                                <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center"><Map className="w-4 h-4 text-purple-600" /></div>
                             </div>
                             <div className="text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                Continue <ChevronRight className="w-4 h-4 ml-1" />
                             </div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
