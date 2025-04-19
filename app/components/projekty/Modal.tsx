import React from 'react';

interface Image {
  src: string;
  caption: string;
}

interface Section {
  title1?: string;
  title2?: string;
  content: string;
  images: Image[];
}

interface ModalProps {
    title: string; 
    sections: Section[];
}

export default function Modal({ title, sections }: ModalProps) {
  return (
    <div className="flex flex-col justify-left text-left gap-6">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="bg-fialova h-1 w-32 mb-2"></div>
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col gap-4">
          {section.title1 && <h1 className="text-2xl font-semibold">{section.title1}</h1>}
          {section.title2 && <h2 className="text-xl font-semibold">{section.title2}</h2>}
          <p className="text-sm font-light leading-[150%]">{section.content}</p>

          {/* Obrázky s popisky */}
          {section.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.images.map((image, idx) => (
                <div key={idx} className="flex flex-col items-left">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-auto rounded-md pointer-events-none"
                    />
                  </div>
                  {image.caption && (
                    <span className="text-[0.7rem] font-light mt-2 italic">{image.caption} </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
