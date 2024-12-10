import { JsonForm } from "@/components/json-form";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          JSON to XML Form
        </h1>
        <JsonForm />
      </div>
      <Toaster />
    </main>
  );
}
