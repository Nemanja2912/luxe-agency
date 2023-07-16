import Link from "next/link";

const Button = ({ children, secondary = false, link = "apply" }) => {
  return (
    <div
      className="button"
      style={{ borderColor: secondary ? "black" : "white" }}
    >
      <Link href={link}>{children}</Link>
    </div>
  );
};

export default Button;
