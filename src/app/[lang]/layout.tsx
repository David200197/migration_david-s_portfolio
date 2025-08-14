import { Toaster } from "react-hot-toast";
import { QueryClientCustomProvider } from "@/modules/core/providers/QueryClientCustomProvider";
import { DiProvider } from "@/modules/core/contexts/DiContext";
import { ErrorBoundaryProvider } from "@/modules/core/providers/ErrorBoundaryProvider";
import { composeProviders } from "@/modules/core/utils/compose-providers";
import { Navbar } from "@/modules/core/components/navbar";
import { getService } from "@/modules/core/utils/di-utils";
import { PortfolioService } from "@/modules/portfolio/services/portfolio-service";

const Provider = composeProviders([
  ErrorBoundaryProvider,
  DiProvider,
  QueryClientCustomProvider,
]);

const portfolioService = getService(PortfolioService);

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const { lang } = await params;

  return (
    <Provider>
      <Toaster position="top-right" />
      <Navbar
        items={await portfolioService.getItemMenus(lang)}
        icon={{
          src: "/favicon.svg",
          title: "Portfolio",
        }}
      />
      {children}
    </Provider>
  );
}
