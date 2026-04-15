"use client";

import Link from "next/link";
import { buildBreadcrumbListSchema } from "@/lib/seo";
import type { BreadcrumbTrailItem } from "@/lib/breadcrumb-trails";
import styles from "./breadcrumbs.module.css";

interface BreadcrumbsProps {
  items: BreadcrumbTrailItem[];
  className?: string;
}

function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (items.length < 2) {
    return null;
  }

  const schema = buildBreadcrumbListSchema(
    items.map((i) => ({ name: i.label, path: i.href })),
  );

  return (
    <>
      <div className={`${styles.wrap} ${className ?? ""}`.trim()}>
        <nav className={styles.nav} aria-label="Навигационная цепочка">
          <ol className={styles.list}>
            {items.map((item, index) => {
              const last = index === items.length - 1;
              return (
                <li key={`${item.href}-${item.label}`} className={styles.item}>
                  {last ? (
                    <span className={styles.current} aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  )}
                  {!last ? (
                    <span className={styles.sep} aria-hidden>
                      /
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

export default Breadcrumbs;
