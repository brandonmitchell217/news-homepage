import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    title: "The Bright Future of Web 3.0?",
    description:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    button: {
      label: "Read More",
      link: "/",
    },
    image: {
      desktop: "/assets/images/image-web-3-desktop.jpg",
      mobile: "/assets/images/image-web-3-mobile.jpg",
      alt: "Web 3.0 ",
    },
  });
}
