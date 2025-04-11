import Carousel from "@/ui/Carousel";

export default function HomeSlider() {
  return (
    <Carousel
      slides={[
        { src: "/slider/slider1.jpg" },
        { src: "/slider/slider2.jpg" },
        { src: "/slider/slide3.jpg" },
        { src: "/slider/slide4.jpg" },
        { src: "/slider/slider5.jpg" },
      ]}
    />
  );
}
