import React from "react";
import img1 from "../../../assets/blackbelt.png";
import img2 from "../../../assets/web11.png";

const Certificate = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My <span className="text-neutral">Achievements </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Certificate 1 */}
        <div
          data-aos="zoom-in"
          className="card bg-secondary shadow-xl border border-primary/20 hover:shadow-primary/50 hover:-translate-y-2 transition-all duration-300"
        >
          <figure className="px-4 pt-4">
            <img
              src={img1}
              alt="Black Belt Certificate"
              className="rounded-xl w-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-neutral font-semibold">
              Black Belt Certificate
            </h3>
            <p className="text-sm text-primary/80">
              Awarded by Programming Hero for completing all 12 assignments,
              mini projects, mock interview, and final project with excellence.
            </p>
          </div>
        </div>

        {/* Certificate 2 */}
        <div
          data-aos="zoom-in"
          className="card bg-secondary shadow-xl border border-secondary/20 hover:shadow-secondary/50 hover:-translate-y-2 transition-all duration-300"
        >
          <figure className="px-4 pt-4">
            <img
              src={img2}
              alt="Web Development Certificate"
              className="rounded-xl w-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-neutral font-semibold">
              Web Development Completion
            </h3>
            <p className="text-sm text-primary/80">
              Successfully completed the Full Stack Web Development course from
              Programming Hero, mastering MERN stack and modern web practices.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-primary">
        “Hard work pays off — this is just the beginning.”
      </p>
    </div>
  );
};

export default Certificate;
