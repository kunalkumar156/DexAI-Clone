import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroVideo";
import HeroCard from "@/components/HeroCard";
import StartWriting from "@/components/StartWriting";
import FasterAi from "@/components/FasterAi";
import HowItWorks from "@/components/HowItWorks";
import Money from "@/components/Money";
import CopyWritingTools from "@/components/CopyWritingTools";
import Review from "@/components/Review";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>DexAI - AI Writer And CopyWriting Tool</title>
        <meta
          name="description"
          content="Whatever You want to ask- DEX.AI has the Answers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <HeroVideo />
      <HeroCard />
      <StartWriting />
      <FasterAi />
      <HowItWorks />
      <Money />
      <CopyWritingTools />
      <Review />
    </>
  );
}
