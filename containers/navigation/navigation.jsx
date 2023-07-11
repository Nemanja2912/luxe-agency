import Button from "@/components/button/button";

const Navigation = () => {
  return (
    <nav className="container fade-down">
      <img src="/logo/logo.svg" alt="" />

      <ul>
        <li>
          <p>About us</p>
        </li>
        <li>
          <p>Refer</p>
        </li>
        <li>
          <p>Blogs</p>
        </li>
        <li>
          <Button>Apply Now</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
