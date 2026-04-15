import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainTemplate from "@/components/common/main-template/main-template";
import Navbar from "@/components/layout/home/navbar/navbar";
import SalesLanding from "@/components/landing/sales-landing";
import {
  SERVICE_ITEMS,
  getServiceBySlug,
  type ServiceSlug,
} from "@/lib/seo-data";
import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import { trailServicePage } from "@/lib/breadcrumb-trails";
import {
  buildFaqSchema,
  buildServiceMetadata,
  buildServiceSchema,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ service: ServiceSlug }>;
}

export function generateStaticParams() {
  return SERVICE_ITEMS.map((item) => ({ service: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service } = await params;
  const serviceItem = getServiceBySlug(service);
  if (!serviceItem) {
    return {};
  }
  return buildServiceMetadata(serviceItem);
}

export default async function ServicePage({ params }: PageProps) {
  const { service } = await params;
  const serviceItem = getServiceBySlug(service);

  if (!serviceItem) {
    notFound();
  }

  const path = `/uslugi/${serviceItem.slug}`;
  const serviceSchema = buildServiceSchema(serviceItem);
  const faqSchema = buildFaqSchema(serviceItem);

  return (
    <MainTemplate>
      <Navbar />
      <div className="container">
        <Breadcrumbs items={trailServicePage(serviceItem, path)} />
      </div>
      <SalesLanding service={serviceItem} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </MainTemplate>
  );
}
