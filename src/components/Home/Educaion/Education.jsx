import React from "react";

const Education = () => {
  return (
    <section className="mx-auto p-8 bg-secondary rounded-lg shadow-md mt-16">
      <h2 className="text-4xl font-bold mb-10 text-primary text-center">
        Educational Qualification
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SSC Card */}
        <div className="bg-base-100 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-primary">
            Secondary School Certificate (SSC) - Science
          </h3>
          <p className="text-primary mb-1">Sammilani Secondary School</p>
          <p className="text-primary">Year of Completion: 2018</p>
        </div>

        {/* HSC Card */}
        <div className="bg-base-100 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-primary">
            Higher Secondary Certificate (HSC) - Science
          </h3>
          <p className="text-primary mb-1">
            Abdul High City College, Narail
          </p>
          <p className="text-primary">Year of Completion: 2020</p>
        </div>

        {/* Current Study Card */}
        <div className="bg-base-100 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-primary">
            Currently Studying
          </h3>
          <p className="text-primary mb-1">
            Bachelor of Business Administration (BBA)
          </p>
          <p className="text-primary mb-1">National University</p>
          <p className="text-primary italic">(Ongoing)</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
