import React from "react";
import eventImg from "./../public/event.png";
import recipeImg from "./../public/recipe.png";
import forumImg from "./../public/flarum.PNG";
import assignmentImg from "./../public/assignment.PNG.jpg";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <div className="bg-white py-28">
      <ul className="timeline max-lg:timeline-compact timeline-vertical max-w-screen-xl mx-4 md:mx-10 xl:mx-auto space-y-10 lg:space-y-0">
        <li>
          <div className="timeline-start w-full">
            <h2 className="text-7xl font-bold">
              My recent <br />{" "}
              <span className="text-primary italic text-9xl">works</span>
            </h2>
          </div>
        </li>
        <li>
          <div className="timeline-end lg:-mt-40 lg:ml-20 group">
            <ProjectsCard
              title="Recipe Viewer Website"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi et voluptatum suscipit earum laudantium velit non nemo obcaecati rem corporis!"
              img={recipeImg}
              live="https://phassesment.web.app"
              code="https://github.com/AsrafulMasum/PH-Assessment"
            />
          </div>
        </li>
        <li>
          <div className="timeline-start lg:-mt-52 lg:mr-20 group">
            <ProjectsCard
              title="Event Manegement Website"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi et voluptatum suscipit earum laudantium velit non nemo obcaecati rem corporis!"
              img={eventImg}
              live="https://e-mania.web.app"
              code="https://github.com/AsrafulMasum/E-Guidance"
            />
          </div>
        </li>
        <li>
          <div className="timeline-end lg:-mt-52 lg:ml-20 group">
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
          <div className="timeline-start lg:-mt-60 lg:mr-20 group">
            <ProjectsCard
              title="Event Manegement Website"
              desc="eduCare is a education based website with assignments task . It is an online platform designed for students to manage coursework."
              img={assignmentImg}
              live="https://educare-fe496.web.app"
              code="https://github.com/AsrafulMasum/edu-Care"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
