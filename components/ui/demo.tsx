import { Marquee } from "@/components/ui/marquee";

const techStack = [
  {
    name: "Python",
    icon: "simple-icons:python",
  },
  {
    name: "C/C++",
    icon: "simple-icons:cplusplus",
  },
  {
    name: "JavaScript (ES6+)",
    icon: "simple-icons:javascript",
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript",
  },
  {
    name: "SQL",
    icon: "lucide:database",
  },
  {
    name: "PyTorch",
    icon: "simple-icons:pytorch",
  },
  {
    name: "TensorFlow",
    icon: "simple-icons:tensorflow",
  },
  {
    name: "Keras",
    icon: "simple-icons:keras",
  },
  {
    name: "Scikit-learn",
    icon: "simple-icons:scikitlearn",
  },
  {
    name: "YOLOv5",
    icon: "lucide:target",
  },
  {
    name: "Transformers",
    icon: "lucide:layers",
  },
  {
    name: "OpenCV",
    icon: "simple-icons:opencv",
  },
  {
    name: "NumPy",
    icon: "simple-icons:numpy",
  },
  {
    name: "Pandas",
    icon: "simple-icons:pandas",
  },
  {
    name: "Matplotlib",
    icon: "simple-icons:matplotlib",
  },
  {
    name: "Seaborn",
    icon: "lucide:bar-chart-3",
  },
  {
    name: "Librosa",
    icon: "lucide:audio-waveform",
  },
  {
    name: "Node.js",
    icon: "simple-icons:nodedotjs",
  },
  {
    name: "Express.js",
    icon: "simple-icons:express",
  },
  {
    name: "Flask",
    icon: "simple-icons:flask",
  },
  {
    name: "REST APIs",
    icon: "lucide:webhook",
  },
  {
    name: "ReactJS",
    icon: "simple-icons:react",
  },
  {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
  },
  {
    name: "Tailwind CSS",
    icon: "simple-icons:tailwindcss",
  },
  {
    name: "Socket.io",
    icon: "simple-icons:socketdotio",
  },
  {
    name: "Clerk",
    icon: "lucide:shield-check",
  },
  {
    name: "MongoDB",
    icon: "simple-icons:mongodb",
  },
  {
    name: "PostgreSQL",
    icon: "simple-icons:postgresql",
  },
  {
    name: "Git",
    icon: "simple-icons:git",
  },
  {
    name: "GitHub",
    icon: "simple-icons:github",
  },
  {
    name: "Linux",
    icon: "simple-icons:linux",
  },
  {
    name: "VS Code",
    icon: "simple-icons:visualstudiocode",
  },
  {
    name: "Google Colab",
    icon: "simple-icons:googlecolab",
  },
  {
    name: "Docker (basic)",
    icon: "simple-icons:docker",
  },
  {
    name: "Vercel",
    icon: "simple-icons:vercel",
  },
  {
    name: "Streamlit",
    icon: "simple-icons:streamlit",
  },
];

const buildIconUrl = (icon: string) =>
  `https://api.iconify.design/${icon}.svg?color=%23ffffff`;

export function MarqueeDemo() {
  return (
    <Marquee speed={60}>
      {techStack.map((item) => (
        <div
          key={item.name}
          className="relative flex h-full w-fit items-center justify-start gap-3 mx-[4rem]"
        >
          <img
            alt={item.name}
            src={buildIconUrl(item.icon)}
            loading="lazy"
            className="h-7 w-7"
          />
          <span className="text-sm font-medium text-[color:var(--muted)]">
            {item.name}
          </span>
        </div>
      ))}
    </Marquee>
  );
}
