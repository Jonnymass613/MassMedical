'use client';

import { useAuth } from '@/context/AuthContext';
import { courses, MindMapNode } from '@/lib/data';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PlayCircle, Image as ImageIcon, FileText, Map as MapIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetail() {
  const { id } = useParams();
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'video' | 'diagram' | 'slideshow' | 'mindmap'>('video');
  const [currentSlide, setCurrentSlide] = useState(0);

  const course = courses.find((c) => c.id === id);

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

  if (isLoading || !user || !course) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const tabs = [
    { id: 'video', label: 'Video', icon: PlayCircle },
    { id: 'diagram', label: 'Diagram', icon: ImageIcon },
    { id: 'slideshow', label: 'Slideshow', icon: FileText },
    { id: 'mindmap', label: 'Mind Map', icon: MapIcon },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8">
        <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl">{course.description}</p>

        {/* Content Tabs */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gray-50 rounded-2xl p-8 min-h-[600px] flex flex-col border border-gray-100 shadow-inner">
          {activeTab === 'video' && (
            <div className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <PlayCircle className="w-6 h-6 mr-2 text-blue-600" />
                Explanatory Video
              </h2>
              <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={course.videoUrl}
                  title={course.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <p className="mt-6 text-gray-600 italic">
                Note: This video provides a high-level overview of {course.title}. Please review the slideshow and mind map for detailed curricular information.
              </p>
            </div>
          )}

          {activeTab === 'diagram' && (
            <div className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <ImageIcon className="w-6 h-6 mr-2 text-green-600" />
                Detailed Diagram
              </h2>
              <div className="flex-grow relative rounded-xl overflow-hidden bg-white border border-gray-200">
                <img
                  src={course.diagramUrl}
                  alt={course.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          )}

          {activeTab === 'slideshow' && (
            <div className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-yellow-600" />
                Lesson Slideshow
              </h2>
              <div className="flex-grow bg-white rounded-xl border border-gray-200 flex flex-col p-8 shadow-sm">
                <div className="flex-grow flex flex-col justify-center max-w-4xl mx-auto w-full">
                  <h3 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-600 pl-4">
                    {course.slides[currentSlide].title}
                  </h3>
                  <ul className="space-y-6">
                    {course.slides[currentSlide].content.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 mr-4 flex-shrink-0" />
                        <span className="text-xl text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 flex items-center justify-between border-t pt-8">
                  <button
                    disabled={currentSlide === 0}
                    onClick={() => setCurrentSlide(s => s - 1)}
                    className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-30 hover:bg-gray-200 transition-colors font-semibold"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>
                  <div className="text-gray-500 font-medium">
                    Slide {currentSlide + 1} of {course.slides.length}
                  </div>
                  <button
                    disabled={currentSlide === course.slides.length - 1}
                    onClick={() => setCurrentSlide(s => s + 1)}
                    className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-30 hover:bg-blue-700 transition-colors font-semibold shadow-md"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mindmap' && (
            <div className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MapIcon className="w-6 h-6 mr-2 text-purple-600" />
                Concept Mind Map
              </h2>
              <div className="flex-grow bg-white rounded-xl border border-gray-200 p-8 overflow-auto shadow-sm">
                <div className="flex items-center justify-center min-h-[400px]">
                   <MindMapTree node={course.mindMap} isRoot />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MindMapTree({ node, isRoot = false }: { node: MindMapNode, isRoot?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`px-6 py-3 rounded-xl border-2 shadow-sm font-bold text-lg ${
        isRoot ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-gray-800 border-gray-200'
      }`}>
        {node.label}
      </div>
      {node.children && node.children.length > 0 && (
        <div className="relative pt-8">
          {/* Vertical line from parent */}
          <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-300" />

          <div className="flex space-x-8">
            {node.children.map((child, idx) => (
              <div key={idx} className="relative">
                {/* Horizontal connection line */}
                {node.children!.length > 1 && (
                  <div className={`absolute top-0 h-px bg-gray-300 ${
                    idx === 0 ? 'left-1/2 right-0' :
                    idx === node.children!.length - 1 ? 'left-0 right-1/2' :
                    'left-0 right-0'
                  }`} />
                )}
                <div className="pt-8">
                   <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-300" />
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
