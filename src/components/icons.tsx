import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export const Icons = {
  NextJs: (props: SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Next.js</title>
      <path d="M16.483 16.155L12.227 2.01L7.98 16.155H16.483ZM18.283 17.565H5.97L12.227 0L18.283 17.565Z" />
      <path d="M17.653 18.975H16.273V9.585H17.653V18.975Z" />
    </svg>
  ),
  ReactJs: (props: SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>React</title>
      <circle cx="12" cy="12" r="2.05" />
      <path d="M16.791 6.533c-2.28-2.28-5.975-2.28-8.256 0s-2.28 5.975 0 8.256c2.28 2.28 5.975 2.28 8.256 0s2.28-5.975 0-8.256m-8.623 7.889c-2.1-2.1-2.1-5.513 0-7.613s5.513-2.1 7.613 0 2.1 5.513 0 7.613-5.513 2.1-7.613 0" />
      <path d="M6.533 7.618c.95-2.613 3.655-4.234 6.57-3.666s5.174 3.033 5.174 5.947-2.257 5.38-5.174 5.947-6.57-1.052-6.57-3.666m7.889-4.033c-2.434-.516-4.885.95-5.57 3.32-.686 2.37.59 4.885 3.024 5.57s4.885-.95 5.57-3.32c.686-2.37-.59-4.885-3.024-5.57" transform="rotate(60 12 12)" />
      <path d="M17.467 7.618c-.95-2.613-3.655-4.234-6.57-3.666s-5.174 3.033-5.174 5.947 2.257 5.38 5.174 5.947 6.57-1.052 6.57-3.666m-7.889-4.033c2.434-.516 4.885.95 5.57 3.32.686 2.37-.59 4.885-3.024 5.57s-4.885.95-5.57-3.32c-.686-2.37.59-4.885-3.024-5.57" transform="rotate(-60 12 12)" />
    </svg>
  ),
  TailwindCss: (props: SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Tailwind CSS</title>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C13.337 13.382 11.976 12 9.001 12z" />
    </svg>
  ),
  Firebase: (props: SVGProps<SVGSVGElement>) => (
    <svg 
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Firebase</title>
      <path d="M3.52 17.21l8.48-14.7c.07-.1.17-.1.24 0l2.42 4.2-2.82 4.88-5.3 9.22c-.07.1-.17.1-.24 0l-2.78-4.8zM18.66 9.7l-3.15 5.45-6.05-10.47L12 0l8.66 15.02c.07.1.04.2-.04.24l-1.96 1.12zM9.48 20.25l6.06-10.5L18.66 15l-6.06 10.5c-.07.1-.17.1-.24 0l-2.88-5.25z"/>
    </svg>
  ),
  Figma: (props: SVGProps<SVGSVGElement>) => (
    <svg 
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Figma</title>
      <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM12 12a6 6 0 1 1 0-12A6 6 0 0 1 12 12zM6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0zM6 6a6 6 0 1 1 12 0A6 6 0 0 1 6 6z"/>
    </svg>
  )
};

export function TechIcon({ name, className }: { name: string, className?: string }) {
  const commonClassName = cn("w-12 h-12", className);
  switch (name.toLowerCase()) {
    case "next.js": return <Icons.NextJs className={commonClassName} />;
    case "react": return <Icons.ReactJs className={commonClassName} />;
    case "tailwind css": return <Icons.TailwindCss className={commonClassName} />;
    case "firebase": return <Icons.Firebase className={commonClassName} />;
    case "figma": return <Icons.Figma className={commonClassName} />;
    case "html": return <span className={cn("font-bold text-4xl", className)}>HTML</span>;
    case "css": return <span className={cn("font-bold text-4xl", className)}>CSS</span>;
    case "node.js": return <span className={cn("font-bold text-xl", className)}>Node.js</span>;
    case "express": return <span className={cn("font-bold text-xl", className)}>Express</span>;
    case "git": return <span className={cn("font-bold text-4xl", className)}>Git</span>;
    case "vercel": return <span className={cn("font-bold text-2xl", className)}>Vercel</span>;
    default: return null;
  }
}
