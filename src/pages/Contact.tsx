
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-gray-500">
            Have questions about Emergency Call Tracker? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Get in Touch</h2>
              <p className="text-gray-600">
                Fill out the form and our team will get back to you as soon as possible.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Your email address" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder="How can we help you?" 
                  rows={5} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="text-gray-600">
                You can also reach out to us using the information below.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emergency mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    123 Emergency Road<br />
                    Surat, Gujarat 395003<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-emergency mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">
                    Office: 0261-2422244<br />
                    Support: 0261-2368040
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emergency mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">
                    info@emergencycalltracker.com<br />
                    support@emergencycalltracker.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
              <h3 className="font-medium mb-2">Emergency Support Hours</h3>
              <p className="text-gray-600">
                Our emergency support team is available 24/7.
              </p>
              <p className="text-gray-600 mt-2">
                Regular office hours:<br />
                Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                Saturday: 10:00 AM - 2:00 PM IST<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
