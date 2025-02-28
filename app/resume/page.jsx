"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam maxime ducimus.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Negin Derakhshan"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+44) 790 891 8933"
    },
    {
      fieldName: "Experience",
      fieldValue: "4 Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "British, Persian"
    },
    {
      fieldName: "Email",
      fieldValue: "NEG.DRN@GMAIL.COM"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Persian"
    }
  ]
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam maxime ducimus.",
  items: [
    {
      company: "Capgemini",
      position: "Software Engineer - Full Stack Developer",
      duration: "2021 - Present",
      projects: [
        {
          name: "Project 1",
          position: "Position 1",
          description: "Project 1 description"
        },
        {
          name: "Project 2",
          position: "Position 2",
          description: "Project 2 description"
        },
        {
          name: "Project 3",
          position: "Position 3",
          description: "Project 3 description"
        }
      ]
    },
    {
      company: "Code Your Future",
      position: "Full-Stack Developer Trainee ",
      duration: "2020 - 2021",
      projects: []
    }
  ]
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam maxime ducimus.",
  items: [
    {
      institution: "Code Your Future",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2011"
    },
    {
      institution: "Azad University of Tehran",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2011"
    }
  ]
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam maxime ducimus.",
  skillList: [{ icon: <FaHtml5 />, name: "html 5" }]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
