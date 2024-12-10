import { convertXmlToJson } from "./conversion-service";

export async function sendXmlToApi(xml: string): Promise<object> {
  const response = await fetch("http://localhost:8080/xml-response", {
    method: "POST",
    headers: {
      "Content-Type": "application/xml",
    },
    body: xml,
  });

  if (!response.ok) {
    throw new Error("Failed to send XML to API");
  }

  const xmlResponse = await response.text();
  return convertXmlToJson(xmlResponse);
}
