"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, QrCode } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted -z-10" />
      <div className="absolute inset-0 bg-[url('/abstract-digital-pattern.png')] opacity-5 -z-10" />

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <QrCode className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Transform Exhibition Management</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
              Stop Wasting Brochures.
              <br />
              <span className="text-accent">Start Converting Leads.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
              Dynamic QR code technology that eliminates exhibition waste, reduces costs by up to 80%, and helps you
              focus on qualified leads that matter.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base w-full sm:w-auto"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base w-full sm:w-auto bg-transparent"
                onClick={() => {
                  const element = document.getElementById("solution")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                See How It Works
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1</div>
                <div className="text-sm text-muted-foreground">QR Code Solution</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Data Types</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-accent/5 border border-accent/10">
              <Image
                src="/modern-business-person-scanning-qr-code-at-technol.jpg"
                alt="Professional scanning QR code at exhibition"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <QrCode className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium">Scan Rate</div>
                  <div className="text-2xl font-bold text-accent">+247%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
