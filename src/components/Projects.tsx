"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsMeta } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectModal } from "@/components/ProjectModal";
import { useI18n } from "@/components/LanguageProvider";
import { Icons } from "@/lib/icons";

export function Projects() {
  const { m } = useI18n();
  const [openId, setOpenId] = useState<string | null>(null);

  const openProject =
    projectsMeta.find((project) => project.id === openId) ?? null;

  return (
    <section id="projects" className="section-pad section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={m.projects.eyebrow}
            title={m.projects.title}
            description={m.projects.description}
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectsMeta.map((project) => {
            const copy = m.projects.items[project.id];
            return (
              <StaggerItem key={project.id} className="h-full">
                <button
                  type="button"
                  onClick={() => setOpenId(project.id)}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/90 text-left shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-lg)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={copy?.name ?? project.company}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-md bg-black/45 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                      {project.company}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      {copy?.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                      {copy?.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-line px-1.5 py-0.5 text-[0.65rem] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-ink">
                      {m.common.viewDetails}
                      <Icons.arrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>

      <ProjectModal
        project={openProject}
        open={!!openProject}
        onClose={() => setOpenId(null)}
      />
    </section>
  );
}
