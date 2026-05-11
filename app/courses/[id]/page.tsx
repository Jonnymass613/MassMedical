'use client';

import { useAuth } from '@/context/AuthContext';
import { courses, MindMapNode, Lesson } from '@/lib/data';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PlayCircle, Image as ImageIcon, FileText, Map as MapIcon, ChevronLeft, ChevronRight, Info, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CourseDetail() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const course = courses.find((c) => c.id === id);
  const initialLessonId = searchParams.get('lesson') || course?.lessons[0].id;

  const [activeLesson, setActiveLesson] = useState<Lesson | undefined>(
    course?.lessons.find(l => l.id === initialLessonId) || course?.lessons[0]
  );

  const [activeTab, setActiveTab] = useState<'video' | 'diagram' | 'slideshow' | 'mindmap'>('video');
  const [currentSlide, setCurrentSlide] = useState(0);

  const getTierPriority = (tier: string | null) => {
    if (tier === 'medical') return 3;
    if (tier === 'nursing') return 2;
    if (tier === 'highschool') return 1;
    return 0;
  };

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    } else if (user && course) {
      const userPriority = getTierPriority(user.subscription);
      const coursePriority = getTierPriority(course.tier);
      if (userPriority < coursePriority) {
        router.push('/dashboard');
      }
    }
  }, [user, isLoading, router, course]);

  // Update active lesson when URL changes
  useEffect(() => {
    const lessonId = searchParams.get('lesson');
    if (lessonId && course) {
      const lesson = course.lessons.find(l => l.id === lessonId);
      if (lesson) {
        setActiveLesson(lesson);
        setCurrentSlide(0);
      }
    }
  }, [searchParams, course]);

  if (isLoading || !user || !course || !activeLesson) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const tabs = [
    { id: 'video', label: 'Video', icon: PlayCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'diagram', label: 'Diagram', icon: ImageIcon, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'slideshow', label: 'Slideshow', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'mindmap', label: 'Mind Map', icon: MapIcon, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const handleLessonClick = (lessonId: string) => {
    router.push(`/courses/${course.id}?lesson=${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col lg:flex-row">
      {/* Sidebar - Lesson List */}
      <div className="w-full lg:w-80 bg-white border-r border-gray-200 overflow-y-auto lg:h-screen sticky top-0">
        <div className="p-6 border-b border-gray-100">
          <Link href="/dashboard" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 font-medium transition-colors group text-sm">
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </Link>
          <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{course.lessons.length} Lessons available</p>
        </div>
        <div className="p-2">
          {course.lessons.map((lesson, idx) => (
            <button
              key={lesson.id}
              onClick={() => handleLessonClick(lesson.id)}
              className={`w-full flex items-start p-4 rounded-xl mb-1 transition-all text-left group ${
                activeLesson.id === lesson.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <div className={`mt-0.5 mr-3 flex-shrink-0 ${activeLesson.id === lesson.id ? 'text-blue-600' : 'text-gray-300'}`}>
                {activeLesson.id === lesson.id ? <PlayCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Lesson {idx + 1}</div>
                <div className="font-semibold text-sm leading-snug">{lesson.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto">
        <div className="container mx-auto px-4 lg:px-8 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">{activeLesson.title}</h1>
            <p className="text-gray-500 mt-2 font-medium">Part of {course.title}</p>
          </div>

          {/* Content Tabs */}
          <div className="flex bg-white rounded-2xl p-2 shadow-sm border border-gray-100 mb-8 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all whitespace-nowrap flex-1 justify-center ${
                    isActive
                      ? `${tab.bg} ${tab.color} shadow-sm ring-1 ring-black/5`
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${isActive ? tab.color : 'text-gray-400'}`} />
                  <span className="font-bold tracking-tight">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-3xl p-4 md:p-8 min-h-[600px] flex flex-col shadow-xl border border-gray-100 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeLesson.id}-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-grow flex flex-col"
              >
                {activeTab === 'video' && (
                  <div className="flex-grow flex flex-col">
                    <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gray-50">
                      <iframe
                        src={activeLesson.videoUrl}
                        title={activeLesson.title}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                      <p className="text-gray-700 font-medium leading-relaxed">
                        <span className="text-blue-600 font-bold uppercase text-xs tracking-widest mr-2">Lecture Notes:</span>
                        This video covers the primary objectives for {activeLesson.title}. Review the diagrams and slides below for key terminology and concepts.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'diagram' && (
                  <div className="flex-grow flex flex-col">
                    <div className="flex-grow relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 group min-h-[400px]">
                      <img
                        src={activeLesson.diagramUrl}
                        alt={activeLesson.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                         <p className="text-white font-medium text-lg">Visual guide for {activeLesson.title}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'slideshow' && (
                  <div className="flex-grow flex flex-col">
                    <div className="flex-grow bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden shadow-inner bg-gradient-to-br from-white to-gray-50">
                      <div className="flex-grow p-8 md:p-12">
                        <div className="max-w-4xl mx-auto">
                          <motion.div
                            key={currentSlide}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                          >
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
                              {activeLesson.slides[currentSlide].title}
                            </h3>
                            <ul className="space-y-6">
                              {activeLesson.slides[currentSlide].content.map((point, idx) => (
                                <li key={idx} className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:border-amber-200 transition-colors">
                                  <div className="w-3 h-3 rounded-full bg-amber-500 mt-2 mr-6 flex-shrink-0 ring-4 ring-amber-100" />
                                  <span className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                      </div>

                      <div className="p-8 border-t border-gray-100 bg-white flex items-center justify-between">
                        <button
                          disabled={currentSlide === 0}
                          onClick={() => setCurrentSlide(s => s - 1)}
                          className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-50 text-gray-600 disabled:opacity-30 hover:bg-gray-200 transition-all font-bold border border-gray-100"
                        >
                          <ChevronLeft className="w-5 h-5" />
                          <span className="hidden sm:inline">Previous</span>
                        </button>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-500 font-bold text-sm">
                            Slide {currentSlide + 1} of {activeLesson.slides.length}
                          </span>
                        </div>
                        <button
                          disabled={currentSlide === activeLesson.slides.length - 1}
                          onClick={() => setCurrentSlide(s => s + 1)}
                          className="flex items-center space-x-2 px-8 py-3 rounded-xl bg-amber-600 text-white disabled:opacity-30 hover:bg-amber-700 transition-all font-bold shadow-lg shadow-amber-200"
                        >
                          <span className="hidden sm:inline">Next</span>
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'mindmap' && (
                  <div className="flex-grow flex flex-col">
                    <div className="flex-grow bg-white rounded-2xl border border-gray-100 p-6 md:p-10 overflow-auto shadow-inner bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
                      <div className="flex items-center justify-center min-h-[400px] min-w-max p-10">
                         <MindMapTree node={activeLesson.mindMap} isRoot />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function MindMapTree({ node, isRoot = false }: { node: MindMapNode, isRoot?: boolean }) {
  if (!node) return null;
  return (
    <div className="flex flex-col items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`px-6 py-3 rounded-2xl border-2 shadow-sm font-extrabold text-lg whitespace-nowrap ${
          isRoot
            ? 'bg-purple-600 text-white border-purple-700 shadow-purple-200'
            : 'bg-white text-gray-800 border-purple-100 shadow-sm'
        }`}
      >
        {node.label}
      </motion.div>
      {node.children && node.children.length > 0 && (
        <div className="relative pt-12">
          {/* Vertical line from parent */}
          <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-purple-100" />

          <div className="flex space-x-8 md:space-x-12">
            {node.children.map((child, idx) => (
              <div key={idx} className="relative">
                {/* Horizontal connection line */}
                {node.children!.length > 1 && (
                  <div className={`absolute top-0 h-0.5 bg-purple-100 ${
                    idx === 0 ? 'left-1/2 right-0' :
                    idx === node.children!.length - 1 ? 'left-0 right-1/2' :
                    'left-0 right-0'
                  }`} />
                )}
                <div className="pt-12">
                   <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-purple-100" />
                   <MindMapTree node={child} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
