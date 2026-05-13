import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    title: "AI Contract Summarization",
    description:
      "Generate concise summaries of lengthy legal agreements instantly.",
  },
  {
    title: "Risk Detection",
    description:
      "Identify risky clauses and potential legal issues automatically.",
  },
  {
    title: "Clause Extraction",
    description:
      "Extract important clauses and key legal information with AI.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Powerful AI Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}