import Image from "next/image";
import LoginForm from "./form";
export default function Login() {
  return (
    <div className="bg-primary flex w-full h-screen justify-center items-center">
      <div className="w-96 flex-col flex justify-center items-center">
        <Image
          src={"/images/GrupoperaltasCompleto.png"}
          alt="Logo"
          width={400}
          height={88}
        />
        <p className="mb-5 text-xl border-b-gray-500 border-b-2 w-full text-center text-white ">
          Controle de Lavanderia
        </p>

        <LoginForm />
      </div>
    </div>
  );
}
