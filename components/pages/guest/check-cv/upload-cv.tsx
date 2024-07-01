import { Button } from "@/components/ui/button";
import Dropzone from "@/components/ui/dropzone";
import React, { useState } from "react";
import NeedSupport from "@/components/common/need-support";
import UploadingFile from "@/components/common/file/uploading-file";
import UploadedFile from "@/components/common/file/uploaded-file";

interface UploadCvProps {
  onSubmit(files: File[]): void;
}

export default function UploadCv(props: UploadCvProps) {
  const [files, setFiles] = useState<File[]>([]);
  const { onSubmit } = props;
  return (
    <div>
      <Dropzone onChange={(files) => setFiles(files)}>
        <Button variant="outlined" className="mt-2">
          {files.length > 0 ? "Replace file" : "Select file"}
        </Button>
      </Dropzone>

      {files.length > 0 && (
        <div>
          <aside className="grid gap-2 mt-8">
            {files.map((file, index) => (
              <UploadingFile key={index} file={file} />
            ))}
          </aside>

          <aside className="grid gap-2 mt-8">
            {files.map((file, index) => (
              <UploadedFile key={index} file={file} />
            ))}
          </aside>

          <div className="mt-8 flex justify-center">
            <Button className="min-w-[160px]" onClick={() => onSubmit(files)}>
              Use this file
            </Button>
          </div>
        </div>
      )}

      <div className="mt-8 mb-4 w-full text-center">
        <NeedSupport />
      </div>
    </div>
  );
}
