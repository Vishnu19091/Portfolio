"use client";
import { usePathname } from "next/navigation";

export default function ShowPath() {
  const pathname = usePathname();

  if (pathname == "/") {
    return (
      <p>
        You're in{" "}
        <code className="bg-black/75 p-1.5 rounded-md">{pathname}home</code> dir
      </p>
    );
  }
  return (
    <p>
      You're in <code className="bg-black/75 p-1.5 rounded-md">{pathname}</code>{" "}
      dir
    </p>
  );
}
