"use client";
import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/components/common/simple-dialog";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Dropzone from "@/components/ui/dropzone";
import Icon from "@/components/ui/icon";
import Divider from "@/components/ui/divider";

interface NewTemplateDialogProps extends SimpleDialogProps {}

export default function NewTemplateDialog({ trigger }: NewTemplateDialogProps) {
  const [files, setFiles] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      event_type: "",
      template_title: "",
      allow_edit_everyone: "",
    },
  });

  function onSubmit(data: any) {
    console.log(data);
  }
  return (
    <SimpleDialog title={`Nuovo Template`} trigger={trigger}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-4">
            <Input
              variant="filled"
              placeholder="Input text"
              label="Tipo di template"
              required
              {...register("event_type")}
              hasError={Boolean(errors.event_type)}
              helperText={errors.event_type?.message}
            />
            <Input
              variant="filled"
              placeholder="Input text"
              label="Titolo template"
              required
              {...register("template_title")}
              hasError={Boolean(errors.template_title)}
              helperText={errors.template_title?.message}
            />
            <Input
              variant="filled"
              placeholder="Input text"
              label="Consenti a tutti di modificare"
              {...register("allow_edit_everyone")}
              hasError={Boolean(errors.allow_edit_everyone)}
              helperText={errors.allow_edit_everyone?.message}
            />
          </div>

          <Dropzone
            orientation="horizontal"
            onChange={(files) => setFiles(files)}
          >
            <Button variant="outlined" className="mt-2">
              {files.length > 0 ? "Replace file" : "Select file"}
            </Button>
          </Dropzone>
        </div>

        <Divider className="mt-8" />
        <div className="mt-8 flex justify-end">
          <Button type="submit" startIcon={<Icon.Check />}>
            Salva
          </Button>
        </div>
      </form>
    </SimpleDialog>
  );
}
