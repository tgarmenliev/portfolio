// Hobbies.js
import React, { useState } from 'react';

import image0 from '../assets/trains/train0.jpg';
import image1 from '../assets/trains/train1.jpg';
import image2 from '../assets/trains/train2.jpg';
import image3 from '../assets/trains/train3.jpg';
import image4 from '../assets/trains/train4.jpg';
import image5 from '../assets/trains/train5.jpg';
import image6 from '../assets/trains/train6.jpg';
import image7 from '../assets/trains/train7.jpg';
import image8 from '../assets/trains/train8.jpg';
import image9 from '../assets/trains/train9.jpg';

const Hobbies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="my-8">
      <header className="font-semibold text-lg md:text-2xl text-green-800 mb-4">Моята страст</header>
      <figure className="relative">
        <img
          src={images[currentIndex]}
          alt={`Train ${currentIndex + 1}`}
          style={{ width: '100%', height: '30rem', objectFit: 'cover' }}
          className="rounded-lg shadow-lg"
        />
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={handlePrev}>
          {'<'}
        </button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={handleNext}>
          {'>'}
        </button>
      </figure>
      <p className="mt-4 text-gray-700">
        Защо точно влакове? <br></br>Много мои връстници са големи фенове на колите. Аз пък съм фен на влаковете. Това е най-красивият, екологичен и приятен
        начин за пътуване. С него преоткривам светове. <br></br>Влаковете са моята страст. Те са моят живот. Те са моята любов. Те са моят свят.<br></br>
        Без шега! От 12 хиляди снимки в моята галерия на телефона, около 10к от тях са само на влакове. Отвътре, отвън, отляво, отдясно, отпред, отзад, ... отвсякъде!
        <br></br> Всяка снимка с влак е красива, а по-горе можете да видите и някои от моите любими и най-сполучливи. <br></br>Надявам се да ви харесат!
      </p>
      </section>
  );
};

export default Hobbies;
