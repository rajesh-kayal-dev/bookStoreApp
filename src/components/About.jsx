import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col mt-16 dark:bg-slate-800 dark:text-white">
      
      {/* Main Content: About Section */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-blue-600">About Us</h2>
              
              <p className="text-lg lg:text-xl leading-relaxed ">
                Welcome to our bookstore! We are passionate about books and aim to provide a curated selection that caters to all readers.
              </p>
              
              <p className="text-lg lg:text-xl leading-relaxed mt-4 ">
                Our bookstore was founded with the mission to promote reading and literacy in our community. 
                We believe in the power of books to educate, inspire, and entertain.
              </p>
              
              <p className="text-lg lg:text-xl leading-relaxed mt-4 ">
                Whether you're looking for bestsellers, classics, or niche genres, we strive to offer a diverse 
                collection that meets the tastes and interests of our customers.
              </p>

              <p className="text-lg lg:text-xl leading-relaxed mt-4 ">
                At our bookstore, we value customer satisfaction and aim to provide a welcoming environment 
                where you can explore new titles, attend book signings, and engage in literary discussions.
              </p>
              
              <p className="text-lg lg:text-xl leading-relaxed mt-4 ">
                Thank you for visiting us online! We look forward to serving you and helping you discover your next great read.
              </p>
            </div>

            {/* Right Column: Placeholder Content */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To foster a love of reading and provide a welcoming community space where readers of all ages can discover and enjoy books.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default About;
