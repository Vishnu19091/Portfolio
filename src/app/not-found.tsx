import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%]">
      This website has only one page and it is here{" "}
      <span>
        <Link className="text-red-600 hover:underline underline-offset-4" href={"/"}>click this</Link>
      </span>
      .
    </div>
  );
}
