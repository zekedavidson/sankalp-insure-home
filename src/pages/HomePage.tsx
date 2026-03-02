import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Car, CheckCircle, Lock, CreditCard, Award, ArrowRight, Star, Users, FileText, Heart, TrendingUp, Baby, PiggyBank, GraduationCap, Umbrella, BarChart2 } from "lucide-react";
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

const quickLinks = [
  { icon: Shield, label: "Term", sub: "Insurance", link: "/life-insurance" },
  { icon: Heart, label: "Whole Life", sub: "Plans", link: "/life-insurance" },
  { icon: TrendingUp, label: "ULIP", sub: "Plans", badge: "Growth", badgeColor: "bg-gold text-navy", link: "/life-insurance" },
  { icon: Baby, label: "Child", sub: "Plans", link: "/life-insurance" },
  { icon: PiggyBank, label: "Savings", sub: "Plans", link: "/life-insurance" },
  { icon: Umbrella, label: "Endowment", sub: "Plans", link: "/life-insurance" },
  { icon: Car, label: "Motor", sub: "Insurance", badge: "NEW", badgeColor: "bg-gold text-navy", link: "/motor-insurance" },
  { icon: BarChart2, label: "Compare", sub: "Plans", link: "/" },
];

const whyUs = [
  { icon: Shield, title: "Licensed Broker", desc: "IRDAI registered insurance broker acting in your best interest, not the insurer's." },
  { icon: FileText, title: "Neutral Comparison", desc: "Unbiased plan comparisons with full commission disclosure as per IRDAI norms." },
  { icon: CheckCircle, title: "End-to-End Support", desc: "From quotes to claims, we assist you at every step of your insurance journey." },
];

const reviews = [
  { rating: 5, name: "Rahul Sharma", role: "Business Owner", text: "Excellent service! The team helped me find the perfect health insurance for my family within minutes." },
  { rating: 5, name: "Priya Desai", role: "IT Professional", text: "Sankalp Insurance made claiming my car insurance incredibly smooth and hassle-free. Highly recommended!" },
  { rating: 5, name: "Amit Patel", role: "Frequent Traveler", text: "Great comparison tools. It was so easy to pick the right term life policy. Their transparent disclosure gives peace of mind." },
];

const faqCategories = ["General", "Car", "Bike", "Life"];

