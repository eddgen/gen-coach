import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { interests } from "@/data";

const initialForm = { name: "", email: "", interest: "", message: "" };

const ContactInfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="bg-linear-to-br from-blue-600 to-purple-600 p-3 rounded-full shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="pt-32 pb-24 min-h-screen bg-linear-to-b from-black to-[#0A0A0A]"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2] mb-6">
            Sign Up for a Private Discussion with <br />
            <span className="text-gradient-blue">One of Our Experts</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Every transformation starts with a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          <div className="glass-card rounded-xl p-8 space-y-8 animate-on-scroll">
            <h2 className="text-2xl font-bold">Get in Touch</h2>

            <div className="space-y-6">
              <ContactInfoItem
                icon={Mail}
                label="Email Us"
                value="coach@gencoach.com"
              />
              <ContactInfoItem
                icon={Phone}
                label="Call Us"
                value="+40 777 777 777"
              />
              <ContactInfoItem
                icon={MapPin}
                label="Visit Us"
                value="Bulevardul Lacul Tei 124, 020396 București"
              />
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold">Working Hours</h3>
              </div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Monday - Sunday</span>
                <span>Gains never stop</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8 animate-on-scroll">
            {submitted ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-2">
                  Thanks, {form.name.split(" ")[0] || "there"}!
                </h2>
                <p className="text-gray-400">
                  We've received your request and will reach out within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Send Us a Message</h2>
                  <p className="text-gray-400 text-sm">
                    Fill out the form and we'll respond with a plan tailored to
                    you.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Interests</Label>
                  <Select
                    value={form.interest}
                    onValueChange={(value) =>
                      setForm((prev) => ({ ...prev, interest: value }))
                    }
                    name="interest"
                    required
                  >
                    <SelectTrigger id="interest" className="w-full">
                      <SelectValue placeholder="Select what you're interested in" />
                    </SelectTrigger>
                    <SelectContent>
                      {interests.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your goals..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 group"
                >
                  Send Request
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
