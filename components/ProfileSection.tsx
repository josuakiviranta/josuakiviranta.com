import Image from "next/image";
import { Section } from "./Section";

export const ProfileSection = () => {
  return (
    <Section>
      <div className="max-w-screen-md m-auto">
        <h1 className="text-white mb-4 text-5xl sm:text-6xl font-extrabold tracking-tight">
          Josua A. Kiviranta
        </h1>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
          Helsinki, Finland
        </h2>
        <div className="w-full flex">
          <Image
            width={400}
            height={400}
            className="rounded-lg"
            src="/profile.jpeg"
            alt="Profile picture"
            objectFit="fill"
            layout="fixed"
            quality={100}
          />
        </div>
      </div>
    </Section>
  );
};
