// src/pages/index.tsx
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import MainApp from "@/components/mainapp";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Welcome to {siteConfig.name}</h1>
        </div>
        <MainApp />
      </section>
    </DefaultLayout>
  );
}