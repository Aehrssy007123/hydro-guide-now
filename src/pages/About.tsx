import { Users, Target, Award, Droplets, MapPin, Smartphone, BarChart3, Shield } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Mapping",
      description: "Live location tracking of water tankers and ATMs with accurate availability status.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Responsive design that works seamlessly across all devices and screen sizes.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Comprehensive insights into water consumption, pricing trends, and supplier performance.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Verified suppliers with quality certifications and user rating systems.",
    },
  ];

  const stats = [
    { number: "500+", label: "Water Sources", color: "text-primary" },
    { number: "50K+", label: "Happy Users", color: "text-accent" },
    { number: "99.9%", label: "Uptime", color: "text-green-600" },
    { number: "24/7", label: "Support", color: "text-blue-600" },
  ];

  const team = [
    {
      name: "Sanika Hole",
      role: "Member",
      bio: "Cep project head",
      image: "👩‍💼",
    },
    {
      name: "Harshada Pawar",
      role: "Member",
      bio: "Expert in data analysis and extraction of data",
      image: "👩‍💼",
    },
    {
      name: "Shruti Mutakekar",
      role: "Member",
      bio: "Specialist in idea describing",
      image: "👩‍💼",
    },
    {
      name: "Shreyas Thorat",
      role: "Member",
      bio: "expert in website design and implmentation.",
      image: "👨‍💻",
    },
  ];

  const milestones = [
    {
      title: "Platform Launch",
      description: "Started with 50 water suppliers in Pune",
    },
    {
      title: "Addition of various component",
      description: "Components like Water ATM,Water Levels,Information about nearby dams,etc. ",
    },
    {
      title: "AI Integration",
      description: "Added predictive analytics and smart routing",
    },
    {
      title: "Pan-India Vision",
      description: "Scaling to major cities across India",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-ocean rounded-full">
                <Droplets className="h-16 w-16 text-white animate-float" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Smart Water Access
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing water access in urban India through technology, 
              connecting people with reliable water sources when they need it most.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-water">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To eliminate water scarcity stress by providing instant access to verified 
                  water suppliers, real-time availability data, and transparent pricing across 
                  Indian cities. We believe everyone deserves reliable access to clean water.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-water">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-accent" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted water access platform, leveraging smart 
                  technology to create a future where water scarcity is solved through 
                  efficient distribution and community-driven solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="bg-gradient-wave rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center shadow-water transition-water hover:shadow-glow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="shadow-water">
                  <CardHeader className="pb-3">
                    <Badge className="w-fit mb-2 bg-primary/10 text-primary border-primary/20">
                      {milestone.year}
                    </Badge>
                    <CardTitle className="text-lg">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center shadow-water transition-water hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{member.image}</div>
                    <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-hero text-center shadow-water mb-8">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Mission
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Whether you're a water supplier looking to reach more customers or 
                a user seeking reliable water access, we'd love to have you on board.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Become a Supplier
                </button>
                <button className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  Contact Us
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
