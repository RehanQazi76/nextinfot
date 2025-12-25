import { Card } from "@/components/ui/card"
import Image from "next/image"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your QR Code",
      description: "We generate a unique dynamic QR code linked to all your exhibition materials and data.",
    },
    {
      number: "02",
      title: "Display at Your Booth",
      description: "Print the QR code once on banners, stands, or business cards. No more bulk brochures.",
    },
    {
      number: "03",
      title: "Visitors Scan & Engage",
      description: "Attendees scan your code and instantly access all your digital content on their phones.",
    },
    {
      number: "04",
      title: "Track & Convert",
      description: "View real-time analytics, identify qualified leads, and follow up with interested prospects.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Getting started with dynamic QR codes is simple. Transform your exhibition experience in four easy steps.
          </p>
        </div>

        <div className="relative aspect-[21/9] max-w-4xl mx-auto rounded-2xl overflow-hidden mb-12 bg-muted hidden md:block">
          <Image
            src="/step-by-step-process-workflow-modern-exhibition-boot.jpg"
            alt="Step by step QR code process workflow"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="text-6xl font-bold text-accent/10 mb-4 group-hover:text-accent/20 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent/30">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
