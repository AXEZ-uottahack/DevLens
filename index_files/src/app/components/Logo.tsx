interface LogoProps {
  size:
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3l"
    | "text-4xl"
    | "text-5xl";
  theme: "Dark" | "Light";
}

export default function Logo({ size, theme }: LogoProps) {
  let containerDiv =
    size +
    " w-fit m-1 p-1 flex" +
    (theme === "Dark"
      ? " border-solid border-2 border-white"
      : "border-solid border-2 border-black");
  let devSpan =
    theme === "Dark" ? "bg-white text-black" : "bg-black text-white";
  let lenSpan =
    theme === "Dark" ? "bg-black text-white" : "bg-white text-black";

  return (
    <div className={containerDiv}>
      <span className={devSpan}>Dev</span>
      <span className={lenSpan}>Lens</span>
    </div>
  );
}
