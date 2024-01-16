import { motion } from "framer-motion";
import useResponsiveSlidesPerView from "./../../Hooks/useResponsiveSlidesPerView";

// import Swiper core and required modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const variants = {
  initial: {
    opacity: 0,
    x: window.innerWidth < 300 ? -window.innerWidth*0.3 : -300,
    y: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      type: "tween",
      staggerChildren: 0.5,
    },
  },
};

export default function Services() {
  const services = [
    {
      title: "Web Dev",
      description:
        "I specialize in creating responsive and user-friendly websites tailored to your specific needs. From simple static websites to complex web applications, I've got you covered.",
    },
    {
      title: "Mobile App Dev",
      description:
        "Need a mobile app for your business? I can develop native or cross-platform mobile applications that run smoothly on iOS and Android devices, providing a seamless user experience.",
    },
    {
      title: "UI/UX Design",
      description:
        "A visually appealing and intuitive user interface is crucial for engaging users. I can design modern and eye-catching UIs that enhance user experience and drive conversions.",
    },
    {
      title: "E-commerce",
      description:
        "Want to sell your products or services online? I can build robust e-commerce platforms with secure payment gateways, inventory management, and personalized shopping experiences.",
    },
  ];

  const textHighlightAnimation = {
    color: "#ffa500",
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  const breakpointSliderList = {
    1200: 4,
    900: 3,
    800: 2,
    600: 1,
  };

  const swiperConfig = {
    modules: [Navigation, Pagination],
    spaceBetween: 5,
    slidesPerView: useResponsiveSlidesPerView(breakpointSliderList),
    navigation: true,
    pagination: { clickable: true },
  };

  return (
    <motion.div
      className="flex flex-col space-y-[3%] p-5 cursor-default max-services-md:space-y-[10%]"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="flex flex-row items-center justify-end max-services-md:flex-col max-services-md:items-end"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.p
          className="w-1/3  pr-3 text-3xl text-right font-extralight max-services-md:w-[70%] max-services-md:pr-0"
          whileHover={textHighlightAnimation}
          style={{
            fontSize: "clamp(0.9375rem, 0.5208rem + 1.6667vw, 1.875rem)",
          }}
        >
          I focus on helping your brand grow and move forward
        </motion.p>
        <hr className="w-1/4 border-gray-500" />
      </motion.div>

      <motion.div
        className="flex gap-5 max-services-md:flex-col-reverse max-services-md:gap-2 max-services-md:items-center"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.img
          className="object-cover h-32 rounded-full w-72 outline outline-[#ffa500]  max-services-md:h-12"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "tween" },
          }}
          src="/people.webp"
          alt=""
        />
        <p
          className="text-8xl font-extralight"
          style={{
            fontSize: "clamp(1.875rem, 0.0417rem + 7.3333vw, 6rem)",
          }}
        >
          <motion.b className="font-bold" whileHover={textHighlightAnimation}>
            Unique
          </motion.b>{" "}
          Ideas
        </p>
      </motion.div>

      <motion.div
        className="flex flex-row-reverse gap-5 max-services-md:flex-col-reverse max-services-md:gap-2 max-services-md:items-center"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.button
          className="h-32 rounded-full w-72 outline outline-[#ffa500] text-2xl  max-services-md:h-12"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ffa500",
            color: "#000",
            transition: { duration: 0.3, type: "tween" },
          }}
        >
          What I Do ?
        </motion.button>
        <p
          className="text-8xl font-extralight"
          style={{
            fontSize: "clamp(1.875rem, 0.0417rem + 7.3333vw, 6rem)",
          }}
        >
          <motion.b className="font-bold" whileHover={textHighlightAnimation}>
            For Your
          </motion.b>{" "}
          Business
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-5"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <h2
          className="text-4xl font-extralight"
          style={{
            fontSize: "clamp(1.5625rem, 1.2569rem + 1.2222vw, 2.25rem)",
          }}
        >
          <motion.b className="font-bold" whileHover={textHighlightAnimation}>
            Services
          </motion.b>{" "}
          Offered
        </h2>
        <motion.ul
          className="flex "
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <Swiper
            {...swiperConfig}
            className="Swiper items-center justify-center w-[88vw]"
            style={{
              "--swiper-navigation-color": "#ffa500",
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-navigation-size":"35px",
              "--swiper-navigation-sides-offset":"0px",
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.li
                  className="flex flex-col gap-5 border border-[#ffa500] px-5 py-3 "
                  whileHover={{
                    // scale: 1.05,
                    backgroundColor: "#d3d3d3",
                    color: "#13132e",
                    transition: { duration: 0.3, type: "tween" },
                  }}
                >
                  <h1
                    className="text-3xl font-bold h-1/4"
                    style={{
                      fontSize:
                        "clamp(0.9375rem, 0.5208rem + 1.6667vw, 1.875rem)",
                    }}
                  >
                    {service.title}{" "}
                  </h1>
                  <p className="overflow-hidden text-justify font-extralight h-2/4 line-clamp-4">
                    {service.description}
                  </p>
                  <motion.button
                    className="bg-[#ffa500] text-black px-5 py-3 rounded-sm w-full mb-5 h-1/4"
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3, type: "tween" },
                    }}
                    whileTap={{
                      scale: 0.9,
                      transition: { duration: 0.3, type: "tween" },
                    }}
                  >
                    Learn More
                  </motion.button>
                </motion.li>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
