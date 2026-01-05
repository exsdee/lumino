"use client";

import { useState, useEffect } from "react";

interface VideoItem {
  title: string;
  youtubeId: string;
  views?: string;
}

interface VideoSection {
  id: number;
  name: string;
  link?: string;
  description?: string;
  videos: VideoItem[];
}

interface VideoCarouselProps {
  dataFile: string; // "clients" or "personal"
  title: string;
  showLinks?: boolean; // Whether to make names clickable links
}

export default function VideoCarousel({
  dataFile,
  title,
  showLinks = false,
}: VideoCarouselProps) {
  const [videoData, setVideoData] = useState<VideoSection[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideoData = async () => {
      try {
        const response = await fetch(`/video-data/${dataFile}.json`);
        const data = await response.json();
        setVideoData(data);
      } catch (error) {
        console.error(`Error loading ${dataFile} data:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadVideoData();
  }, [dataFile]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoData.length);
    setPlayingVideo(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    setPlayingVideo(null);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setPlayingVideo(null);
  };

  const toggleVideo = (youtubeId: string) => {
    setPlayingVideo(playingVideo === youtubeId ? null : youtubeId);
  };

  if (loading) {
    return (
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-[var(--color-brown)] text-xl">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  if (videoData.length === 0) {
    return (
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-brown)] text-center mb-12">
            {title}
          </h2>
          <div className="text-center text-gray-600">No videos available</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[var(--color-cream)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-brown)] text-center mb-12">
          {title}
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videoData.map((section) => (
                <div key={section.id} className="w-full flex-shrink-0 p-6">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    {/* Section Header */}
                    <div className="flex items-center mb-6">
                      <div>
                        {showLinks && section.link ? (
                          <a
                            href={section.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-bold text-[var(--color-brown)] hover:text-[var(--color-brown)]/80 transition-colors duration-200"
                          >
                            {section.name}
                          </a>
                        ) : (
                          <h3 className="text-2xl font-bold text-[var(--color-brown)]">
                            {section.name}
                          </h3>
                        )}
                        {section.description && (
                          <p className="text-gray-600">{section.description}</p>
                        )}
                      </div>
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {section.videos.map((video, index) => (
                        <div key={index} className="group">
                          <div className="relative overflow-hidden rounded-lg mb-3 h-48">
                            {playingVideo === video.youtubeId ? (
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                              ></iframe>
                            ) : (
                              <div
                                className="cursor-pointer h-full"
                                onClick={() => toggleVideo(video.youtubeId)}
                              >
                                <img
                                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                                  alt={video.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                    <svg
                                      className="w-6 h-6 text-white ml-1"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M8 5v14l11-7z" />
                                    </svg>
                                  </div>
                                </div>
                                {video.views && (
                                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                    {video.views} views
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <h4 className="font-semibold text-[var(--color-brown)] group-hover:text-[var(--color-brown)]/80 transition-colors">
                            {video.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only show if multiple sections */}
          {videoData.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[var(--color-brown)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--color-brown)]/80 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[var(--color-brown)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--color-brown)]/80 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {videoData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-[var(--color-brown)]"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
