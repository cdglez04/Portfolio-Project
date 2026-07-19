import {
  HtmlIcon,
  CssIcon,
  ReactIcon,
  ViteIcon,
  JavascriptIcon,
  DjangoIcon,
  PythonIcon,
  PostgresqlIcon,
  VercelIcon,
  RenderIcon,
  GitIcon,
  GithubIcon,
  ClaudeIcon,
} from "@/components/icons"

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "React", icon: ReactIcon },
      { name: "Vite", icon: ViteIcon },
      { name: "JavaScript", icon: JavascriptIcon },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", icon: DjangoIcon },
      { name: "Python", icon: PythonIcon },
      { name: "PostgreSQL", icon: PostgresqlIcon },
    ],
  },
  {
    category: "Deploy",
    items: [
      { name: "Vercel", icon: VercelIcon },
      { name: "Render", icon: RenderIcon },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GithubIcon },
      { name: "Claude Code", icon: ClaudeIcon },
    ],
  },
]
