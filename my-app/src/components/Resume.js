import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume_area py-12 px-4 sm:px-8 md:px-12 lg:px-24 font-serif">
      <div className="container mx-auto">
        <div className="section-title text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Resume</h1>
          <p className="text-gray-600 pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Section */}
          <div>
            <h4 className="timeline_title text-2xl font-semibold mb-8">Education</h4>
            <div className="single_timeline mb-10">
              <h4 className="text-xl font-bold">University of Toronto</h4> 
              <span className="active_year text-sm font-medium border-2 border-yellow-400 px-2 rounded">2007</span>
              <span className="active_company text-sm font-medium"> - Bachelor's Degree.</span>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusantium consectetur.</p>
            </div>
            <div className="single_timeline mb-10">
              <h4 className="text-xl font-bold">Programming Course</h4>
              <span className="active_year text-sm font-medium border-2 border-yellow-400 px-2 rounded">2010</span>
              <span className="active_company text-sm font-medium"> - iOS, Android.</span>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusantium consectetur.</p>
            </div>
            <div className="single_timeline mb-10 ">
              <h4 className="text-xl font-bold">Web Developer Courses</h4>
              <span className="active_year text-sm font-medium border-2 border-yellow-400 px-2 rounded">2012</span>
              <span className="active_company text-sm font-medium"> - WordPress and JavaScript.</span>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusantium consectetur.</p>
            </div>
            <div className="single_timeline">
              <h4 className="text-xl font-bold">University of Toronto</h4>
              <span className="active_year text-sm font-medium border-2 border-yellow-400 px-2 rounded">2012</span>
              <span className="active_company text-sm font-medium"> - WordPress and JavaScript.</span>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusantium consectetur.</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="sm:px-10">
            <h4 className="timeline_title text-2xl font-semibold mb-8">Experience</h4>
            <div className="single_timeline mb-10">
              <h4 className="text-xl font-bold">Digital Web Studio</h4>
              <span className="active_year text-sm font-medium border-2 border-yellow-400 px-2 rounded">2013</span>
              <span className="active_company text-sm font-medium"> - Designer.</span>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusantium consectetur.</p>
            </div>
            <div className="single_timeline mb-10">
              <h4 className="text-xl font-bold">ABC Studio</h4>
              <span className="active_year text-sm font-medium border-2 border-yellow-400 px-2 rounded">2016</span>
              <span className="active_company text-sm font-medium"> - Front-End Developer.</span>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusantium consectetur.</p>
            </div>
            <div className="single_timeline">
              <h4 className="text-xl font-bold">Envato Market</h4>
              <span className="active_year text-sm font-medium border-2 border-yellow-400 px-2 rounded">2017 to Present</span>
              <span className="active_company text-sm font-medium"> - Senior Developer.</span>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusantium consectetur.</p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h4 className="timeline_title text-2xl font-semibold mb-8">My Skills</h4>
            <div className="progress-bar-linear mb-5">
              <p className="progress-bar-text text-lg font-medium mb-2">Front-end Design <span className="float-right">75%</span></p>
              <div className="progress-bar bg-gray-300 h-3 rounded-full">
                <div className="bg-yellow-400 h-3 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="progress-bar-linear mb-5">
              <p className="progress-bar-text text-lg font-medium mb-2">Logo Design <span className="float-right">85%</span></p>
              <div className="progress-bar bg-gray-300 h-3 rounded-full">
                <div className="bg-orange-500 h-3 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="progress-bar-linear mb-5">
              <p className="progress-bar-text text-lg font-medium mb-2">WordPress <span className="float-right">80%</span></p>
              <div className="progress-bar bg-gray-300 h-3 rounded-full">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="progress-bar-linear mb-5">
              <p className="progress-bar-text text-lg font-medium mb-2">UX Research <span className="float-right">60%</span></p>
              <div className="progress-bar bg-gray-300 h-3 rounded-full">
                <div className="bg-red-500 h-3 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="progress-bar-linear">
              <p className="progress-bar-text text-lg font-medium mb-2">Digital Marketing <span className="float-right">90%</span></p>
              <div className="progress-bar bg-gray-300 h-3 rounded-full">
                <div className="bg-pink-400 h-3 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
