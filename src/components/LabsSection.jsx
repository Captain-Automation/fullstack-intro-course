import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FlaskConical } from 'lucide-react';
import LessonButton from './LessonButton';

const LabsSection = ({ labs, completedLabs, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const completedCount = labs.filter((lab) =>
    completedLabs.includes(lab.id)
  ).length;

  const totalLabs = labs.length;
  const completionPercentage = Math.round((completedCount / totalLabs) * 100);

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
              {completedCount}/{totalLabs}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">תרגולים</h2>
            <FlaskConical className="w-5 h-5 text-gray-400 stroke-[1.5]" />
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
          {labs.map((lab) => (
            <LessonButton
              key={lab.id}
              lesson={lab}
              isCompleted={completedLabs.includes(lab.id)}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LabsSection;
