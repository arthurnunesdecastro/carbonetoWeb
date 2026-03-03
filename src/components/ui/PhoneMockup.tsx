import React from 'react';

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  screenClassName?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = "", screenClassName = "bg-white" }) => {
  return (
    <div className={`relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}>
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className={`rounded-[2rem] overflow-hidden w-full h-full relative ${screenClassName}`}>
        {children}
      </div>
    </div>
  );
};

// Drop-in replacement for AppScreenPlaceholder — just pass a PNG src
export const AppScreenImage: React.FC<{ src: string; alt?: string }> = ({ src, alt = "App screen" }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-full object-cover object-top"
  />
);

// Kept for backward compatibility if used elsewhere
export const AppScreenPlaceholder: React.FC<{ title: string; type: 'workout' | 'stats' | 'list' | 'profile' }> = ({ title, type }) => {
  return (
    <div className="flex flex-col h-full w-full bg-gray-50 text-gray-900 font-sans">
      <div className="pt-8 pb-4 px-4 bg-white border-b border-gray-100">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="flex-1 p-4 space-y-3 overflow-hidden relative">
        {type === 'workout' && (
          <>
            <div className="h-32 bg-blue-500/10 rounded-xl w-full flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-blue-500 border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-col gap-1">
                  <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  <div className="h-2 w-16 bg-gray-100 rounded"></div>
                </div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-200"></div>
              </div>
            ))}
          </>
        )}
        {type === 'stats' && (
          <>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">PPG</div>
                <div className="text-xl font-bold text-blue-500">24.5</div>
              </div>
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">EFF</div>
                <div className="text-xl font-bold text-green-600">+12%</div>
              </div>
            </div>
            <div className="h-40 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-end justify-between gap-2">
              {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                <div key={i} className="w-full bg-blue-500/80 rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </>
        )}
        {type === 'list' && (
          <>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0"></div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                </div>
              </div>
            ))}
          </>
        )}
        {type === 'profile' && (
          <>
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-200 mb-3 border-4 border-white shadow-sm"></div>
              <div className="h-4 w-32 bg-gray-800 rounded mb-2"></div>
              <div className="h-3 w-24 bg-gray-400 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-10 w-full bg-white rounded-lg border border-gray-100"></div>
              <div className="h-10 w-full bg-white rounded-lg border border-gray-100"></div>
              <div className="h-10 w-full bg-white rounded-lg border border-gray-100"></div>
            </div>
          </>
        )}
      </div>
      <div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`w-6 h-6 rounded-full ${i === 1 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
        ))}
      </div>
    </div>
  );
};