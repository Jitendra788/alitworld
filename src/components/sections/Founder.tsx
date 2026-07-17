import Image from "next/image";
import Link from "next/link";
import { Linkedin, Quote } from "lucide-react";
import { ServicesClassicHeader } from "@/components/sections/ServicesClassicHeader";
import { siteConfig } from "@/lib/config";

const leaders = [
  {
    name: siteConfig.founder.name,
    title: siteConfig.founder.title,
    photo: siteConfig.founder.photo,
    linkedin: siteConfig.founder.linkedin,
    bio: "Leading Alitworld Technologies (alitworld.com) with a focus on web development, website designing, mobile apps, digital marketing, and SEO — helping businesses build and rank online.",
  },
  {
    name: "Jitendra Jangir",
    title: "Managing Director of Alitworld Technologies",
    photo: "/team/jitendra-jangir.jpg",
    linkedin: "https://www.linkedin.com/in/jitendrajangir/",
    bio: "Driving delivery and growth at Alitworld Technologies — full-stack product builds, client success, and scalable web & app solutions for businesses across India.",
  },
] as const;

function LeaderCard({
  name,
  title,
  photo,
  linkedin,
  bio,
}: (typeof leaders)[number]) {
  return (
    <div className="card-hover relative overflow-hidden p-5 sm:p-7 md:p-8">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/5 blur-3xl"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-7">
        <div className="relative shrink-0">
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl ring-4 ring-brand/10 sm:h-32 sm:w-32">
            <Image
              src={photo}
              alt={name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white shadow-lg">
            <Quote className="h-4 w-4" />
          </div>
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-brand sm:text-2xl">{name}</h3>
          <p className="mt-1 text-sm font-semibold text-accent">{title}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            {bio}
          </p>
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg sm:mx-0"
          >
            <Linkedin className="h-4 w-4" />
            Connect on LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Founder() {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesClassicHeader
          label="Leadership"
          title="Meet the Leadership of Alitworld Technologies"
          subtitle=""
        />
        <div className="-mt-2 grid gap-6 sm:-mt-4 lg:grid-cols-2 lg:gap-8">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
