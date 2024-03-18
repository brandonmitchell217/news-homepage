import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      image: {
        src: "/assets/images/image-retro-pcs.jpg",
        alt: "Reviving Retro PCs",
      },
      title: "Reviving Retro PCs",
      excerpt: "What happens when old PCs are given modern upgrades?",
    },
    {
      id: 2,
      image: {
        src: "/assets/images/image-top-laptops.jpg",
        alt: "Top 10 Laptops of 2022",
      },
      title: "Top 10 Laptops of 2022",
      excerpt: "Our best picks for various needs and budgets.",
    },
    {
      id: 3,
      image: {
        src: "/assets/images/image-gaming-growth.jpg",
        alt: "The Growth of Gaming",
      },
      title: "The Growth of Gaming",
      excerpt: "How the pandemic has sparked fresh opportunities.",
    },
  ]);
}
