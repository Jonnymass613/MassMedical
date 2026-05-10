'use client';

import { useAuth } from '@/context/AuthContext';
import { courses } from '@/lib/data';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PlayCircle, Image as ImageIcon, FileText, Map as MapIcon, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetail() {
  const { id } = useParams();
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'video' | 'diagram' | 'slideshow' | 'mindmap'>('video');

  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    } else if (user && course && user.subscription !== course.tier) {
      router.push('/dashboard');
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
        <div className="bg-gray-50 rounded-2xl p-8 min-h-[600px] flex flex-col border border-gray-100">
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
              <p className="mt-6 text-gray-600">
                This comprehensive video covers the core concepts of {course.title}. Watch carefully and take notes on the key points presented.
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
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-6 text-gray-600">
                Study this diagram to visualize the structures and relationships discussed in the curriculum.
              </p>
            </div>
          )}

          {activeTab === 'slideshow' && (
            <div className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-yellow-600" />
                Lesson Slideshow
              </h2>
              <div className="flex-grow bg-white rounded-xl border border-gray-200 flex items-center justify-center p-12">
                <div className="text-center">
                  <FileText className="w-20 h-20 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-6">Interactive Slideshow for {course.title}</p>
                  <a
                    href={course.slideshowUrl}
                    target="_blank"
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                  >
                    Open Slideshow in New Tab
                  </a>
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
              <div className="flex-grow relative rounded-xl overflow-hidden bg-white border border-gray-200">
                <img
                  src={course.mindMapUrl}
                  alt={`${course.title} Mind Map`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-6 text-gray-600">
                Use this mind map to see the big picture and how different sub-topics connect within {course.title}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
