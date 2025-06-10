import ContactCta from "@/components/Contact-CTA";
import ContactFormSection from "@/components/Contact-Form";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import MapSection from "@/components/Map-Section";

export default function ContactPage() {
    return(
        <>
        <Header/>
        <ContactCta/>
        <MapSection/>
        <ContactFormSection/>
        <Footer/>
        </>
    )
}