const faqs: Record<string, { q: string; a: string }[]> = {
  "General": [
    { q: "What do you mean by Insurance?", a: "Insurance is a contract which is presented as a policy to be used as a risk management tool to ensure financial protection at the time of crisis. Insurance helps an individual to ensure financial protection against losses that may arise during an unforeseen event. An insurance policy is a contract between an individual (policyholder) and an insurance company (Insurance provider), under which, the individual makes regular payments known as premiums to the insurance company which in return pays the sum assured in case an unforeseen event such as demise of the policyholder, accident, damage to the vehicles or other possessions." },
    { q: "Why is insurance important?", a: "Unfortunate events like accidents, illnesses, and natural disasters come without any warning and thus it is necessary for you to keep yourself and your loved ones shielded against such unforeseen happenings. One of the best and simplest ways of keeping yourself secured against these contingent events which may cause a financial loss is buying an insurance policy." },
    { q: "How Does Insurance Work?", a: "As mentioned earlier, insurance is a legal contract between the policyholder and the insurance provider. The insurance policy carries all the details about the aspects and conditions under which the insurance provider will pay out the insurance amount to the policyholder or their nominee in case an unforeseen event occurs. Insurance is a financial tool which helps in ensuring financial protection of yourself and your family. Generally the person who has purchased the policy also known as policyholder has to pay premiums for the coverage available under the insurance policy. Any person can seek insurance from an insurance company." },
    { q: "What are the types of insurance available?", a: "The main types include Life, Health, Motor, Travel, and Property insurance." },
    { q: "How to make a claim in insurance?", a: "To make a claim, inform your insurer immediately, fill out the claim form, and submit the required documents." },
  ],
  "Car": [
    { q: "What is a car insurance policy?", a: "It is an agreement between an insurance company and a car owner under which the former provides an insurance cover to the policyholder for financial damages incurred by his/her car in unforeseen events. Depending on the coverage, there are three types of car insurance plans - third party , standalone own-damage and comprehensive insurance. It's renewal online process provides instant e-Policy." },
    { q: "Why should I buy car insurance?", a: "There are a number of benefits of owning four wheeler insurance. Firstly, it helps you meet the legal requirement of owning at least a third party cover. Moreover, an insurance policy helps you meet financial liabilities that may arise towards a third party or own damages to your car due to a road accident or any other unfortunate event." },
    { q: "Is car insurance mandatory in India?", a: "As per the Indian Motor Tariff, every car owner in the country is compulsorily required to own at least a third party cover. Absence of a valid plan is a punishable offence which attracts a fine of Rs. 2,000 and/or imprisonment of up to 3 months for the first offence." },
    { q: "How is car insurance premium calculated?", a: "The premium price of third-party car insurance plans is determined by the IRDAI, whereas the premium for standalone own-damage and comprehensive plans vary from insurance company to insurance company." },
    { q: "Can car insurance be transferred to the new owner at the purchase of a second hand four wheeler?", a: "Yes, the four wheeler insurance can be transferred from the old owner to the new owner in case the sale of a second-hand car. As per the Indian Motor Tariff, the policy transfer should be completed within 14 days from the car’s purchase date." },
  ],
  "Bike": [
    { q: "What is a two wheeler insurance policy?", a: "A two wheeler insurance policy is an agreement between an insurance company and a bike owner wherein the insurance provider promises to cover any damage or loss sustained by the insured bike due to an accident, theft, fire, etc., based on the opted policy. Generally, the contract between insured and insurer is of a year which should be renewed every year." },
    { q: "Why should I purchase a two wheeler insurance policy?", a: "No matter which bike you own, you need to comply with some laws to ride it. To carry a bike insurance policy is the most important rule to drive a motorcycle / scooter as you need to adhere to the legal requirement of carrying at least a third party cover. Besides this, a policy also covers your financial liabilities which you may incur towards a third party or own damages sustained by your bike due to an accident or any unfortunate incident." },
    { q: "What are the different types of bike insurance plan?", a: "There are three types of two wheeler insurance plans such as third party two wheeler plan, standalone own damage, and comprehensive insurance plan." },
    { q: "What if my bike insurance policy gets expired?", a: "Every two-wheeler insurance policy has a date of expiry before which you should renew it to continue to avail it. However, if you fail to renew the policy on time, you still can renew it within the 90 days grace period from the expiry date. However, bike insurance renewal process is not possible after this period. As a result, you will have to buy a new insurance policy in that case." },
    { q: "Which company provides the best insurance for bike in India?", a: "There are numerous parameters to select an insurance company to insure your bike. The Claim Settlement Ratio (CSR) is one of the most important parameters to gauge the efficiency of an insurance provider. The CSR is a ratio of claims settled by the insurance company out of the total claims received by the insurer during the financial year. In the financial year 2019-20, the companies with the highest claim settlement ratio are IFFCO Tokio General Insurance (95.30%), Royal Sundaram General Insurance (92.66%), and Oriental Insurance Company (91.76%) with which the IFFCO Tokio can be considered the best two wheeler insurance company in India for the year 2023." },
  ],
  "Life": [
    { q: "What is Life Insurance ?", a: "Life insurance is an insurance cover which provides a sum assured to the family of the assured in the event of sudden death. The plan also offers a survival benefit to the assured if he/she survives the policy term." },
    { q: "What are the factors that affect the calculation of a life insurance plan premium?", a: "Life insurance premium depends on numerous factors including policyholder's age, sum assured, gender, lifestyle, job, medical history, type of policy, tenure, and riders (if any). " },
    { q: "Why should I purchase life insurance?", a: "Life insurance helps you attain financial security that ensures your family’s life goals are not affected. Life insurance also offers tax benefits on the premiums that a policyholder pays for their life insurance. Moreover, life insurance plans are affordable and the policyholder can purchase additional benefits by purchasing a rider to enhance their life cover." },
    { q: "Which is the best life insurance plan?", a: "Different life insurance plans have different features and advantages. Thus, the definition of the best plan varies from individual to individual. The best life insurance plan is the one which best meets your requirements and budget. However, among all the different types of life insurance plans, the most preferred type of life insurance plan is Term Insurance Plan because it provides high coverage at nominal premium." },
    { q: "What are the factors which I should consider before buying a life insurance policy?", a: "There are many factors that you should consider while purchasing a life insurance plan. These includes your financial goals, income, existing liabilities, and daily expenses. After analysing all these factors, you can compare different types of life insurance plans like term plans, whole life insurance, child plans, retirement plans, and others to buy the one that suits your needs. " },

  ]
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("General");
  const currentFaqs = faqs[activeTab] || faqs["General"];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground pt-20 pb-32 lg:pt-28 lg:pb-40 relative">
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

      {/* Floating Bar */}
      <div className="container mx-auto px-4 -mt-16 lg:-mt-20 relative z-10 mb-8 max-w-5xl">
        <div className="bg-card rounded-xl shadow-xl shadow-navy/5 border-2 border-primary/10 p-4 sm:p-5 flex justify-between items-center overflow-x-auto gap-4 sm:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {quickLinks.map((link, idx) => (
            <Link key={idx} to={link.link} className="flex flex-col items-center min-w-[60px] sm:min-w-[70px] group flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/5 flex items-center justify-center mb-2 relative group-hover:bg-primary/10 group-hover:scale-105 transition-all outline outline-1 outline-primary/10 group-hover:outline-primary/30">
                {link.badge && (
                  <span className={`absolute -top-1.5 -right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full z-10 shadow-sm ${link.badgeColor}`}>
                    {link.badge}
                  </span>
                )}
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-bold text-navy group-hover:text-primary transition-colors whitespace-nowrap">{link.label}</p>
              <p className="text-[10px] text-muted-foreground whitespace-nowrap">{link.sub}</p>
            </Link>
          ))}
        </div>
      </div>

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

      {/* Customer Speaks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Customer Speaks</h2>
            <p className="text-muted-foreground">Hear what our satisfied policyholders have to say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6 border-navy/10 hover:border-gold/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-gold fill-gold" : "text-muted"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed italic mb-6">"{review.text}"</p>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
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
