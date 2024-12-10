import { NextResponse } from "next/server";
import { parseString, Builder } from "xml2js";

export async function POST(req: Request) {
  const { input, type } = await req.json();

  if (type === "json-to-xml") {
    try {
      const builder = new Builder();
      const xml = builder.buildObject(JSON.parse(input));
      return NextResponse.json({ result: xml });
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid JSON input" },
        { status: 400 }
      );
    }
  } else if (type === "xml-to-json") {
    return new Promise((resolve) => {
      parseString(input, (err, result) => {
        if (err) {
          resolve(
            NextResponse.json({ error: "Invalid XML input" }, { status: 400 })
          );
        } else {
          resolve(
            NextResponse.json({ result: JSON.stringify(result, null, 2) })
          );
        }
      });
    });
  } else {
    return NextResponse.json(
      { error: "Invalid conversion type" },
      { status: 400 }
    );
  }
}
