// 'use client'
// import { Recent, getRecents } from "@/sanity/queries/recents";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// // interface PreviousWorksProps {
// //   works: {
// //     title: string;
// //     imgSrc?: string | undefined;
// //     mediaSrc?: string | undefined;
// //     mediaType?: string;
// //     span?: boolean;
// //     slug?: string;
// //   }[];
// // }

// const PreviousWorks = async () => {


//   return (
//     <section className="py-10 mb-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6">Recent Works</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {recentData.map((work, index) => (
//             <Link className="bg-white rounded-lg shadow-lg" key={index} href={`/works/${work.slug?.current || '/'}`}>
//               <div
//               key={index}
//               className={`bg-white rounded-lg shadow-lg ${work.span ? "lg:col-span-2 lg:row-span-2" : ""}`}
//             >
//               {work.mediaType === "image" && (
//                 <img
//                   src={work.mediaSrc}
//                   alt={work.title}
//                   className="w-full h-auto object-cover mb-4 rounded"
//                 />
//               )}
//               {work.mediaType === "video" && (
//                 <video
//                   src={work.mediaSrc}
//                   autoPlay
//                   loop
//                   muted
//                   className="w-full h-auto object-cover mb-4 rounded"
//                 >
//                   <source src={work.mediaSrc} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               )}
//               {work.mediaType === "webp" && (
//                 <img
//                   src={work.mediaSrc}
//                   alt={work.title}
//                   className="w-full h-auto object-cover mb-4 rounded"
//                 />
//               )}
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold">{work.title}</h3>
//               </div>
//             </div>
//             </Link>
//           ))}
//         </div>
//         <div className="py-6 mt-10 text-center">
//           <Link
//             href="/works"
//             className="text-2xl text-gray-400 hover:text-gray-300 duration-300 ease-in-out font-bold"
//           >
//             View All Works
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PreviousWorks;
