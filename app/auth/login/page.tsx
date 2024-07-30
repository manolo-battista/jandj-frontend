"use client";
import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import { useForm } from "react-hook-form";
import { emailValidation, passwordValidation } from "@/utils/form-validation";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: { email: string; password: string }) {
    console.log(data);
  }

  return (
    <>
      <div
        className="bg-size h-screen w-full bg-[url('/img/auth/background.png')] bg-cover bg-no-repeat"
        style={{
          backgroundSize: "140%",
          backgroundPosition: "left",
        }}
      >
        {/*<div className="absolute left-0 top-0 z-0 h-screen w-screen bg-[#0046856B] backdrop-blur-2xl" />*/}
      </div>
      <div className="absolute left-0 top-0 grid h-screen w-full grid-cols-12">
        <div className="col-span-7 flex h-full flex-col">
          <div className="mt-[28%] w-[240px] bg-red p-4 px-8">
            <Logo color="white" className="w-[180px]" strapLine={false} />
          </div>
        </div>
        <div className="col-span-5 flex h-full flex-col items-center justify-center">
          <div className="w-full border-b border-gray bg-background-active p-20">
            <Typography variant="heading-card" color="red">
              J&J Event Hub
            </Typography>
            <Typography variant="body-md">
              Per favore, inserisci le tue credenziali per accedere alla
              piattaforma.
            </Typography>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="my-12 flex flex-col gap-4"
            >
              <Input
                required
                label="Email"
                variant="outlined"
                placeholder="Email"
                {...register("email", emailValidation)}
                hasError={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
              <Input
                required
                label="Password"
                variant="outlined"
                placeholder="Password"
                type="password"
                autocomplete="new-password"
                {...register("password", passwordValidation)}
                hasError={Boolean(errors.password)}
                helperText={errors.password?.message}
              />
              <div className="flex justify-end">
                <Button>Accedi</Button>
              </div>
            </form>
          </div>
          <div className="flex items-center gap-2 bg-blue-200 p-4">
            <Icon.Lightbulb className="w-9 fill-blue-700" />
            <Typography variant="body-sm">
              Ricordati che questa piattaforma non sostituisce iConnect, e che
              dovrai gestire gli eventi e gli invitati su entrambe le
              piattaforme.
            </Typography>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-8 w-full items-center bg-gray-900 px-8">
          <Typography className="flex-1 text-white">
            J&J Event Platform
          </Typography>
          <Typography className="text-white">©2024</Typography>
        </div>
      </div>
    </>
  );
}
