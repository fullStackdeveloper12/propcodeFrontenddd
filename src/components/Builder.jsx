import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from "../assets/builderimages/ambiance.webp"
import img2 from "../assets/builderimages/ashiana.webp"
import img3 from "../assets/builderimages/ats.webp"
import img4 from "../assets/builderimages/bestech.webp"
import img5 from "../assets/builderimages/birla.webp"
import img6 from "../assets/builderimages/hero.webp"
import img7 from "../assets/builderimages/centralpark.webp"
import img8 from "../assets/builderimages/elaan.webp"
import img9 from "../assets/builderimages/godrej - Copy.webp"
import img10 from "../assets/builderimages/m3m.webp"
import img11 from "../assets/builderimages/navraj.webp"
import img12 from "../assets/builderimages/omaxe.webp"
import img13 from "../assets/builderimages/max-estate.webp"
import img14 from "../assets/builderimages/consient.webp"
import img15 from "../assets/builderimages/krisumi.webp"
import img16 from "../assets/builderimages/bptb.webp"




const Builder = () => {
  // Array of image paths
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];

  // Divide images into two rows
  const midPoint = Math.ceil(images.length / 2);
  const firstRowImages = images.slice(0, midPoint);
  const secondRowImages = images.slice(midPoint);

  // Image row component
  const ImageRow = ({ images, direction }) => (
    <Marquee direction={direction} speed={40} gradient={false}>
      <div className="flex">
        {images.map((src, index) => (
          <div key={index} className="border p-2 w-40 h-24 flex-shrink-0 mx-4">
            <img
              src={src}
              alt={`builder-image-${index}`}
              width={120}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </Marquee>
  );

  return (


    
    <div className="text-center lg:my-28 my-12">
      <h3 className="text-[#0B090A] text-2xl md:text-4xl lg:text-4xl font-bold">Trusted by Our 50+ prestige builders!</h3>
      <div className="space-y-16 mt-14">
        <div className="">
          <ImageRow images={firstRowImages} direction="left" />
        </div>
        <div className="">
          <ImageRow images={secondRowImages} direction="right" />
        </div>
      </div>
    </div>
  );
};

export default Builder;
