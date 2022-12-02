import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../components/ui/NavBar";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: ReactNode;
}

export const ContentLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};
