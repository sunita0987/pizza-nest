import React from "react";
import { GALLERY_IMG } from "../utils/helper";

// const Gallery = () => {
//   return (
//     <div className="max-w-[1320px] mx-auto px-3 mt-[77px] text-center">
//       <h3 className="text-orange-500 font-semibold mb-2">Our Gallery</h3>
//       <h2 className="text-3xl md:text-4xl font-bold mb-10">
//         A Glimpse Into Our Pizza World
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-3 md:gap-6">
//         {GALLERY_IMG.map((img, index) => (
//           <div
//             key={index}
//             className={`overflow-hidden rounded-2xl ${img.colSpan} ${img.rowSpan}`}
//           >
//             <img
//               src={img.image}
//               alt="gallery"
//               className=" object-cover transition duration-300"
//             />
//           </div>
//         ))}
//       </div>

//       <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition">
//         View More
//       </button>
//     </div>
//   );
// };

// export default Gallery;
const PizzaGallery = () => {
  return (
    <div className="max-w-[1140px] px-3 mx-auto">
      <div className="grid lg:grid-cols-5 gap-6">
        {GALLERY_IMG.map((item, index) => (
          <div
            className={`w-full h-[250px] overflow-hidden rounded-xl ${item.colSpan}${item.rowSpan}`}
          >
            <img
              key={index}
              src={item.image}
              alt="img"
              className="w-full  object-cover h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaGallery;
