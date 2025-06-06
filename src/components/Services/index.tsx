import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import featuresData from "./servicesData";

const Services = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleService key={feature.id} service={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
