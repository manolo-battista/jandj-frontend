import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/components/common/simple-dialog";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IProfileType } from "@/types/profile";
import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Dropzone from "@/components/ui/dropzone";
import {
  emailValidation,
  nameValidation,
  surnameValidation,
} from "@/utils/form-validation";
import { InputPhone } from "@/components/ui/input-phone";

interface AddNewProfileDialogProps extends SimpleDialogProps {
  profileType: IProfileType;
}

export default function AddNewProfileDialog({
  profileType,
  trigger,
}: AddNewProfileDialogProps) {
  const [files, setFiles] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      role: "",
      institution: "",
      city: "",
      address: "",
      note: "",
    },
  });

  function onSubmit(data: any) {
    console.log(data);
  }
  return (
    <SimpleDialog
      title={`Nuovo profilo - ${profileType.title}`}
      trigger={trigger}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <Typography variant="heading-sm" color="red">
            Eventi in programma
          </Typography>
          <div className="grid grid-cols-2 gap-4">
            <Input
              variant="filled"
              placeholder="Input text"
              label="Nome"
              required
              {...register("name", nameValidation)}
              hasError={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
            <Input
              variant="filled"
              placeholder="Input text"
              label="Cognome"
              required
              {...register("surname", surnameValidation)}
              hasError={Boolean(errors.surname)}
              helperText={errors.surname?.message}
            />
            <Input
              variant="filled"
              placeholder="Input text"
              label="Email"
              {...register("email", emailValidation)}
              hasError={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <InputPhone
              variant="filled"
              placeholder="Input text"
              label="Telefono"
              {...register("phone")}
              onChange={(phone) => console.log(phone)}
            />
            <Input
              variant="filled"
              placeholder="Input text"
              label="Telefono"
              {...register("phone")}
            />
            <Input
              variant="filled"
              placeholder="Input text"
              label="Carica"
              {...register("role")}
            />
            <Input
              variant="filled"
              placeholder="Input text"
              label="Istituzione"
              {...register("institution")}
            />
            <Input
              variant="filled"
              placeholder="Input text"
              label="Città"
              required
              {...register("city")}
            />
            <Input
              variant="filled"
              placeholder="Input text"
              label="Indirizzo"
              required
              {...register("address")}
            />
          </div>
          <Input
            variant="filled"
            placeholder="Input text"
            label="Note"
            required
            {...register("note")}
          />

          <Typography variant="heading-sm" color="red">
            Allegati
          </Typography>
          <Dropzone
            orientation="horizontal"
            onChange={(files) => setFiles(files)}
          >
            <Button variant="outlined" className="mt-2">
              {files.length > 0 ? "Replace file" : "Select file"}
            </Button>
          </Dropzone>
        </div>

        <div className="mt-8 flex justify-end">
          <Button type="submit">Conferma</Button>
        </div>
      </form>
    </SimpleDialog>
  );
}
