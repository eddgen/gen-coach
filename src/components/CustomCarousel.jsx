import { images } from "../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function CustomCarousel() {
  return (
    <Carousel className="w-8/10 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto py-20">
      <CarouselContent className="-ml-1">
        {images.map((image) => {
          const {id , img} = image;
          return (
            <CarouselItem key={id} className="basis-1/2 pl-1 lg:basis-1/3">
              <div className="aspect-square p-3">
                <img
                  src={img}
                  alt={`Slide ${id + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CustomCarousel;
