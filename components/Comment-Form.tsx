import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function CommentFormSection() {
    return (
        <section className="mt-12 pt-8 border-t border-neutral-200">
            <h2 className="text-2xl font-semibold mb-1">Leave a Reply</h2>
            <p className="text-sm text-neutral-600 mb-6">
                Your email address will not be published. Required fields are marked *
            </p>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                            Name*
                        </label>
                        <Input type="text" id="name" name="name" placeholder="Enter Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                            Email*
                        </label>
                        <Input type="email" id="email" name="email" placeholder="Enter Email" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-neutral-700 mb-1">
                        Comment*
                    </label>
                    <Textarea id="comment" name="comment" rows={5} placeholder="Write your comments...." required />
                </div>
                <div>
                    <Button type="submit" className="bg-neutral-800 hover:bg-neutral-700 text-white">
                        Submit Now <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </form>
        </section>
    )
}