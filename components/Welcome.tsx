"use client"

import { Badge } from "@/components/ui/badge";
import { quoteData } from "@/lib/quoteData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { Button } from "./ui/button";
// import LoginForm from "./LoginForm";

const Welcome = () => {

    const [randomQuote, setRandomQuote] = useState({
        id: 0,
        quote: "",
        author: "",
      });
    
      // get quote
      useEffect(() => {
        const getRandomQuote = () => {
          const randomIndex = Math.floor(Math.random() * quoteData.length);
          const quoteIndex = quoteData[randomIndex];
          setRandomQuote(quoteIndex);
        };
    
        getRandomQuote();
      }, []);
  return (
    <div className="p-4">
        <section className="py-32">
        <div className="container">
            <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
                <Badge variant="outline">
                    Working on your fitness
                </Badge>
            
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                Ready? Let&apos;s Workout
                </h1>
                <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                &quot;{randomQuote.quote}&quot;
                <br />
                <span className="text-sm">{randomQuote.author}</span>
                </p>
                <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="/sign-in">
                  Sign In
                </Link>
                </div>
            </div>
            <Image
                src="/images/hero-2.jpg"
                alt="fitness girl pointing towards the sky"
                width={500}
                height={500}
                className="max-h-96 w-full rounded-md object-cover"
            />
            </div>
        </div>
        </section>  
    </div>
  )
}

export default Welcome