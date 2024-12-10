"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Converter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [conversionType, setConversionType] = useState("json-to-xml");
  const [error, setError] = useState("");

  const handleConvert = async () => {
    setError("");
    setOutput("");

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input, type: conversionType }),
      });

      const data = await response.json();

      if (response.ok) {
        setOutput(data.result);
      } else {
        setError(data.error || "An error occurred during conversion");
      }
    } catch (err) {
      setError("An error occurred while processing your request");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Select value={conversionType} onValueChange={setConversionType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select conversion type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="json-to-xml">JSON to XML</SelectItem>
            <SelectItem value="xml-to-json">XML to JSON</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleConvert}>Convert</Button>
      </div>
      <Textarea
        placeholder="Enter your input here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-64"
      />
      {error && <p className="text-red-500">{error}</p>}
      {output && <Textarea value={output} readOnly className="h-64" />}
    </div>
  );
}
