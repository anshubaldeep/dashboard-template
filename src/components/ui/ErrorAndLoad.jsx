import Loading from "@/components/ui/Loading";
import { Ban } from "lucide-react";

const ErrorAndLoad = ({ loading, error, children }) => {
  if (loading) return <Loading />;
  if (error)
    return (
      <div
        id="error-page"
        className="flex flex-col items-center justify-center text-destructive h-screen gap-4"
      >
        <Ban color="red" width={80} height={80} />
        <h1>Error occured!</h1>
      </div>
    );
  return children;
};

export default ErrorAndLoad;
