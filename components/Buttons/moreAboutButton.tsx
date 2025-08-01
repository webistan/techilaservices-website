import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

interface MoreAboutButtonProps {
    className?: string;
    buttonText?: string;
    href?: string;
}

const MoreAboutButton = ({ className, buttonText = "More About", href }: MoreAboutButtonProps) => {
    const buttonContent = (
        <>
            <div className="button-swap-container">
                <Button className={`button-swap-1 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-8 ${className || ''}`}>
                    {buttonText}
                </Button>
                <Button className={`button-swap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full relative top-0.5 ${className || ''} px-6 py-8`}>
                    <ArrowUpRight className="w-5 h-5" />
                </Button>
            </div>
        </>
    );

    if (href) {
        return (
            <Link href={href} className="inline-flex gap-2">
                {buttonContent}
            </Link>
        );
    }

    return (
        <div className="inline-flex gap-2">
            {buttonContent}
        </div>
    );
}

export default MoreAboutButton;