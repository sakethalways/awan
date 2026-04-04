import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Contact Us</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Let's Build Your <span className="gradient-text">Cloud Strategy</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get in touch for a free consultation. Our team typically responds within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 lg:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      required
                      maxLength={100}
                      placeholder="John Doe"
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      placeholder="john@company.com"
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      maxLength={100}
                      placeholder="Acme Corp"
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select>
                      <SelectTrigger className="bg-muted/50 border-border">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business Transformation</SelectItem>
                        <SelectItem value="engineering">Digital Engineering</SelectItem>
                        <SelectItem value="ai">AI & GenAI</SelectItem>
                        <SelectItem value="cloud">Cloud Transformation</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                        <SelectItem value="platform">Platform Modernization</SelectItem>
                        <SelectItem value="managed">Managed Services</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    maxLength={1000}
                    placeholder="Tell us about your project and requirements..."
                    className="bg-muted/50 border-border focus:border-primary min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  {submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={150} className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-lg mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: "Email", value: "info@awansolutions.com" },
                      { icon: MapPin, label: "Website", value: "www.awansolutions.com" },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{label}</p>
                          <p className="text-sm font-medium text-foreground">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-xl p-6">
                  <h4 className="font-display font-semibold mb-2">Office Hours</h4>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <p>Monday – Friday: 9 AM – 6 PM PST</p>
                    <p>Saturday: 10 AM – 2 PM PST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="glass rounded-xl p-6">
                  <h4 className="font-display font-semibold mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Need immediate help? Our team responds within 24 hours on business days.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <ArrowRight className="w-3.5 h-3.5" /> Average response: 4 hours
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
