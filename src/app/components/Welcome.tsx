"use client";

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-28 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Diğer ürünlerimiz ve{" "}
              <a href="#" className="font-semibold text-indigo-600">
                daha fazlası için <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Doğadan Gelen Tazelikle Tanışın
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hoş Geldiniz! Doğal ve organik ürünlerimizle sağlıklı bir yaşamın
              kapılarını aralayın.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Şimdi Alışverişe Başla
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Daha Fazla Bilgi Edinin <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div aria-hidden="true"></div>
      </div>
    </div>
  );
}
