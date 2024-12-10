import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface JsonDisplayProps {
  data: object | null
}

export function JsonDisplay({ data }: JsonDisplayProps) {
  if (!data) return null

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>API Response</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto max-h-96">
          {JSON.stringify(data, null, 2)}
        </pre>
      </CardContent>
    </Card>
  )
}

