import { Button } from "@/components/ui/Button";
import { usePostQuery } from "@/lib/apiHooks";
import { UPLOAD_MEDIA_BASE_URL } from "@/lib/baseUrl";
import { cn } from "@/lib/utils";
import { Eye, XCircle } from "lucide-react";
import React, { useRef } from "react";

const Upload = React.forwardRef(
  (
    {
      className = {},
      setValue,
      onChange,
      onMediaChange = null,
      name,
      label = "Upload",
      ...props
    },
    ref
  ) => {
    const handleImportRef = useRef(null);
    const { mutate: saveMedia } = usePostQuery(
      ["saveMedia"],
      ``,
      {},
      {
        axiosOptions: {
          headers: {
            "Content-Type": "",
            "Auth-Type": "Keycloak",
          },
          withCredentials: true,
          crossDomain: true,
          async: true,
        },
        customUrl: () => `${UPLOAD_MEDIA_BASE_URL}/api/upload/`,
        onSuccessContinued: (data) => {
          setValue(name, `https:${data.absurl}`);
        },
      }
    );

    const handleMediaUpload = (file) => {
      const data = new FormData();
      data.append("file", file);
      saveMedia(data);
    };

    return (
      <div className={cn(className.wrapper)} ref={ref}>
        {props.value ? (
          <div className="flex items-center">
            <a
              className={cn("flex items-center")}
              href={props.value}
              target="_blank"
              rel="noreferrer"
            >
              <Eye />
              <span className="ml-2">View media</span>
            </a>
            <Button
              className="ml-3"
              variant="outline"
              onClick={() => setValue(name, "")}
            >
              <XCircle />
            </Button>
          </div>
        ) : (
          <div className="w-1/4">
            <input
              type="file"
              onChange={(e) => {
                const [file] = e.target.files;
                if (!file) return;
                onMediaChange
                  ? onMediaChange(onChange, file)
                  : handleMediaUpload(file);
              }}
              id="upload"
              ref={handleImportRef}
              className={cn("hidden", className.input)}
            />
            <Button
              variant="outline"
              className={cn("p-0 w-full", className.button)}
              onClick={() => handleImportRef.current.click()}
            >
              <span>{label}</span>
            </Button>
          </div>
        )}
      </div>
    );
  }
);

Upload.displayName = "Upload";

export default Upload;
