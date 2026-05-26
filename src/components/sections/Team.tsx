import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { team } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

type TeamMember = (typeof team)[number];

function TeamCard({ member }: { member: TeamMember }) {
  const content = (
    <>
      <div className="relative mx-auto mt-6 h-24 w-24 overflow-hidden rounded-full ring-4 ring-brand-muted">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          sizes="96px"
          unoptimized={member.photo.startsWith("http")}
        />
        {"linkedin" in member && member.linkedin && (
          <span className="absolute inset-0 flex items-center justify-center rounded-full bg-brand/80 opacity-0 transition-opacity group-hover:opacity-100">
            <Linkedin className="h-8 w-8 text-white" />
          </span>
        )}
      </div>
      <div className="p-5 pb-6">
        <h3 className="font-bold text-brand">{member.name}</h3>
        <p className="mt-1 text-xs font-medium text-muted">{member.role}</p>
      </div>
    </>
  );

  if ("linkedin" in member && member.linkedin) {
    return (
      <article className="card-hover group overflow-hidden p-0 text-center">
        <Link
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </Link>
      </article>
    );
  }

  return (
    <article className="card-hover overflow-hidden p-0 text-center">
      {content}
    </article>
  );
}

export function Team() {
  return (
    <section id="team" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Team"
          title={
            <>
              Team Behind <span className="gradient-text">Wonders</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
