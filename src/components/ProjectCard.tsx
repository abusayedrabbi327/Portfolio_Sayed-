import React, { useState } from 'react';
import type { ProjectItem } from '../data/cvData';
import { ExternalLink, Layers, CheckCircle2, ChevronRight, X, Cpu } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative border border-slate-800/90 hover:border-cyan-500/40">
        <div>
          {/* Top category & year badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-800/80 text-cyan-300 border border-slate-700/60">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.year}
            </span>
          </div>

          {/* Project Title & Subtitle */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-cyan-400/90 font-mono mt-1">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-slate-300 text-sm mt-3 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Metrics Preview */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/80">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-slate-900/60 p-2 rounded-lg border border-slate-800/60">
                  <div className="text-[11px] text-slate-400 truncate">{m.label}</div>
                  <div className="text-xs font-mono font-bold text-cyan-400">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.8 text-[11px] font-mono rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-800/80">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>Architecture & Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all hover:scale-105 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo for ${project.title}`}
                className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 transition-all hover:scale-105 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal Popup with Full Architecture & Engineering Breakdown */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{project.year}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mt-1">{project.subtitle}</p>
            </div>

            {/* Role & Overview */}
            <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Role & Responsibility</div>
              <div className="text-sm font-semibold text-slate-200 mt-1">{project.role}</div>
            </div>

            {/* Full Description */}
            <div className="mt-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Project Overview</h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Architecture Details */}
            {project.architectureDetails && (
              <div className="mt-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Engineering Architecture</span>
                </h4>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.architectureDetails}
                </div>
              </div>
            )}

            {/* Key Engineering Highlights */}
            <div className="mt-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Key Technical Achievements</h4>
              <ul className="space-y-2.5">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Matrix in Modal */}
            <div className="mt-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Utilized</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 text-cyan-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-800">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all font-bold cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Platform Preview</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
