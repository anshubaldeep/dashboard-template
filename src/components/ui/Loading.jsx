import CircularProgress from "@/components/ui/CircularProgress";
import { cn } from "@/lib/utils";

function Loading(props) {
  const {
    isDisableBackdropClick,
    isBlur,
    className = {
      wrapper: "",
      circularProgress: "",
    },
  } = props;
  // isBlur props centers the loader and blur the background inside parent view, given that parent has relative property set
  if (isBlur) {
    return (
      <div
        className={cn(
          "fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm",
          className.wrapper
        )}
      >
        <CircularProgress
          className={cn(
            "fixed top-[calc(50%-45px)] left-[calc(50%-45px)] z-100",
            className.circularProgress
          )}
        />
      </div>
    );
  }
  if (isDisableBackdropClick) {
    return (
      <div
        className={cn(
          "fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center",
          className.wrapper
        )}
      >
        <CircularProgress
          className={cn(
            "fixed top-[calc(50%-45px)] left-[calc(50%-45px)] z-100",
            className.circularProgress
          )}
        />
      </div>
    );
  }
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center",
        className.wrapper
      )}
    >
      <CircularProgress
        className={cn(
          "absolute top-[calc(50%-45px)] left-[calc(50%-45px)] z-100",
          className.circularProgress
        )}
        loaderClass="w-12 h-12"
      />
    </div>
  );
}

export default Loading;
