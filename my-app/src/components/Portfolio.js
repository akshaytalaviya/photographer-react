import React, { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: ["print", "marketing"],
      img: "http://127.0.0.1:5500/anushka/assets/img/portfolio/1.jpg",
      title: "Digital Marketing",
      description: "Agency work",
      modalId: "projectModal1",
    },
    {
      id: 2,
      category: ["web", "media"],
      img: "http://127.0.0.1:5500/anushka/assets/img/portfolio/2.jpg",
      title: "Website Design",
      description: "Design",
      modalId: "projectModal2",
    },
    {
      id: 3,
      category: ["video", "logo"],
      img: "http://127.0.0.1:5500/anushka/assets/img/portfolio/3.jpg",
      title: "UI/UX Design",
      description: "Company work",
      modalId: "projectModal3",
    },
    {
      id: 4,
      category: ["web", "design"],
      img: "http://127.0.0.1:5500/anushka/assets/img/portfolio/4.jpg",
      title: "WordPress Project",
      description: "Client work",
      modalId: "projectModal4",
    },
    {
      id: 5,
      category: ["marketing", "logo"],
      img: "http://127.0.0.1:5500/anushka/assets/img/portfolio/5.jpg",
      title: "Product Branding",
      description: "Branding",
      modalId: "projectModal5",
    },
    {
      id: 6,
      category: ["marketing", "logo"],
      img: "http://127.0.0.1:5500/anushka/assets/img/portfolio/6.jpg",
      title: "Logo Design",
      description: "Image",
      modalId: "projectModal6",
    },
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="portfolio_area py-12 px-4 sm:px-12 lg:px-24 font-serif">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">The Projects</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap bg-white rounded shadow-lg gap-1">
            {[
              "all",
              "design",
              "print",
              "logo",
              "marketing",
              "media",
              "web",
              "video",
            ].map((filter) => (
              <li
                key={filter}
                className={`cursor-pointer px-6 py-3 text-lg sm:text-xl font-medium border-r last:border-r-0 rounded-l-lg ${
                  activeFilter === filter
                    ? "bg-yellow-300 text-gray-800"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                
                onClick={() => handleFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects
            .filter((project) =>
              activeFilter === "all" || project.category.includes(activeFilter)
            )
            .map((project) => (
              <div
                key={project.id}
                className="single_portfolio_design bg-white p-6 rounded-lg shadow-lg border flex flex-col"
              >

                <div className="port_img mb-4 flex justify-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="port_content pt-6">
                  <p className="text-lg text-gray-600 underline">{project.description}</p>
                  <h2 className="text-xl sm:text-2xl font-semibold my-2">
                    <a href="#" data-bs-toggle="modal" data-bs-target={`#${project.modalId}`}>
                      {project.title}
                    </a>
                  </h2>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target={`#${project.modalId}`}
                    className="plus_btn inline-flex items-center justify-center bg-white border-2 border-yellow-300 text-yellow-300 rounded-full w-10 h-10 hover:bg-yellow-300 hover:text-white transition"
                  >
                    <span className="text-lg">+</span>
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Modal Implementation */}
      </div>
    </section>
  );
};

export default Portfolio;
