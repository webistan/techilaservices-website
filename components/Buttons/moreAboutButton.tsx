import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

interface MoreAboutButtonProps {
    className?: string;
    buttonText?: string;
}

const MoreAboutButton = ({ className, buttonText = "More About" }: MoreAboutButtonProps) =>{
    return(
        <>
        <Button className={`bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-8 ${className || ''}`}>
        {buttonText}
      </Button>
      <Button className={`bg-slate-900 hover:bg-slate-800 text-white rounded-full relative top-0.5 ${className || ''} px-6 py-8`}>
        <ArrowRight className="w-5 h-5" />
      </Button>
        </>
    )
}

export default MoreAboutButton;