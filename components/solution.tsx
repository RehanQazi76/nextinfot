import { CheckCircle2, QrCode, Smartphone, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function Solution() {
  return (
    <section id="solution" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <QrCode className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">One QR, Infinite Possibilities</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              A Single Dynamic QR Code That Changes Everything
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our dynamic QR code technology consolidates all your exhibition data into one scannable solution. No more
              physical brochures, no more waste—just instant digital access to everything visitors need.
            </p>

            <div className="space-y-4">
              {[
                "Consolidate all data types in one QR code",
                "Update content remotely in real-time",
                "Track engagement and qualify leads instantly",
                "Reduce printing costs by up to 80%",
                "Completely eliminate paper waste",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 relative aspect-video rounded-xl overflow-hidden bg-accent/5 border border-accent/20">
              <Image
                src="/large-dynamic-qr-code-with-digital-data-streams-an.jpg"
                alt="Dynamic QR code technology demonstration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visitors scan once and access all your materials—brochures, videos, catalogs, contact forms, and more.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualified Leads Only</h3>
              <p className="text-muted-foreground leading-relaxed">
                Know exactly who's interested. Track scans, engagement time, and content accessed to identify serious
                prospects.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reusable Forever</h3>
              <p className="text-muted-foreground leading-relaxed">
                One QR code works for every exhibition. Update the content behind it anytime without reprinting
                anything.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
