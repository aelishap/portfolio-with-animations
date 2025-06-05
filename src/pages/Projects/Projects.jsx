import { motion } from "framer-motion";
import Growder from "../../assets/images/growder.png"
import Inpackaging from "../../assets/images/inpackaging1.png"
import JewelPreview from "../../assets/images/jewelpreview.png"
import Caratwise from "../../assets/images/caratwise.png"
import NTS from "../../assets/images/nts.png"

const projects = [
  {
    title: "InPackaging",
    description:
      "Developed ticketing, franchise management, and order lifecycle handling for InPackaging, optimizing workflow with Next.js and backend APIs in a collaborative Agile environment.",
    src: Inpackaging,
    color: "#4a90e2",
    liveLink: "https://www.inpackaging.com/",
  },
  {
    title: "Growder B2B Platform",
    description:
      "Created a full-scale B2B order and product management platform with admin and sub-admin roles. Developed handling ticketing, user management, and order lifecycle. Worked in Agile teams of A6 developers, collaborating with QA and designers.",
    src: Growder,
    color: "#4a90e2",
    liveLink: "https://growder.com/",
  },
  {
    title: "JEWEL Preview CAD File Portal",
    description:
      "Developed a secure role-based CAD file portal with customer and admin access. Integrated Stripe & Razorpay payment gateways, full e-commerce flow, and order tracking using Next.js and Directus.",
    src: JewelPreview,
    color: "#4a90e2",
    liveLink: "https://development.jewelpreview.com/",
  },
   {
    title: "CaratWise",
    description: `Designed and developed advanced diamond selection and comparison features for the CaratWise platform. Implemented 3D diamond viewer integration, real-time filters, and interactive comparison tools to enhance the buying experience.`,
    src: Caratwise,
    color: "#4a90e2",
    liveLink: "https://development.caratwise.com/#/",
  },
   {
    title: "NTS Pro – Roofing Inspection Platform",
    description: `Built dynamic inspection forms with image uploads, real-time report tracking, and secure role-based access for roofing professionals.`,
    src: NTS,
    color: "#4a90e2",
    liveLink: "https://pro.ntsid.com/",
  },
];


// Container animation variants for staggering children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <main className="bg-[#04081A] pt-44 py-10 px-4 min-h-screen">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </motion.div>
    </main>
  );
}

function Card({ title, description, color, src, liveLink }) {
  return (
    <motion.div
      className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer"
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.5)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image */}
      <a href={liveLink} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={src}
          alt={title}
          className="w-full h-48 md:h-[260px] object-cover"
          loading="lazy"
        />
      </a>

      {/* Content */}
      <div className="px-4 py-8 flex flex-col flex-grow">
        {/* Title + Live Link Row */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-white text-lg font-semibold">{title}</h2>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-1 text-sm font-semibold rounded-full transition-colors duration-300 cursor-pointer"
            style={{
              backgroundColor: color,
              color: color === "#fff" ? "#000" : "#fff",
              boxShadow: `0 0 8px ${color}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = color;
              e.currentTarget.style.color = color === "#fff" ? "#000" : "#fff";
            }}
          >
            Live
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm flex-grow">{description}</p>
      </div>
    </motion.div>
  );
}
