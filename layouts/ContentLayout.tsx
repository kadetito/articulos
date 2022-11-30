import Head from "next/head";
import { FC, ReactNode } from "react";

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
      </Head>
      <nav></nav>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};
