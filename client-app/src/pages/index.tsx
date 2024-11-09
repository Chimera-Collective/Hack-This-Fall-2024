import DefaultLayout from "@/layouts/default";
import MainApp from "@/components/mainapp";
import { Logo } from "@/components/icons";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Logo />
        <MainApp />
      </section>
    </DefaultLayout>
  );
}