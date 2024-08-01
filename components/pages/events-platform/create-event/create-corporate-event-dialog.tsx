import RowDropzone from "@/components/common/dropzones/row-dropzone";
import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/components/common/simple-dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { InputPhone } from "@/components/ui/input-phone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";
import { nameValidation } from "@/utils/form-validation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface CreateCorporateEventDialogProps extends SimpleDialogProps {}

export default function CreateCorporateEventDialog({
  isOpen,
  onOpenChange,
}: CreateCorporateEventDialogProps) {
  const [files, setFiles] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      mode: "",
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
    <SimpleDialog isOpen={isOpen} onOpenChange={onOpenChange}>
      <Typography variant="heading-md" color="red" className="mb-4">
        Nuovo Evento Corporate & Policy
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <Typography variant="heading-sm" color="red">
            Informazione generale
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
              label="Descrizione"
              required
              {...register("description")}
              hasError={Boolean(errors.description)}
              helperText={errors.description?.message}
            />
            <Select>
              <SelectTrigger
                label="Modalità"
                {...register("mode")}
                hasError={Boolean(errors.mode)}
                helperText={errors.mode?.message}
              >
                <SelectValue placeholder={"Seleziona una voce"} />

                <SelectContent>
                  {["Di persona", "Da remoto", "Ibrido (persona + remoto)"].map(
                    (mode) => (
                      <SelectItem aria-checked key={mode} value={mode}>
                        <Typography variant="body-md">{mode}</Typography>
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </SelectTrigger>
            </Select>
            <Input
              variant="filled"
              placeholder="Cerca luogo"
              label="Luogo"
              {...register("phone")}
            />

            <Input
              variant="filled"
              label="Piattaforma"
              placeholder="Copia il link della piattaforma qui"
              required
              {...register("address")}
            />
          </div>

          <Typography variant="heading-sm" color="red">
            Allegati
          </Typography>
          {["Agenda", "Transfer Value", "Altro"].map((name) => (
            <RowDropzone key={name} label={name} />
          ))}

          <Typography variant="heading-sm" color="red">
            Partecipanti
          </Typography>
          <Input
            variant="filled"
            className="max-w-[40%]"
            placeholder="Cerca tra i contatti"
            endIcon={<Icon.Search className="w-6 fill-red" />}
            // @ts-ignore
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>

        <div className="mt-8 flex justify-end">
          <Button type="submit" startIcon={<Icon.Check />}>
            Invia evento per approvazione
          </Button>
        </div>
      </form>
    </SimpleDialog>
  );
}
