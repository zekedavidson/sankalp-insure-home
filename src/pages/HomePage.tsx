import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Car, CheckCircle, Lock, CreditCard, Award, ArrowRight, Star, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";

const trustBadges = [
  { icon: Lock, label: "SSL Encrypted", sub: "256-bit Security" },
  { icon: CreditCard, label: "PCI-DSS Compliant", sub: "Secure Payments" },
  { icon: Award, label: "IRDAI Licensed", sub: "Broker Reg. No. XXX" },
  { icon: Users, label: "10,000+ Policies", sub: "Issued & Counting" },
];

const whyUs = [
  { icon: Shield, title: "Licensed Broker", desc: "IRDAI registered insurance broker acting in your best interest, not the insurer's." },
  { icon: FileText, title: "Neutral Comparison", desc: "Unbiased plan comparisons with full commission disclosure as per IRDAI norms." },
  { icon: CheckCircle, title: "End-to-End Support", desc: "From quotes to claims, we assist you at every step of your insurance journey." },
];

const faqCategories = ["General", "Car", "Bike", "Health", "Life", "Term", "Investment", "Business"];

const faqs: Record<string, { q: string; a: string }[]> = {
  "General": [
    { q: "What do you mean by Insurance?", a: "Insurance is a contract which is presented as a policy to be used as a risk management tool to ensure financial protection at the time of crisis. Insurance helps an individual to ensure financial protection against losses that may arise during an unforeseen event. An insurance policy is a contract between an individual (policyholder) and an insurance company (Insurance provider), under which, the individual makes regular payments known as premiums to the insurance company which in return pays the sum assured in case an unforeseen event such as demise of the policyholder, accident, damage to the vehicles or other possessions." },
    { q: "Why is insurance important?", a: "Insurance provides financial security, helping you pay for medical emergencies, vehicle damage, or secure your family's future in your absence." },
    { q: "How Does Insurance Work?", a: "When you buy a policy, you pay regular premiums. In return, the insurer promises to pay a certain amount if a covered event occurs." },
    { q: "What are the types of insurance available?", a: "The main types include Life, Health, Motor, Travel, and Property insurance." },
    { q: "How to make a claim in insurance?", a: "To make a claim, inform your insurer immediately, fill out the claim form, and submit the required documents." },
  ]
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("General");
  const currentFaqs = faqs[activeTab] || faqs["General"];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Protect What Matters Most<br />
            <span className="text-gold">Life & Motor Insurance</span> Made Simple
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Compare plans from top insurers, get transparent quotes, and purchase policies with complete peace of mind. No hidden charges. No biased advice.
          </p>

          {/* Two primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/get-quote?type=life">
              <Button size="lg" className="gradient-gold text-navy font-bold border-0 px-8 py-4 text-base shadow-gold hover:opacity-80 w-full sm:w-auto">
                <Shield className="w-5 h-5 mr-2" />
                Get Life Insurance Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/get-quote?type=motor">
              <Button size="lg" variant="outline" className="gradient-gold text-navy font-bold border-0 px-8 py-4 text-base shadow-gold hover:opacity-80 w-full sm:w-auto">
                <Car className="w-5 h-5 mr-2" />
                Get Motor Insurance Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="bg-primary/30 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                <badge.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-primary-foreground text-sm font-semibold">{badge.label}</p>
                <p className="text-primary-foreground/50 text-xs">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Insurance Products We Offer</h2>
            <p className="text-muted-foreground">Explore Life and Motor Insurance plans from leading insurers</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Life Insurance Card */}
            <Card className="border-2 border-navy/10 hover:border-gold/50 transition-all group shadow-navy overflow-hidden">
              <div className="gradient-hero p-6">
                <Shield className="w-10 h-10 text-gold mb-3" />
                <h3 className="text-2xl font-bold text-primary-foreground">Life Insurance</h3>
                <p className="text-primary-foreground/70 text-sm mt-2">Secure your family's future</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 mb-6">
                  {["Term Life Insurance", "Whole Life Plans", "ULIP Policies", "Endowment Plans"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/life-insurance">
                  <Button className="w-full bg-navy text-primary-foreground hover:bg-navy-light">
                    Explore Life Plans <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Motor Insurance Card */}
            <Card className="border-2 border-navy/10 hover:border-gold/50 transition-all group shadow-navy overflow-hidden">
              <div className="gradient-hero p-6">
                <Car className="w-10 h-10 text-gold mb-3" />
                <h3 className="text-2xl font-bold text-primary-foreground">Motor Insurance</h3>
                <p className="text-primary-foreground/70 text-sm mt-2">Drive with confidence</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 mb-6">
                  {["Private Car – Comprehensive", "Private Car – Third Party", "Two Wheeler – Comprehensive", "Two Wheeler – Third Party"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/motor-insurance">
                  <Button className="w-full bg-navy text-primary-foreground hover:bg-navy-light">
                    Explore Motor Plans <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Why Choose Sankalp?</h2>
            <p className="text-muted-foreground">We work for you, not the insurance company</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyUs.map((item) => (
              <Card key={item.title} className="text-center p-6 border-navy/10 hover:border-gold/40 transition-all">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold-dark" />
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Frequently Asked Questions About Insurance</h2>
            <p className="text-muted-foreground">Know why did they choose Sankalp</p>
          </div>

          <div className="flex overflow-x-auto border-b border-border/50 mb-8 sm:justify-center">
            <div className="flex gap-x-6 px-1">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`whitespace-nowrap pb-3 text-sm sm:text-base font-medium transition-all relative -mb-[1px] ${activeTab === cat
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {currentFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-2xl px-2 sm:px-6 bg-card data-[state=open]:shadow-md transition-all border-b"
              >
                <AccordionTrigger className="hover:no-underline py-4 sm:py-5 text-left text-sm sm:text-base font-bold text-foreground">
                  <div className="flex flex-1 items-center gap-4 pr-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-muted text-foreground text-sm font-semibold border">
                      {index + 1}
                    </span>
                    <span className="text-left leading-tight">{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-[3.25rem] pr-4 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-3">Ready to Secure Your Future?</h2>
          <p className="text-primary-foreground/70 mb-6">Get personalised insurance quotes in minutes. No spam. No obligation.</p>
          <Link to="/get-quote">
            <Button size="lg" className="gradient-gold text-navy font-bold border-0 px-10">
              Start Your Free Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
