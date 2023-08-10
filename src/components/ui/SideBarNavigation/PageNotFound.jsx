import SpinnyLogo from "@/components/icons/Spinny";

const PageNotFound = () => {
  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center text-destructive h-screen gap-4 dark:text-white"
    >
      <SpinnyLogo width={80} height={80} />
      <h1>Oops!</h1>
      <p>Sorry, Page not found</p>
    </div>
  );
};

export default PageNotFound;
