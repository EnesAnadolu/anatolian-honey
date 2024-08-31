import Image from "next/image";
import "./globals.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="ml-40 ">
        <h4 className="custom-font-headline text-5xl">Hello World</h4>
        <p className="custom-font-body">Very organic, delicious bee products</p>
      </div>
      
    </main>
  );
}
