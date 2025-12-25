export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Next<span className="text-accent">infotec</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming exhibitions with dynamic QR code technology. Eliminate waste, reduce costs, and convert
              better leads.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#solution" className="hover:text-accent transition-colors">
                  Dynamic QR Codes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  AI Videos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Web Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#benefits" className="hover:text-accent transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-accent transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              BU 11, Prem Complex
              <br />
              CIDCO N6, CSN
              <br />
              Aurangabad
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Nextinfotec. All rights reserved. Built with innovation and sustainability
            in mind.
          </p>
        </div>
      </div>
    </footer>
  )
}
