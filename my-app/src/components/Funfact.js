import React from "react";

const Funfact = () => {
  const funFacts = [
    { count: "191", title: "Happy Clients", bgColor: "bg-yellow-400" },
    { count: "221", title: "Successful Projects", bgColor: "bg-green-200" },
    { count: "89", title: "UI/UX Projects", bgColor: "bg-orange-200" },
    { count: "33", title: "Team Members", bgColor: "bg-blue-200" },
  ];

  const ratings = [
    { rating: 4, title: "Quick and Good Support", description: "Quick and good support" },
    { rating: 4, title: "Quick and Good Support", description: "Quick and good support" },
    { rating: 4, title: "Very Responsive and Understanding", description: "Very responsive and understanding" },
    { rating: 4, title: "Nice Support", description: "Nice support" },
  ];

  return (
    <section id="funfact" className="funfact_area bg-green-50 py-12 px-4 md:px-12 lg:px-20 font-serif">
      <div className="container mx-auto">
        {/* Fun Facts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {funFacts.map((fact, index) => (
            <div key={index} className={`${fact.bgColor} p-5 rounded-lg`}>
              <h2 className="text-5xl font-bold">{fact.count}</h2>
              <h3 className="text-xl font-semibold mt-4">{fact.title}</h3>
            </div>
          ))}
        </div>

        {/* Ratings Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {ratings.map((review, index) => (
            <div key={index} className="rating_one bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-center space-x-1">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="bg-green-500 text-white px-2 py-1 rounded">⭐</span>
                ))}
              </div>
              <h5 className="font-bold text-lg mt-4">{review.title}</h5>
              <p className="text-gray-600 mt-2">{review.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funfact;



