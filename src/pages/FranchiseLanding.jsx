import SEO from "@/components/layout/SEO";
import Nav from "@/components/PageComponents/FranchiseLanding/Nav";
import Hero from "@/components/PageComponents/FranchiseLanding/Hero";
import WhoFor from "@/components/PageComponents/FranchiseLanding/WhoFor";
import Model from "@/components/PageComponents/FranchiseLanding/Model";
import Proof from "@/components/PageComponents/FranchiseLanding/Proof";
import Support from "@/components/PageComponents/FranchiseLanding/Support";
// import Process from "@/components/PageComponents/FranchiseLanding/Process";
import Markets from "@/components/PageComponents/FranchiseLanding/Markets";
import FAQ from "@/components/PageComponents/FranchiseLanding/FAQ";
import ApplyForm from "@/components/PageComponents/FranchiseLanding/ApplyForm";
import Footer from "@/components/PageComponents/FranchiseLanding/Footer";

function FranchiseLanding() {
  return (
    <>
      <SEO
        title="Run Your Own House of Handsome | Alberta Barbershop Franchise"
        description="Operate a House of Handsome barbershop with our Shop-in-Shop model. Brand, booking, marketing and training in place. Explore franchise opportunities across Alberta."
      />
      <div className="bg-white font-['Urbanist']">
        <Nav />
        <Hero />
        <WhoFor />
        <Model />
        <Proof />
        <Support />
        {/* <Process /> */}
        <Markets />
        <FAQ />
        <ApplyForm />
        <Footer />
      </div>
    </>
  );
}

export default FranchiseLanding;
