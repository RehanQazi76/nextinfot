import { AlertCircle, FileText, Users, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function Problem() {
  const problems = [
    {
      icon: FileText,
      title: "Brochure Overload",
      description: "Visitors collect hundreds of brochures without genuine interest, creating mountains of waste.",
    },
    {
      icon: TrendingDown,
      title: "Lost ROI",
      description: "Thousands spent on printing materials that end up in the trash before leaving the venue.",
    },
    {
      icon: Users,
      title: "Distracted Teams",
      description: "Your team wastes time handing out brochures instead of engaging qualified prospects.",
    },
    {
      icon: AlertCircle,
      title: "Environmental Impact",
      description: "Massive paper waste contributing to your carbon footprint and environmental concerns.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/waste-pile-of-paper-brochures-and-marketing-materi.jpg"
                alt="Exhibition brochure waste problem"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">The Exhibition Brochure Problem</h2>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                Traditional exhibitions face a critical inefficiency: physical brochures create waste, cost money, and
                fail to identify truly interested prospects.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-destructive/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
