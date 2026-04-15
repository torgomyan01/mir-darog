import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainTemplate from "@/components/common/main-template/main-template";
import Navbar from "@/components/layout/home/navbar/navbar";
import SalesLanding from "@/components/landing/sales-landing";
import {
  CITY_ITEMS,
  SERVICE_ITEMS,
  getCityBySlug,
  getServiceBySlug,
  type CitySlug,
  type ServiceSlug,
} from "@/lib/seo-data";
import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import { trailGeoService } from "@/lib/breadcrumb-trails";
import {
  buildFaqSchema,
  buildGeoMetadata,
  buildServiceSchema,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ city: CitySlug; service: ServiceSlug }>;
}

export function generateStaticParams() {
  return CITY_ITEMS.flatMap((city) =>
    SERVICE_ITEMS.map((service) => ({
      city: city.slug,
      service: service.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const cityItem = getCityBySlug(city);
  const serviceItem = getServiceBySlug(service);

  if (!cityItem || !serviceItem) {
    return {};
  }

  return buildGeoMetadata(cityItem, serviceItem);
}

export default async function GeoServicePage({ params }: PageProps) {
  const { city, service } = await params;
  const cityItem = getCityBySlug(city);
  const serviceItem = getServiceBySlug(service);

  if (!cityItem || !serviceItem) {
    notFound();
  }

  const serviceSchema = buildServiceSchema(serviceItem, cityItem.name);
  const faqSchema = buildFaqSchema(serviceItem);

  return (
    <MainTemplate>
      <Navbar />
      <div className="container">
        <Breadcrumbs items={trailGeoService(cityItem, serviceItem)} />
      </div>
      <SalesLanding service={serviceItem} cityName={cityItem.name} />
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
