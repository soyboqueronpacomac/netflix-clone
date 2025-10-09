import { Button } from "@/components/ui/button";
import { Info, Play, PlayCircle } from "lucide-react";

export  function SliderVideo() {
    return (
      <div className="relative w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="brightness-50 object-fill w-full h-full"
          src="/videos/video-trailer-test.mp4"
        />
        <div className="flex flex-col justify-end absolute w-full md:w-[36%] px-4 md:px-0 md:left-[4%] z-20 top-0 -bottom-7 md:bottom-[36%]">
            <div className="pt-24 md:pt-0">
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold drop-shadow-xl">Paco-Coder</h2>
                <p className="max-w-md mt-2 text-xs md:text-base">
                    Aprende a crear desde cero un clon de Netflix con todas sun funciones clave, desde la gestión de usuarios hasta la reproducción de videos, mientras descubres los secretos detrás de una plataforma de steaming exitosa.
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-5">
                    <Button size={'lg'} variant={'secondary'}>
                        <Play className="h-6 w-6 fill-black"/>
                        <span className="ml-2">Ver ahora</span>
                    </Button>
                    <Button size={'lg'} className="bg-gray-500/50 hover:bg-gray-500/40">
                        <Info className="h-6 w-6"/>
                        Más Información
                    </Button>
                </div>
            </div>
        </div>
        <div className="bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[14vw] -bottom-16 absolute gradientVideo"/>
      </div>
    )
  }