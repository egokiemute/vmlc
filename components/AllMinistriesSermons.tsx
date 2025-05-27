"use client";
import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";
import { Post, getPosts } from "@/sanity/queries/posts";
import { useEffect, useState, useRef } from "react";

// Define the Selected Works type
interface AllMinistries {
  id?: number;
  title: string;
  category?: string[];
  description?: string;
  imageSrc: string;
  slug?: string;
}

const works: AllMinistries[] = [
  {
    id: 1,
    title: "The Gospel and Us",
    category: ["Gospel"],
    description: "What is the Gospel?",
    imageSrc: "/assets/selected/worship.jpg",
    slug: "/",
  },
  {
    id: 2,
    title: "What is Salvation and Why do we need it?",
    category: ["Christ", "Finished Work"],
    description: "The Finished Work of Christ",
    imageSrc: "/assets/selected/worship.jpg",
    slug: "/",
  },
  {
    id: 3,
    title: "Understanding the Holy Spirit",
    category: ["Holy Spirit"],
    description: "The Holy Spirit and Us",
    imageSrc: "/assets/selected/worship.jpg",
    slug: "/",
  },
];

const AllMinistriesSermons = () => {
  const [sanityPosts, setSanityPosts] = useState<Post[]>([]);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setSanityPosts(posts);
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
    <section className="pt-24 md:mt-24 mx-auto px-4 md:px-10 pb-32">
      <div className="flex flex-col md:flex-row items-center gap-20 w-full mx-auto">
        <div className="flex flex-col items-center text-center gap-4 max-w-lg font-neuehasslight">
          <span className="text-xs uppercase tracking-wider font-medium">
            Ministries
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-helveticaNowDisplayBold max-w-lg">
            THERE&apos;S A PLACE FOR{" "}
            <span className="text-[#2e3b4d]">EVERYONE</span>
          </h1>
        </div>
        
        {/* Static Works Grid */}
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {works.map((work, index) => (
            <Link key={index} href={`${work.slug || "/"}`}>
              <div className="">
                <div className="relative rounded-2xl w-full md:h-[320px] overflow-hidden">
                  <Image
                    src={work.imageSrc}
                    alt={work.title}
                    className="object-cover hover:scale-110 h-full transition-all ease-in-out duration-500"
                    width={400}
                    height={320}
                  />
                </div>
                <div className="flex gap-1 items-center justify-between pt-3">
                  <h3 className="text-2xl font-medium font-helveticaNowDisplayBold tracking-wide">
                    {work.title}
                  </h3>
                </div>
                <p className="leading-7 text-[#0C0C0CB0] text-base md:text-lg font-medium font-helveticaNowDisplayRegular">
                  {work.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sanity Posts Section */}
      <div className="w-full mt-20">
        <h2 className="text-3xl font-semibold font-helveticaNowDisplayBold mb-10 text-center">
          All Sermons
        </h2>
        
        {/* Grid layout for Sanity posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sanityPosts.map((post, index) => (
            <div key={index} className="bg-transparent rounded-lg">
              {/* Media Display */}
              {post.mediaType === "image" && post.imageUrl && (
                <div className="relative rounded-2xl w-full h-[320px] overflow-hidden mb-4">
                  <Image
                    src={post.imageUrl}
                    alt={post.title || 'Sermon image'}
                    className="object-cover hover:scale-110 h-full transition-all ease-in-out duration-500"
                    width={400}
                    height={320}
                  />
                </div>
              )}
              
              {post.mediaType === "video" && post.mediaSrc && (
                <div className="relative rounded-2xl w-full h-[320px] overflow-hidden mb-4">
                  <video
                    src={post.mediaSrc}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  >
                    <source src={post.mediaSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              
              {post.mediaType === "webp" && post.imageUrl && (
                <div className="relative rounded-2xl w-full h-[320px] overflow-hidden mb-4">
                  <Image
                    src={post.imageUrl}
                    alt={post.title || 'Sermon image'}
                    className="object-cover hover:scale-110 h-full transition-all ease-in-out duration-500"
                    width={400}
                    height={320}
                  />
                </div>
              )}
              
              {post.mediaType === "audio" && post.imageUrl && (
                <div className="relative rounded-2xl w-full h-[320px] overflow-hidden mb-4">
                  <Image
                    src={post.imageUrl}
                    alt={post.title || 'Audio cover'}
                    className="object-cover hover:scale-110 h-full transition-all ease-in-out duration-500"
                    width={400}
                    height={320}
                  />
                </div>
              )}

              {/* Content */}
              <div className="pt-3">
                <h3 className="text-2xl font-medium font-helveticaNowDisplayBold tracking-wide mb-2">
                  {post.title}
                </h3>
                
                {post.description && (
                  <p className="leading-7 text-[#0C0C0CB0] text-base md:text-lg font-medium font-helveticaNowDisplayRegular mb-4">
                    {post.description}
                  </p>
                )}
                
                {/* Published date */}
                {post.publishedAt && (
                  <p className="text-gray-500 text-sm font-medium mb-4 font-helveticaNowDisplayRegular">
                    {formatDate(post.publishedAt)}
                  </p>
                )}
                
                {/* Audio Player for audio posts */}
                {post.mediaType === "audio" && post.audioSrc && (
                  <div className="mt-4">
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
                        <source src={post.audioSrc} type="audio/mpeg" />
                        <source src={post.audioSrc} type="audio/wav" />
                        <source src={post.audioSrc} type="audio/ogg" />
                        Your browser does not support the audio element.
                      </audio>
                      
                      {/* Custom play/pause button */}
                      <button
                        onClick={(event) => handleAudioToggle(index, event)}
                        className="bg-[#dccfbe] text-black p-4 px-5 font-helveticaNowDisplayRegular rounded-lg mt-2"
                      >
                        {playingAudio === index ? (
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-5 h-5 ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                            <span className="text-gray-800">Pause</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-5 h-5 ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-gray-800">Listen</span>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllMinistriesSermons;