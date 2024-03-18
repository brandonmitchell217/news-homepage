import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    title: "New",
    items: [
      {
        title: "Hydrogen VS Electric Cars",
        excerpt: "Will hydrogen-fueled cars ever catch up to EVs?",
      },
      {
        title: "The Downsides of AI Artistry",
        excerpt:
          "What are the possible adverse effects of on-demand AI image generation?",
      },
      {
        title: "Is VC Funding Drying Up?",
        excerpt:
          "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      },
    ],
  });
}
