// import React from "react";
// import { Zoom } from "react-reveal";
// import image1 from "../../../public/gallery1.jpg";
// import image2 from "../../../public/gallery2.jpg";
// import image3 from "../../../public/gallery3.jpg";
// import image4 from "../../../public/gallery4.jpg";
// import image5 from "../../../public/gallery5.jpg";
// import image6 from "../../../public/gallery6.jpg";
// import image7 from "../../../public/gallery7.jpg";
// import image8 from "../../../public/gallery8.jpg";
// import image9 from "../../../public/gallery9.jpg";

// const Gallery = () => {
//   return (
//     <div className="w-full   md:p-10">
//       <h1 className="heading mb-10">Gallery</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
//         <Zoom>
//           <div className="rounded-3xl overflow-hidden shadow-md">
//             <img className="w-full h-64 object-cover" src={image1} alt="" />
//           </div>
//         </Zoom>
//         <Zoom delay={200}>
//           <div className="rounded-3xl overflow-hidden shadow-md">
//             <img className="w-full h-96 object-cover" src={image2} alt="" />
//           </div>
//         </Zoom>
//         <Zoom delay={400}>
//           <div className="rounded-3xl overflow-hidden shadow-md">
//             <img className="w-full h-64 object-cover" src={image3} alt="" />
//           </div>
//         </Zoom>
//         <Zoom>
//           <div className="rounded-3xl overflow-hidden shadow-md">
//             <img className="w-full h-96 object-cover" src={image4} alt="" />
//           </div>
//         </Zoom>
//         <Zoom delay={200}>
//           <div className="rounded-3xl overflow-hidden shadow-md">
//             <img className="w-full h-96 object-cover" src={image5} alt="" />
//           </div>
//         </Zoom>
//         <Zoom delay={400}>
//           <div className="rounded-3xl overflow-hidden shadow-md">
//             <img className="w-full h-64 object-cover" src={image6} alt="" />
//           </div>
//         </Zoom>
//         <Zoom>
//           <div className="rounded-3xl overflow-hidden shadow-md">
//             <img className="w-full h-64 object-cover" src={image7} alt="" />
//           </div>
//         </Zoom>
//         <Zoom delay={200}>
//           <div className="rounded-3xl overflow-hidden shadow-md">
//             <img className="w-full h-96 object-cover" src={image8} alt="" />
//           </div>
//         </Zoom>
//         <Zoom delay={400}>
//           <div className="rounded-3xl overflow-hidden shadow-md">
//             <img className="w-full h-64 object-cover" src={image9} alt="" />
//           </div>
//         </Zoom>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


// import React from "react";
// import { Zoom } from "react-reveal";
// import image1 from "../../../public/gallery1.jpg";
// import image2 from "../../../public/gallery2.jpg";
// import image3 from "../../../public/gallery3.jpg";
// import image4 from "../../../public/gallery4.jpg";
// import image5 from "../../../public/gallery5.jpg";
// import image6 from "../../../public/gallery6.jpg";
// import image7 from "../../../public/gallery7.jpg";
// import image8 from "../../../public/gallery8.jpg";
// import image9 from "../../../public/gallery9.jpg";

// const Gallery = () => {
//   return (
//     <div className="w-full md:p-10">
//       <h1 className="heading mb-10">Gallery</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
//         {[
//           { src: image1, alt: "Image 1" },
//           { src: image2, alt: "Image 2" },
//           { src: image3, alt: "Image 3" },
//           { src: image4, alt: "Image 4" },
//           { src: image5, alt: "Image 5" },
//           { src: image6, alt: "Image 6" },
//           { src: image7, alt: "Image 7" },
//           { src: image8, alt: "Image 8" },
//           { src: image9, alt: "Image 9" },
//         ].map((image, index) => (
//           <Zoom key={index} delay={index * 200}>
//             <div className="rounded-3xl overflow-hidden shadow-md relative group">
//               <img
//                 className="w-full h-64 object-cover"
//                 src={image.src}
//                 alt={image.alt}
//               />
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black transition-opacity group-hover:opacity-75">
//                 <button className="bg-white text-gray-800 py-2 px-4 rounded-full hover:bg-gray-800 hover:text-white">
//                   View
//                 </button>
//               </div>
//             </div>
//           </Zoom>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import { Zoom } from "react-reveal";
import image1 from "../../../public/gallery1.jpg";
import image2 from "../../../public/gallery2.jpg";
import image3 from "../../../public/gallery3.jpg";
import image4 from "../../../public/gallery4.jpg";
import image5 from "../../../public/gallery5.jpg";
import image6 from "../../../public/gallery6.jpg";
import image7 from "../../../public/gallery7.jpg";
import image8 from "../../../public/gallery8.jpg";
import image9 from "../../../public/gallery9.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full md:p-10">
      <h1 className="heading mb-10">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
        {[
          { src: image1, alt: "Image 1" },
          { src: image2, alt: "Image 2" },
          { src: image3, alt: "Image 3" },
          { src: image4, alt: "Image 4" },
          { src: image5, alt: "Image 5" },
          { src: image6, alt: "Image 6" },
          { src: image7, alt: "Image 7" },
          { src: image8, alt: "Image 8" },
          { src: image9, alt: "Image 9" },
        ].map((image, index) => (
          <Zoom key={index} delay={index * 200}>
            <div
              className="rounded-3xl overflow-hidden shadow-md relative group cursor-pointer"
              onClick={() => openImageModal(image)}
            >
              <img
                className="w-full h-64 object-cover"
                src={image.src}
                alt={image.alt}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black transition-opacity group-hover:opacity-75">
                <button className="bg-white text-gray-800 py-2 px-4 rounded-full hover:bg-gray-800 hover:text-white">
                  View
                </button>
              </div>
            </div>
          </Zoom>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-4 max-w-[80%] max-h-[80%] mx-auto rounded-lg overflow-hidden relative">
            <img
              className="w-full h-full object-contain"
              src={selectedImage.src}
              alt={selectedImage.alt}
            />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-600"
              onClick={closeImageModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
