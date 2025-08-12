import React from "react";

const Education = () => {
  return (
    <section className="mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-16">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white text-center">
        Educational Qualification
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SSC Card */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-[#24583C]">
            Secondary School Certificate (SSC) - Science
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            Sammilani Secondary School
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Year of Completion: [Your SSC Completion Year]
          </p>
        </div>

        {/* HSC Card */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-[#24583C]">
            Higher Secondary Certificate (HSC) - Science
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            Abdul High City College, Narail
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Year of Completion: [Your HSC Completion Year]
          </p>
        </div>

        {/* Current Study Card */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-[#24583C]">
            Currently Studying
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            Bachelor of Business Administration (BBA)
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            Nation University
          </p>
          <p className="text-gray-700 dark:text-gray-300 italic">(Ongoing)</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
