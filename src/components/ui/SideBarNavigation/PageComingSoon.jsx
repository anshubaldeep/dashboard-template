import SpinnyLogo from "@/components/icons/Spinny";

const PageNotFound = () => {
  return (
    <div
      id="coming-soon-page"
      className="flex flex-col items-center justify-center text-destructive h-screen gap-4 dark:text-white"
    >
      <SpinnyLogo width={80} height={80} />
      <h1>Kindly Wait...</h1>
      <p>Page coming soon!</p>
    </div>
  );
};

export default PageNotFound;
