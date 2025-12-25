import { DollarSign, Leaf, Target, BarChart } from "lucide-react"
import Image from "next/image"

export function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Reduce Costs by 80%",
      description: "Eliminate printing, shipping, and storage costs. One QR code replaces thousands of brochures.",
    },
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "Zero paper waste, zero environmental impact. Show your commitment to sustainability.",
    },
    {
      icon: Target,
      title: "Focus on Quality Leads",
      description: "Stop wasting time on uninterested visitors. Identify and engage serious prospects only.",
    },
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Know exactly who scanned, when, and what they viewed. Make data-driven decisions.",
    },
  ]

  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Why Exhibition Organizers Choose Us</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Transform your exhibition ROI with measurable benefits that impact your bottom line and the environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
            <Image
              src="/business-professional-analyzing-data-on-tablet-with.jpg"
              alt="Business analytics and lead tracking"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Smart Lead Tracking</h4>
                <p className="text-sm text-muted-foreground">Real-time insights into visitor engagement</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
            <Image
              src="/green-sustainable-technology-concept-with-digital-e.jpg"
              alt="Sustainable eco-friendly technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Sustainable Solution</h4>
                <p className="text-sm text-muted-foreground">Zero waste, 100% environmentally friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
