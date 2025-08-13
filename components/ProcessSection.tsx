import Image from "next/image"

interface ProcessStep {
  title: string
  content: string
}

interface OurProcess {
  title: string
  desc: string
  steps: ProcessStep[]
}

interface ProcessSectionProps {
  ourProcess?: OurProcess
}

const defaultProcessSteps: ProcessStep[] = [
  {
    title: "Scope Analysis",
    content: "It all starts when you provide us with the basics. We will need your project's name, its description, and implementation details (is it a first-time implementation? Are you migrating?). You can also set your budget at this stage. Our AI platform will analyze your requirements and share recommended team size, estimated implementation time, and more."
  },
  {
    title: "Analyzing Functional Requirements",
    content: "We will extract your functional requirements and business processes based on the information you share with us. This will form the basis of your Salesforce implementation project."
  },
  {
    title: "Classification Questions",
    content: "Our AI agents will need answers to a few questions to offer personalized Salesforce consultation services. These questions will be related to business processes, workflow requirements, user management, data, systems, and more."
  },
  {
    title: "License Selection",
    content: "Based on your project requirements, our AI agents will recommend the best and most suitable licenses to you. You can also assign the right license to the right user role."
  },
  {
    title: "Estimated Cost",
    content: "You will now see an estimated cost range based on the questions you answer, the requirements you share, and the licenses you choose. This helps you plan your Salesforce implementation accordingly."
  }
]

export default function ProcessSection({ ourProcess }: ProcessSectionProps) {
  // Debug: Log the ourProcess data
  console.log('ProcessSection ourProcess:', ourProcess);
  
  // Use dynamic data if available, otherwise fallback to default
  const processData = ourProcess || {
    title: "Let Us Drive You Through Our Process",
    desc: "She is now based in Quebec but works for clients all around the globe. From textile design to murals, editorial illustrations and book covers, her style is recognized by her simple and perfectly arranged shapes as well as her rich and vibrant color palette. Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge breasted jacket. detail elegant with neutral color scheme quartz leather strap fasten buckle clasp. However, the same reason also makes it messy. If someone is having a bad day, we might see it as a sign of tension or lack of investment in the project, for outsider lacking an understanding of the complex dynamics of a team can lead to the wrong conclusions.",
    steps: defaultProcessSteps
  };

  const steps = processData.steps || defaultProcessSteps;

  return (
    <section className="py-16 bg-white" id="our-process">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">OUR PROCESS</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-red-500"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-500">
              {processData.title}
            </h2>
          </div>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Introductory Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed">
            {processData.desc}
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gray-300"></div>
          
          {/* Process Steps */}
          <div className="flex flex-wrap justify-between gap-4">
            {steps.map((step: ProcessStep, index: number) => (
              <div key={index} className="relative text-center flex-1 min-w-[200px]">
                {/* Timeline Dot - Replaced with checkmark image */}
                <div className="w-6 h-6 mx-auto mb-6 relative z-10">
                  <Image 
                    src="/images/Tick-common-icon.png" 
                    alt="Completed step" 
                    width={24} 
                    height={24} 
                    className="object-contain"
                  />
                </div>
                
                {/* Step Content */}
                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-500">Step-{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}