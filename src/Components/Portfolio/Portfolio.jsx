import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Built a robust e-commerce platform using React, providing users with a seamless shopping experience. Implemented features such as product catalog, cart functionality, and secure payment processing.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Developed a dynamic blog using Next.js, allowing for efficient content management and rendering. Integrated features like server-side rendering for improved performance and SEO optimization.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Created a versatile web application using Vanilla JavaScript, showcasing proficiency in core web technologies. Implemented interactive user interfaces and optimized performance for a smooth user experience.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Designed and developed a music streaming app with features like playlist creation, song recommendations, and a user-friendly interface. Integrated APIs for music data and focused on delivering an immersive audio experience.",
  },
];

function Project({ project, sectionStyle }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section
      className={`${sectionStyle} flex items-center justify-center gap-5 px-[5vw]`}
    >
      <img
        ref={ref}
        className="w-1/2 rounded-lg"
        src={project.img}
        alt={project.title}
      />
      <motion.div
        className="flex flex-col items-center justify-center w-1/2 gap-10"
        style={{ y }}
      >
        <h2 className="self-start text-5xl font-bold">{project.title}</h2>
        <p className="text-2xl text-gray-600">{project.desc}</p>
        <button className="self-start font-bold rounded-lg bg-[#ffa500] text-[#13132e] px-5 py-2">
          See Demo
        </button>
      </motion.div>
    </section>
  );
}

export default function Portfolio({ sectionStyle }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <main
      ref={ref}
      className="relative flex flex-col items-center justify-center"
    >
      <div className="sticky top-0 left-0 z-50 text-center py-7">
        <h1 className="text-[#ffa500] text-7xl">Featured Works</h1>
        <motion.div className={`h-3 bg-white`} style={{ scaleX }} />
      </div>
      
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          sectionStyle={sectionStyle}
        />
      ))}
    </main>
  );
}
