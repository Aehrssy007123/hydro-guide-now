import { useState } from "react";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hi! I'm AquaBot, your water access assistant. I can help you find water sources, check availability, and answer questions about pricing. How can I help you today?",
      timestamp: new Date(),
    },
  ]);

  const quickResponses = [
    "Find water near me",
    "Check ATM locations",
    "Water tanker prices",
    "Emergency water supply",
  ];

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("near me") || msg.includes("location") || msg.includes("find")) {
      return "I found 12 water sources within 2km of your location! The nearest is AquaSupply Tanker at 0.8km (₹200/1000L, Available). Would you like directions or contact details?";
    }
    
    if (msg.includes("atm") || msg.includes("dispenser")) {
      return "There are 5 Water ATMs nearby! The closest is at Station Road (₹1/L, 24/7 available). Smart Water ATM at Mall Plaza has the best rates at ₹0.50/L. Need specific locations?";
    }
    
    if (msg.includes("price") || msg.includes("cost") || msg.includes("rate")) {
      return "Current water prices in your area: Tankers: ₹180-₹220/1000L, ATMs: ₹0.50-₹1.20/L. Blue Drop Services has the best tanker rates at ₹180/1000L. Want to see all suppliers?";
    }
    
    if (msg.includes("emergency") || msg.includes("urgent") || msg.includes("help")) {
      return "For emergency water supply, call our 24/7 hotline: 1800-911-911. I can also connect you with the nearest available supplier right now. Crystal Clear Tankers is 1.2km away and available immediately!";
    }
    
    if (msg.includes("quality") || msg.includes("safe") || msg.includes("pure")) {
      return "All our registered suppliers meet BIS standards for drinking water. Water ATMs use RO+UV filtration. For quality reports, suppliers with ⭐⭐⭐⭐⭐ ratings are verified. Need quality certificates?";
    }
    
    if (msg.includes("booking") || msg.includes("order") || msg.includes("schedule")) {
      return "You can directly call suppliers to book water delivery. AquaSupply: +91-98765-43210 (Available now), Blue Drop: +91-98765-43212 (2hr delivery). Should I dial one for you?";
    }

    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
      return "Hello! I'm here to help you find water sources quickly. You can ask me about nearby suppliers, ATM locations, prices, or water quality. What do you need help with?";
    }
    
    return "I can help you with: 🚰 Finding water sources, 📍 ATM locations, 💰 Price comparisons, 🚛 Tanker bookings, ⚡ Emergency supply, 🌊 Water quality info. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: getBotResponse(message),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setMessage("");
  };

  const handleQuickResponse = (response: string) => {
    setMessage(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-gradient-ocean shadow-glow hover:scale-110 transition-water"
          size="sm"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 animate-slide-up">
          <Card className="shadow-glow border-primary/20">
            <CardHeader className="bg-gradient-ocean text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="h-5 w-5" />
                AquaBot Assistant
              </CardTitle>
              <p className="text-primary-foreground/80 text-sm">
                💧 Your smart water guide
              </p>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages Area */}
              <ScrollArea className="h-80 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-2 ${
                        msg.type === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.type === "bot" && (
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          msg.type === "user"
                            ? "bg-primary text-primary-foreground ml-auto"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {msg.content}
                      </div>
                      
                      {msg.type === "user" && (
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-accent" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Quick Responses */}
              <div className="p-4 border-t bg-secondary/10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickResponses.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {response}
                    </button>
                  ))}
                </div>

                {/* Input Area */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about water sources..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;