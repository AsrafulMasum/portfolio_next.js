import React from "react";
import eventImg from "./../public/event.png";
import recipeImg from "./../public/recipe.png";
import forumImg from "./../public/flarum.PNG";
import assignmentImg from "./../public/assignment.png";
import ProjectsCard from "./ProjectsCard";
import ShowReel from "./ShowReel";
import Button from "./Button";

function Projects() {
  return (
    <div className="bg-white py-20 md:py-12 lg:py-28">
      <ul className="timeline max-lg:timeline-compact timeline-vertical max-w-screen-xl mx-4 md:mx-10 xl:mx-auto space-y-16 lg:space-y-0">
        <li className="flex">
          <div className="timeline-start w-full">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              My recent <br />{" "}
              <span className="text-primary italic text-6xl md:text-7xl lg:text-9xl">works</span>
            </h2>
          </div>
          <div className="lg:hidden"><ShowReel /></div>
        </li>
        <li>
          <div className="timeline-end md:-mt-12 lg:-mt-48 lg:ml-12 xl:ml-20 group">
            <ProjectsCard
              title="Recipe Viewer Website"
              desc="Welcome to Recipe Realm, your ultimate destination for delicious and easy-to-follow recipes!"
              img={recipeImg}
              live="https://phassesment.web.app"
              code="https://github.com/AsrafulMasum/PH-Assessment"
            />
          </div>
        </li>
        <li>
          <div className="timeline-start lg:-mt-80 xl:-mt-[400px] lg:mr-12 xl:mr-20 group">
            <ProjectsCard
              title="Event Manegement Website"
              desc="E Guidance is a event management website with front-end only. It is a digital platform that simplifies the planning, promotion, and coordination of events."
              img={eventImg}
              live="https://e-mania.web.app"
              code="https://github.com/AsrafulMasum/E-Guidance"
            />
          </div>
        </li>
        <li>
          <div className="timeline-end lg:-mt-64 xl:-mt-60 lg:ml-12 xl:ml-20 group">
            <ProjectsCard
              title="forum discussions Website"
              desc="Flarum is a forum discussions website . Where users engage in discussions, share information, and connect with others around various topics."
              img={forumImg}
              live="https://forums-6b0ca.web.app"
              code="https://github.com/AsrafulMasum/Flarum"
            />
          </div>
        </li>
        <li>
          <div className="timeline-start lg:-mt-80 xl:-mt-[400px] lg:mr-12 xl:mr-20 group">
            <ProjectsCard
              title="Assignment Manegement Website"
              desc="eduCare is a education based website with assignments task . It is an online platform designed for students to manage coursework."
              img={assignmentImg}
              live="https://educare-fe496.web.app"
              code="https://github.com/AsrafulMasum/edu-Care"
            />
          </div>
        </li>
        <li>
          <div className="timeline-end lg:-mt-64 xl:-mt-60 lg:ml-12 xl:ml-20 group md:flex md:justify-center md:items-center md:gap-24 lg:block">
            <div>
              <h4 className="text-primary text-2xl font-bold">Get in Touch</h4>
              <p className="w-80 mt-2 mb-5 text-dark_black text-xl font-medium leading-[140%]">I&#39;m always excited to discuss new opportunities, collaborations, or to simply chat about creative ideas. Feel free to reach out!</p>
            </div>
            <Button
              text="Contact Me"
              styles="bg-transparent text-dark_black border border-primary"
              spanStyle="bg-primary text-white"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
