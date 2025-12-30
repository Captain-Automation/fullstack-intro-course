import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import LessonButton from './LessonButton';

const CategoryCard = ({ category, completedLessons, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const completedCount = category.lessons.filter((lesson) =>
    completedLessons.includes(lesson.id)
  ).length;

  const totalLessons = category.lessons.length;
  const completionPercentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="bg-[#121212] backdrop-blur-xl border border-gray-800/50 rounded-xl overflow-hidden mb-4 transition-all duration-200 hover:border-gray-700/50">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-5 text-white"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-gray-400 stroke-[1.5]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400 stroke-[1.5]" />
            )}
            <div className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-lg font-medium">
              {completedCount}/{totalLessons}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">{category.titleHe}</h2>
            <BookOpen className="w-5 h-5 text-gray-400 stroke-[1.5]" />
          </div>
        </div>

        {!isExpanded && (
          <div className="mt-3">
            <div className="w-full bg-gray-800/50 rounded-full h-1">
              <div
                className="h-full bg-[#1DB954] rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="px-5 pb-5 space-y-2">
          {category.lessons.map((lesson) => (
            <LessonButton
              key={lesson.id}
              lesson={lesson}
              isCompleted={completedLessons.includes(lesson.id)}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
