import Hero from "@/app/_components/Hero";
import BestSellers from "@/app/_components/BestSellers";
import AboutPage from "@/components/about";
import ContactPage from "@/components/contact";

export default function Home() {
     return (
        <main>
            <Hero/>
            <BestSellers/>
            <AboutPage />
            <ContactPage />
        </main>
    );
}
