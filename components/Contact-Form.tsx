import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ContactFormSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter leading-tight text-gray-900 mb-8">
              Let's contact for better result
            </h2>
            <div className="relative pl-8 mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></div>
              {/* This is a visual representation of the line. Adjust thickness/color as needed. */}
            </div>
            <div className="space-y-2">
              <a href="skype:binox.skype?chat" className="block text-gray-700 hover:text-gray-900 underline">
                LiveChat@binox.skype
              </a>
              <p className="text-2xl font-bold text-gray-900">BINOX.</p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input type="text" id="name" name="name" placeholder="" />
              </div>
              <div></div> {/* Empty cell for layout, or can be removed if single column on small screens */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input type="email" id="email" name="email" placeholder="" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <Input type="tel" id="phone" name="phone" placeholder="" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <Input type="text" id="company" name="company" placeholder="" />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <Input type="url" id="website" name="website" placeholder="" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="interested-in" className="block text-sm font-medium text-gray-700 mb-1">
                  Interested in
                </label>
                <Select name="interested-in">
                  <SelectTrigger>
                    <SelectValue placeholder="Market Analysis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="market-analysis">Market Analysis</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" name="message" rows={5} placeholder="Write your message here...." />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-auto bg-gray-900 text-white hover:bg-gray-800">
                  Submit Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
