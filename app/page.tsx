import React from "react";
import CtaHeading from "../components/CtaHeading";
import NewHeading from "../components/NewHeading";
import Article from "../components/Article";
import { fetchData } from "../lib/util";

export default async function Home() {
  const { ctaData, NewHeadingData, ListArticlesData } = await fetchData();

  function articleClassName(index: number) {
    switch (index) {
      case 0:
        return "md:col-start-1 md:col-span-2 lg:col-auto";
      case 1:
        return "md:col-start-3 md:col-span-2 lg:col-auto";
      case 2:
        return "md:row-start-2 md:col-start-2 md:col-span-2 lg:row-auto lg:col-auto";
      default:
        return "";
    }
  }

  return (
    <main className="container lg:pb-20 flex flex-col justify-center items-center">
      <section className="pt-4 pb-16 lg:py-8 space-y-20">
        <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-6">
          <CtaHeading data={ctaData} />
          <NewHeading data={NewHeadingData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-12 md:gap-20 lg:gap-4 xl:gap-12">
          {ListArticlesData.map((article, index) => (
            <Article
              key={article.id}
              data={article}
              className={articleClassName(index)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
