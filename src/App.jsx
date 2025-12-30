import { useState, useEffect, useMemo } from 'react';
import { Search, ArrowLeft, GraduationCap } from 'lucide-react';
import ProgressBar from './components/ProgressBar';
import CategoryCard from './components/CategoryCard';
import LabsSection from './components/LabsSection';
import ResourceLinks from './components/ResourceLinks';
import { courseCategories, labs, resources } from './data/courseData';

function App() {
  const [completedLessons, setCompletedLessons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Load completed lessons from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completedLessons');
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  // Save completed lessons to localStorage
  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  // Toggle lesson completion
  const toggleComplete = (lessonId) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  // Calculate total lessons and completed count
  const totalLessons = useMemo(() => {
    const courseLessons = courseCategories.reduce(
      (sum, category) => sum + category.lessons.length,
      0
    );
    return courseLessons + labs.length;
  }, []);

  const completedCount = completedLessons.length;

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return courseCategories;

    return courseCategories
      .map((category) => ({
        ...category,
        lessons: category.lessons.filter(
          (lesson) =>
            lesson.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lesson.lesson.toString().includes(searchQuery)
        ),
      }))
      .filter((category) => category.lessons.length > 0);
  }, [searchQuery]);

  // Filter labs based on search
  const filteredLabs = useMemo(() => {
    if (!searchQuery.trim()) return labs;

    return labs.filter(
      (lab) =>
        lab.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lab.lab.toString().includes(searchQuery)
    );
  }, [searchQuery]);

  // Find next incomplete lesson
  const getNextLesson = () => {
    for (const category of courseCategories) {
      for (const lesson of category.lessons) {
        if (!completedLessons.includes(lesson.id)) {
          return lesson;
        }
      }
    }
    for (const lab of labs) {
      if (!completedLessons.includes(lab.id)) {
        return lab;
      }
    }
    return null;
  };

  const nextLesson = getNextLesson();

  return (
    <div dir="rtl" className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-[#121212] text-white border-b border-gray-800/50 sticky top-0 z-50 backdrop-blur-xl bg-opacity-90">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <GraduationCap className="w-8 h-8 stroke-[1.5]" />
            <h1 className="text-3xl font-semibold tracking-tight">קורס Full Stack</h1>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 stroke-[1.5]" />
            <input
              type="text"
              placeholder="חיפוש שיעורים..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-800 focus:outline-none focus:border-gray-700 focus:bg-[#1f1f1f] transition-all duration-200"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Progress Bar */}
        <ProgressBar completed={completedCount} total={totalLessons} />

        {/* Next Lesson Button */}
        {nextLesson && (
          <div className="mb-8">
            <button
              onClick={() => {
                window.open(nextLesson.link, '_blank', 'noopener,noreferrer');
                toggleComplete(nextLesson.id);
              }}
              className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-white p-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] group"
            >
              <div className="flex items-center justify-between">
                <ArrowLeft className="w-5 h-5 stroke-[1.5] opacity-90" />
                <div className="flex-1 text-center">
                  <div className="text-xs opacity-80 mb-1 font-medium">השיעור הבא</div>
                  <div className="text-xl font-semibold">{nextLesson.topic}</div>
                  <div className="text-xs opacity-80 mt-1 font-medium">
                    שיעור {nextLesson.lesson || nextLesson.lab}
                  </div>
                </div>
                <div className="w-5"></div>
              </div>
            </button>
          </div>
        )}

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            שיעורים
          </h2>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                completedLessons={completedLessons}
                onToggleComplete={toggleComplete}
              />
            ))
          ) : (
            <div className="text-center text-gray-400 py-8 text-sm">
              לא נמצאו שיעורים התואמים את החיפוש
            </div>
          )}
        </div>

        {/* Labs Section */}
        {filteredLabs.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              תרגולים
            </h2>
            <LabsSection
              labs={filteredLabs}
              completedLabs={completedLessons}
              onToggleComplete={toggleComplete}
            />
          </div>
        )}

        {/* Resource Links */}
        <ResourceLinks resources={resources} />
      </main>

      {/* Footer */}
      <footer className="bg-[#121212] border-t border-gray-800/50 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            בנוי עם React ו-Tailwind CSS
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © 2025 Full Stack Course
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
