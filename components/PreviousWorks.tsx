'use client'
import { Post, getPosts } from "@/sanity/queries/posts";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const PreviousWorks = () => {
  const [recentData, setRecentData] = useState<Post[]>([]);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      // Limit to only 3 posts
      setRecentData(posts.slice(0, 3));
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleAudioToggle = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    // Pause all other audio elements
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
      }
    });

    if (playingAudio === index) {
      // Currently playing, so pause
      currentAudio.pause();
      setPlayingAudio(null);
    } else {
      // Not playing, so play
      currentAudio.play();
      setPlayingAudio(index);
    }
  };

  return (
    <section className="py-10 mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold font-helveticaNowDisplayBold mb-6">Melchizedek Series</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentData.map((work, index) => (
            <div
              key={index}
              className={`bg-transparent rounded-lg ${work.span ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              {/* <Link href={`/works/${work.slug?.current || '/'}`}> */}
                {work.mediaType === "image" && work.imageUrl && (
                  <img
                    src={work.imageUrl}
                    alt={work.title || 'Work image'}
                    className="w-full h-auto object-cover mb-4 rounded-t"
                  />
                )}
                {work.mediaType === "video" && work.mediaSrc && (
                  <video
                    src={work.mediaSrc}
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto object-cover mb-4 rounded-t"
                  >
                    <source src={work.mediaSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {work.mediaType === "webp" && work.imageUrl && (
                  <img
                    src={work.imageUrl}
                    alt={work.title || 'Work image'}
                    className="w-full h-auto object-cover mb-4 rounded-t"
                  />
                )}
                {work.mediaType === "audio" && work.imageUrl && (
                  <img
                    src={work.imageUrl}
                    alt={work.title || 'Audio cover'}
                    className="w-full h-auto object-cover mb-4 rounded-t"
                  />
                )}
              {/* </Link> */}
              
              <div className="p-6 pt-1">
                  <h3 className="text-xl font-bold mb-2 hover:text-gray-600 transition-colors font-helveticaNowDisplayBold">
                    {work.title}
                  </h3>
                
                {work.description && (
                  <p className="text-gray-600 text-base mb-4 font-helveticaNowDisplayRegular">{work.description}</p>
                )}
                {/* Published date */}
                {work.publishedAt && (
                  <p className="text-gray-500 text-xs font-medium mb-4 font-helveticaNowDisplayRegular">
                    {formatDate(work.publishedAt)}
                  </p>
                )}
                
                {work.mediaType === "audio" && work.audioSrc && (
                  <div className="mt-2">
                    {/* Custom audio player with visible waveform but custom controls */}
                    <div className="relative mb-3 rounded-lg">
                      <audio
                        ref={(el) => { audioRefs.current[index] = el; }}
                        className="w-full"
                        onEnded={() => setPlayingAudio(null)}
                        onPause={() => setPlayingAudio(null)}
                        controlsList="nodownload nofullscreen noremoteplayback"
                        style={{
                          filter: 'sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%)',
                          height: '40px'
                        }}
                      >
                        <source src={work.audioSrc} type="audio/mpeg" />
                        <source src={work.audioSrc} type="audio/wav" />
                        <source src={work.audioSrc} type="audio/ogg" />
                        Your browser does not support the audio element.
                      </audio>
                      
                      {/* Custom play/pause button overlay */}
                      <button
                        onClick={(event) => handleAudioToggle(index, event)}
                        className="bg-[#dccfbe] text-black p-4 px-5 font-helveticaNowDisplayRegular rounded-lg"
                      >
                        {playingAudio === index ? (
                          <p className="flex items-center gap-1">
                            <svg
                              className="w-5 h-5 ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                            <span className="text-gray-800">Pause</span>
                          </p>
                        ) : (
                          <p className="flex items-center gap-1">
                            <svg
                              className="w-5 h-5 ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-gray-800">Listen</span>
                          </p>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="py-6 mt-10 text-center">
          <Link
            href="/sermons"
            className="font-helveticaNowDisplayRegular text-2xl text-gray-400 hover:text-gray-300 duration-300 ease-in-out font-bold"
          >
            View All Sermons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreviousWorks;