import { QrCode, MessageSquare, Video, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: QrCode,
      title: "Dynamic QR Codes",
      description:
        "Our flagship service—consolidate all your exhibition data into one powerful, scannable QR code that tracks engagement and qualifies leads.",
      features: ["Real-time content updates", "Analytics & tracking", "Lead qualification", "Multi-format support"],
      image: "/dynamic-qr-code-scanning-with-mobile-phone-showing.jpg",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description:
        "Intelligent conversational interfaces that engage visitors 24/7, answer questions, and capture qualified leads automatically.",
      features: ["24/7 availability", "Natural conversations", "Lead capture", "Multi-language support"],
      image: "/ai-chatbot-interface-with-conversation-bubbles-and.jpg",
    },
    {
      icon: Video,
      title: "AI Videos",
      description:
        "Create compelling AI-powered video content that showcases your products and services with professional quality.",
      features: ["Professional production", "Quick turnaround", "Custom scripting", "Multiple formats"],
      image: "/professional-ai-generated-video-production-with-ca.jpg",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Modern, responsive websites designed to convert visitors into customers and showcase your digital presence.",
      features: ["Responsive design", "SEO optimized", "Fast loading", "Modern technology"],
      image: "/modern-responsive-website-design-on-multiple-devic.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Comprehensive Technology Solutions</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Beyond dynamic QR codes, we offer a full suite of technology services to transform your digital presence and
            exhibition experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative aspect-video bg-accent/5">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
