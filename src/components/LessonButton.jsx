import React from 'react';
import { PlayCircle, CheckCircle2 } from 'lucide-react';

const LessonButton = ({ lesson, isCompleted, onToggleComplete }) => {
  const handleClick = () => {
    window.open(lesson.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group relative">
      <button
        onClick={handleClick}
        className={`w-full text-right p-4 pl-12 rounded-lg border transition-all duration-200 hover:bg-[#1a1a1a] ${
          isCompleted
            ? 'bg-[#1a1a1a] border-[#1DB954]/30'
            : 'bg-[#181818] border-gray-800 hover:border-gray-700'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <PlayCircle
              className={`w-4 h-4 stroke-[1.5] ${isCompleted ? 'text-[#1DB954]' : 'text-gray-400'}`}
            />
            {isCompleted && (
              <CheckCircle2 className="w-4 h-4 text-[#1DB954] stroke-[1.5]" />
            )}
          </div>

          <div className="flex items-center gap-3">
            <h3 className={`text-sm font-medium ${isCompleted ? 'text-gray-300' : 'text-white'}`}>
              {lesson.topic}
            </h3>
            <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded-md whitespace-nowrap">
              {lesson.lesson || lesson.lab}
            </span>
          </div>
        </div>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleComplete(lesson.id);
        }}
        className={`absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5 rounded border transition-all duration-200 ${
          isCompleted
            ? 'bg-[#1DB954] border-[#1DB954]'
            : 'bg-transparent border-gray-600 hover:border-gray-500'
        }`}
        title={isCompleted ? 'סמן כלא הושלם' : 'סמן כהושלם'}
      >
        {isCompleted && (
          <CheckCircle2 className="w-full h-full text-white p-0.5 stroke-[2]" />
        )}
      </button>
    </div>
  );
};

export default LessonButton;
