'use client'
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel,CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { images } from "@/lib/showcase-images";
import Image from "next/image";

export function Showcase(){
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                align: "center",
                loop: true,
            }}
            className="w-[50%]"
        >
            <CarouselContent className="-ml-1">
            {images.map((image, index) => (
                <CarouselItem
                    className="pl-12 basis-3/4"
                    key={index}
                >
                    <Card className="size-96">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <Image src={image} alt={`Image ${index} on carousel`}/>
                        </CardContent>
                    </Card>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}