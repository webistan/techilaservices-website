import MoreAboutButton from "@/components/Buttons/moreAboutButton";

interface CTAProps {
  heading: string;
  buttonText: string;
  buttonLink: string;
}

const CTA: React.FC<CTAProps> = ({ heading, buttonText, buttonLink }) => (
  <section className="bg-[#000A64] py-12 md:py-20">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-widest text-white/70 mb-2">Get in touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {heading}
        </h2>
      </div>
      <MoreAboutButton
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-8 text-lg"
        buttonText={buttonText}
        href={buttonLink}
      />
    </div>
  </section>
);

export default CTA; 