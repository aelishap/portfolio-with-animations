import { motion } from "framer-motion";

const projects = [
  {
    title: "Olova! A Lightweight JavaScript Library",
    description:
      "A lightweight JavaScript library for creating beautiful, responsive UI components.",
    src: "rock.jpg",
    link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
    color: "#5196fd",
    githubLink: "https://github.com/olovajs/olova",
    liveLink: "https://olova.js.org/",
  },
  {
    title: "A sleek portfolio built with React and Tailwind CSS ",
    description:
      "A sleek portfolio built with React and Tailwind CSS to showcase your skills, projects, and experience in a modern design.",
    src: "tree.jpg",
    link: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
    color: "#8f89ff",
    githubLink: "https://github.com/seraprogrammer/portfolio",
    liveLink: "https://codervai.vercel.app",
  },
  {
    title: "🚀 CodeWhisperer",
    description:
      "🚀 CodeWhisperer A powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
    src: "water.jpg",
    link: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
    color: "#fff",
    githubLink: "https://github.com/seraprogrammer/codewhisperer",
    liveLink: "https://codewhisperer.vercel.app/",
  },
  {
    title: "CodeKori 🔥",
    description:
      "CodeKori is a powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
    src: "house.jpg",
    link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    color: "#ed649e",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://codekori.js.org",
  },
];

export default function Projects() {
  return (
    <main className="bg-black pt-44 py-10 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </main>
  );
}

function Card({ title, description, link, color, githubLink, liveLink }) {
  return (
    <motion.div
      className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer"
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.5)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={link}
          alt={title}
          className="w-full h-48 md:h-[350px] object-cover"
          loading="lazy"
        />
      </a>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title + Live Link Row */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-white text-lg font-semibold">{title}</h2>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-1 text-sm font-semibold rounded-full transition-colors duration-300"
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