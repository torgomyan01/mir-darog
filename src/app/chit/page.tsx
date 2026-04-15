import MainTemplate from "@/components/common/main-template/main-template";
import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Navbar from "@/components/layout/home/navbar/navbar";
import SalesLanding from "@/components/landing/sales-landing";
import { trailServicePage } from "@/lib/breadcrumb-trails";
import { buildServiceMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/seo-data";

const LEGACY_PATH = "/chit";
const service = getServiceBySlug("blagoustroystvo-territoriy");

export async function generateMetadata() {
  return service ? buildServiceMetadata(service) : {};
}

function Page() {
  if (!service) {
    return null;
  }

  return (
    <MainTemplate>
      <Navbar />
      <div className="container">
        <Breadcrumbs items={trailServicePage(service, LEGACY_PATH)} />
      </div>
      <SalesLanding service={service} />
    </MainTemplate>
  );
}

export default Page;
