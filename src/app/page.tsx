import { Navbar } from "@/components/navbar";
import { Showcase } from "@/components/showcase";
import logo from '@/../public/logo.webp'
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 overflow-y-auto">
        <section id="section1" style={{ backgroundImage: "url('/bg-main.webp')" }}
         className="flex flex-row justify-center items-center h-[95%] bg-cover bg-center bg-no-repeat"   
        >
          <Image src={logo} alt="logo" className=""/>
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold">Seção 1</h2>
            <p>Conteúdo da Seção 1...</p>
          </div>
        </section>
        <section id="section2" className="flex flex-col items-center p-8 bg-gray-100 space-y-8">
          <h2 className="text-2xl font-semibold">Amigurumis de todos os tamanhos, formas e estilos!</h2>
          <Showcase/>
        </section>
        <section id="section3" className="h-screen p-8">
          <h2 className="text-3xl font-bold">Seção 3</h2>
          <p>Conteúdo da Seção 3...</p>
        </section>
      </main>
    </div>
  );
}
