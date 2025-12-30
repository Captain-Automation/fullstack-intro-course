import React from 'react';
import { FolderOpen, ExternalLink } from 'lucide-react';

const ResourceLinks = ({ resources }) => {
  return (
    <div className="bg-[#121212] backdrop-blur-xl border border-gray-800/50 rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <FolderOpen className="w-5 h-5 text-gray-400 stroke-[1.5]" />
        <h2 className="text-base font-medium text-white">משאבים</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-lg border border-gray-800 bg-[#181818] hover:bg-[#1a1a1a] hover:border-gray-700 transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4 text-gray-400 stroke-[1.5] group-hover:text-white" />
            <span className="text-sm font-medium text-white">
              {resource.titleHe}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourceLinks;
