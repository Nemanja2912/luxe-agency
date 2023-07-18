import Button from "@/components/button/button";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Raleway } from "next/font/google";
import { useRouter } from "next/router";

const raleway = Raleway({ subsets: ["latin"] });

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const checkRoute = () => {
      if (
        router.pathname === "/" ||
        router.pathname === "/apply" ||
        router.pathname === "/refer" ||
        router.pathname === "/legal"
      ) {
        setDarkTheme(false);
      } else {
        setDarkTheme(true);
      }
    };

    checkRoute();

    const resize = () => {
      if (window.innerWidth < 650) {
        setDarkTheme(false);
      } else {
        checkRoute();
      }
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [router.pathname]);

  return (
    <nav className={`${raleway.className} container fade-down`}>
      <Link href="https://nemanja2912.github.io/luxe-agency/">
        <img
          src={darkTheme ? "./logo/logoWhite.svg" : "./logo/logo.svg"}
          alt=""
        />
      </Link>

      <div
        className="nav-icon"
        onClick={() => setOpen((prev) => !prev)}
        style={{ transform: !open ? "rotate(45deg)" : "rotate(0deg)" }}
      >
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 16.5C28 16.7652 27.8946 17.0196 27.7071 17.2071C27.5196 17.3946 27.2652 17.5 27 17.5H17V27.5C17 27.7652 16.8946 28.0196 16.7071 28.2071C16.5196 28.3946 16.2652 28.5 16 28.5C15.7348 28.5 15.4804 28.3946 15.2929 28.2071C15.1054 28.0196 15 27.7652 15 27.5V17.5H5C4.73478 17.5 4.48043 17.3946 4.29289 17.2071C4.10536 17.0196 4 16.7652 4 16.5C4 16.2348 4.10536 15.9804 4.29289 15.7929C4.48043 15.6054 4.73478 15.5 5 15.5H15V5.5C15 5.23478 15.1054 4.98043 15.2929 4.79289C15.4804 4.60536 15.7348 4.5 16 4.5C16.2652 4.5 16.5196 4.60536 16.7071 4.79289C16.8946 4.98043 17 5.23478 17 5.5V15.5H27C27.2652 15.5 27.5196 15.6054 27.7071 15.7929C27.8946 15.9804 28 16.2348 28 16.5Z"
            fill="white"
          />
        </svg>
      </div>

      <ul
        style={{
          top: open ? "-2.5rem" : "-50rem",
          color: darkTheme ? "black" : "",
        }}
      >
        <li>
          <p>
            <Link href="/about">About us</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href="/refer">Refer</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href="/blogs">Blogs</Link>
          </p>
        </li>
        <li>
          <Button secondary={darkTheme}>Apply Now</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
