import React from 'react';
import { Award } from 'lucide-react';

const ProgressBar = ({ completed, total }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-[#121212] backdrop-blur-xl border border-gray-800/50 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-gray-400 stroke-[1.5]" />
          <h2 className="text-base font-medium text-white">התקדמות בקורס</h2>
        </div>
        <span className="text-xl font-semibold text-white">
          {percentage}%
        </span>
      </div>

      <div className="w-full bg-gray-800/50 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full bg-[#1DB954] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-xs text-gray-400 mt-3 text-center">
        {completed} מתוך {total} שיעורים הושלמו
      </p>
    </div>
  );
};

export default ProgressBar;
