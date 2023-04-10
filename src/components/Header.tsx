import { Pages } from "../types";

export default function Header() {
  const pages: Pages[] = [
    {
      name: "Home",
      url: "./",
    },
    {
      name: "About",
      url: "./about",
    },
    {
      name: "Projects",
      url: "./projects",
    },
    {
      name: "Contact",
      url: "./contact",
    },
  ];

  return (
    <header className="w-full">
      <nav className="flex gap-9">
        {pages.map(({ name, url }) => {
          return (
            <a href={url} className="textDecoration-none">
              <button key={name} className="font-bold p-4">
                {name}
              </button>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
