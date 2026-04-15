import PrivacyPolicy from "@/app/privacy-policy/privacy-policy";
import { buildPrivacyMetadata } from "@/lib/seo";

export const metadata = buildPrivacyMetadata();

function Page() {
  return <PrivacyPolicy />;
}

export default Page;
