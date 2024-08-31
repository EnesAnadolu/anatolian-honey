import Image from "next/image";
import "./globals.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="ml-40 ">
        <h4 className="custom-font-headline text-5xl">Hello World</h4>
        <h3 className="font-size:bold text-2xl">Organic Honey</h3>
        <p className="custom-font-body">Very organic, delicious bee products</p>
        <br />
        <Image
          width={100}
          height={100}
          src={
            "https://www.maeshoney.com/wp-content/uploads/2021/07/colmena.jpg"
          }
          alt="bees"
        />
      </div>
    </main>
  );
}
