import { getService } from "@/modules/core/utils/di-utils";
import { LocalesManager } from "@/modules/core/services/locales-manager";

const localesManager = getService(LocalesManager);

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const { lang } = await params;
  localesManager.setCurrentLocale(lang);
  return <> {children}</>;
}
