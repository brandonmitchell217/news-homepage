import { CtaHeadingProps, ListArticleProps, NewHeadingProps } from "./types";

export const fakeClick = (e: React.MouseEvent) => {
  e.preventDefault();
  alert("Sorry, this doesn't go anywhere.");
};

const headers = {
  Accept: "application/json",
  method: "GET",
};

export async function fetchData() {
  try {
    const ctaRes = await fetch("http://localhost:3000/api/data/cta", {
      headers: headers,
    });
    const NewRes = await fetch("http://localhost:3000/api/data/new", {
      headers: headers,
    });
    const ListArticleRes = await fetch(
      "http://localhost:3000/api/data/articles",
      {
        headers: headers,
      }
    );
    const ctaData: CtaHeadingProps = await ctaRes.json();
    const NewHeadingData: NewHeadingProps = await NewRes.json();
    const ListArticlesData: ListArticleProps[] = await ListArticleRes.json();

    return { ctaData, NewHeadingData, ListArticlesData };
  } catch (error) {
    console.error(error);
  }
}
