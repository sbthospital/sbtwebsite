import React from 'react';

const testimonials = [
  {
    name: 'Arjun kumar',
    title: 'Recovered Patient',
    feedback: 'The care I received was exceptional. Watch my story!',
    videoUrl: 'https://www.youtube.com/embed/uMIaj_A05Rg',
  },
  {
    name: 'Mushu',
    title: 'Father of a Patient',
    feedback: 'Amazing staff and outstanding service throughout our stay.',
    videoUrl: 'https://www.youtube.com/embed/uMIaj_A05Rg',
  },
  {
    name: 'Sruthi Menion',
    title: 'Surgery Patient',
    feedback: 'Watch how my recovery journey was made possible here.',
    videoUrl: 'https://www.youtube.com/embed/uMIaj_A05Rg',
  }
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-12">Watch and read what our patients have to say about their healing journey.</p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Manual aspect-ratio using padding trick */}
              <div className="relative w-full pt-[56.25%] bg-black">
                <iframe
                  src={testimonial.videoUrl}
                  title={`Testimonial from ${testimonial.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-6 text-left">
                <p className="text-gray-800 italic mb-3">“{testimonial.feedback}”</p>
                <div>
                  <p className="font-semibold text-blue-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;