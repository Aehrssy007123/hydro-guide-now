import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      type: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+91-800-WATER-1",
      subtitle: "24/7 Emergency Helpline",
      action: () => window.open("tel:+918009283721", "_self"),
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@smartwater.in",
      subtitle: "Response within 4 hours",
      action: () => window.open("mailto:support@smartwater.in", "_self"),
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: "Pune & Mumbai, India",
      subtitle: "Multiple service centers",
      action: () => window.open("https://maps.google.com/?q=Pune,India", "_blank"),
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: "24/7 Service",
      subtitle: "Always here to help",
      action: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <MessageCircle className="h-12 w-12 text-accent animate-float" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for support, partnerships, or any questions about water access
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-water">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Inquiry Type
                      </label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="supplier">Supplier Registration</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      placeholder="Brief subject of your message"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Please describe your inquiry in detail..."
                      className="min-h-32"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-ocean text-primary-foreground hover:opacity-90 transition-water"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-water">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-water hover:bg-secondary/30 ${
                          info.action ? "cursor-pointer" : ""
                        }`}
                        onClick={info.action || undefined}
                      >
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          <p className="text-foreground font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-gradient-wave shadow-water">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Emergency Water Services
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Urgent water supply needed? Call our 24/7 emergency hotline
                    </p>
                    <Button
                      size="lg"
                      variant="destructive"
                      className="w-full"
                      onClick={() => window.open("tel:+911800911911", "_self")}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency: 1800-911-911
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="shadow-water">
                <CardHeader>
                  <CardTitle>Quick Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">How to find nearest water source?</span>
                      <Button variant="ghost" size="sm">View →</Button>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Water quality concerns?</span>
                      <Button variant="ghost" size="sm">View →</Button>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Become a water supplier</span>
                      <Button variant="ghost" size="sm">View →</Button>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Report system issues</span>
                      <Button variant="ghost" size="sm">View →</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;