import React from "react";
import petshopGif from "../assets/petshopApp.gif";

const ProjectCard = ({
  title,
  description,
  demoLink,
  githubLink,
  tags,
  projectsImages,
  alt,
}) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold mb-2">
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
      >
        {title}
      </a>
    </h3>
    <p className="text-text-secondary mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-secondary text-text-secondary px-2 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
    {githubLink &&
      ((
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          View on GitHub
        </a>
      ),
      (
        <div class="pt-4">
          <img
            src={projectsImages}
            alt={alt}
            className="w-60 h-85 object-contain"
          />
        </div>
      ))}
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Bradesco",
      description:
        "Banking app by Bradesco, one of the largest banks in Brazil. I was part of the iOS team, responsible for the development and maintenance of the app, using Swift.",
      demoLink: "https://apps.apple.com/br/app/banco-bradesco/id336954985",
      tags: ["Mobile", "iOS", "Frontend"],
    },
    {
      title: "Itaú",
      description:
        "Banking app by Itaú, one of the largest banks in Brazil. I was part of the iOS team, responsible for the development and maintenance of the app, using Swift.",
      demoLink: "https://apps.apple.com/br/app/banco-ita%C3%BA-conta-cart%C3%A3o-e/id474505665",
      tags: ["Mobile", "iOS", "Frontend"],
    },
    {
      title: "BB Investimentos",
      description:
        "Investiments app by banco do brasil, I was part of the iOS team, responsible for the development and maintenance of the app, using Swift and SwiftUI.",
      demoLink: "https://apps.apple.com/br/app/investimentos-bb-taxa-zero/id1120718299",
      tags: ["Mobile", "iOS", "Frontend"],
    },
    {
      title: "Petshop-System",
      description: (
        <p className="mt-2">
          <ul class="list-disc pl-5">
            <p class="font-bold px-2">
              {" "}
              Led iOS development for Customer App (UIKit) and Employee App
              (SwiftUI) in a distributed Petshop system integrating Java, Go,
              and Apache Kafka.
            </p>
            <li>
              Develop and enhance two pivotal applications for pet shop
              management: one in UIKit catering to clients and another in
              SwiftUI tailored for employees.
            </li>
            <li>
              Ensure a seamless and intuitive experience for clients,
              facilitating service scheduling, product purchases, and effortless
              navigation.
            </li>
            <li>
              Focus on operational efficiency through the SwiftUI app,
              furnishing tools for scheduling management, product inventory, and
              internal communication.
            </li>
            <li>
              Continuously integrate with the pet-shop's core system, developed
              in Java and leveraging technologies like Redis, Kafka, and GoLang,
              to ensure seamless interoperability.
            </li>
        =    <li>
              Proactively maintain the robustness and performance of iOS
              applications, leveraging observability tools and ensuring a fluid
              experience for both clients and employees.
            </li>
          </ul>
        </p>
      ),
      githubLink: "https://github.com/petshop-system",
      tags: ["iOS", "UIKit", "Swift"],
      projectsImages: petshopGif,
      alt: "Petshop System",
    },
    {
      title: "Tiktok App",
      description:
        "I participated in a project that implemented a possibility to buy telecom credits inside the Tiktok App. In this project I colaborated with the TikTok Developers team.",
      demoLink: "https://www.tiktok.com/",
      tags: ["Mobile", "iOS", "Frontend"],
    },
    {
      title: "Energisa Website",
      description:
        "Energisa is a eletric company in Brazil, this project is a website for the company and allow bill payments via PIX. I was part of the frontend team, reposible for the web and mobile version of the website.",
      demoLink: "https://www.energisa.com.br/",
      tags: ["Web", "Frontend", "PIX"],
    },
    {
      title: "Portal Recarga Vivo",
      description:
        "Vivo is a large telecommunication company in Brazil, this project is a portal for recharge your phone, I was part of the frontend team, reposible for the web and mobile version of the website.",
      demoLink: "https://portalrecarga.vivo.com.br",
      tags: ["Mobile", "Web", "Frontend", "React"],
    },
  ];

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-3">Projects</h2>
      <p class="text-xs font-bold pb-3 mt-1`">
        Click on the name of the project to be redirected to the page.
      </p>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
