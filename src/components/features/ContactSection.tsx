import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const contactInfo = [
  {
    icon: "📞",
    label: "Phone",
    value: "(+63) 919 814 9533",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "Cabansayjohnkenny@gmail.com",
    href: "mailto:Cabansayjohnkenny@gmail.com",
  },
  {
    icon: "📍",
    label: "Address",
    value: "Philippines",
  },
];

export function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="bg-card rounded-2xl p-8 sm:p-10 animate-fade-in border border-border/60">
          <SectionHeader
            label="Contact"
            title="Let's work together"
            description="Have a project in mind or want to connect? Fill out the form below and I'll get back to you."
            className="mb-8"
          />

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstname" className="block text-xs text-muted mb-2 font-mono">
                  Firstname
                </label>
                <input id="firstname" type="text" placeholder="John" className="input-field" />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-xs text-muted mb-2 font-mono">
                  Lastname
                </label>
                <input id="lastname" type="text" placeholder="Kenny" className="input-field" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-xs text-muted mb-2 font-mono">
                  Email address
                </label>
                <input id="email" type="email" placeholder="you're@email.com" className="input-field" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-muted mb-2 font-mono">
                  Phone number
                </label>
                <input id="phone" type="tel" placeholder="(+63) 912 345 6789" className="input-field" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-xs text-muted mb-2 font-mono">
                Select a service
              </label>
              <select id="service" className="input-field" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="web">Web Development</option>
                <option value="ui">UI/UX Design</option>
                <option value="frontend">Frontend Development</option>
                <option value="project">School Project</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-muted mb-2 font-mono">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Type your message here."
                className="input-field resize-none"
              />
            </div>

            <Button type="submit" variant="primary">
              Send message
            </Button>
          </form>
        </div>

        <div className="space-y-8 animate-fade-in-delay">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-xl group-hover:scale-110 group-hover:border-accent/40 transition-all duration-200">
                {item.icon}
              </div>
              <div>
                <p className="text-muted text-sm mb-1 font-mono">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-fg hover:text-accent transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-fg">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
