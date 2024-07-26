interface UploadingFileProps {
  disabled?: boolean;
  file: File;
  setLoadSteps: UploadingStep;
}

type UploadingStep = React.Dispatch<
  React.SetStateAction<
    "hold" | "choose_file" | "loading" | "show_file" | "error"
  >
>;

export type { UploadingFileProps, UploadingStep };
