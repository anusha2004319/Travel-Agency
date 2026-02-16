import { useState } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export function FallbackImage({ src, alt, className = "", fallbackText }: FallbackImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 ${className}`}>
        <span className="text-white/80 text-sm font-medium text-center px-4">
          {fallbackText || alt}
        </span>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div className={`absolute inset-0 bg-gradient-to-br from-teal-400/30 to-emerald-500/30 animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
      />
    </>
  );
}
