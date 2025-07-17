
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import TrialFormModal from "./TrialFormModal";

const pricingTiers = [
  {
    name: 'Basic',
    price: '$29',
    description: 'Perfect for individual learners',
    features: [
      'Single language assessment',
      'General proficiency test',
      'Basic speaking evaluation',
      'Digital certificate',
      'Valid for 1 year',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'For career advancement',
    features: [
      'Full proficiency assessment',
      'Advanced speaking evaluation',
      'Business language modules',
      'Digital & printable certificates',
      'Valid for 2 years',
      'Progress tracking dashboard',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams & organizations',
    features: [
      'Multi-language assessments',
      'Bulk testing for teams',
      'Custom test creation',
      'Organization dashboard',
      'API integration',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  
  const handleTrialClick = () => {
    setIsTrialModalOpen(true);
  };
  
  return (
    <>
      <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Flexible pricing options for individuals, professionals, and organizations of all sizes.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`flex flex-col ${
                tier.popular
                  ? 'z-10 rounded-xl ring-2 ring-blue-600 lg:bg-white lg:shadow-xl lg:-mx-4 lg:mt-[-20px]'
                  : 'bg-white/60 lg:bg-white/60 lg:ring-1 lg:ring-gray-200'
              } ${
                index === 0 ? 'rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none' : ''
              } ${
                index === pricingTiers.length - 1 ? 'rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none' : ''
              }`}
            >
              {tier.popular && (
                <div className="flex flex-col">
                  <div className="mx-auto -mt-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                  {tier.name !== 'Enterprise' && (
                    <span className="ml-1 text-sm font-semibold leading-6 text-gray-600">
                      /test
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-500">{tier.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`mt-8 w-full ${tier.popular ? '' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`} 
                  variant={tier.popular ? 'default' : 'outline'}
                  onClick={tier.cta === 'Start Free Trial' ? handleTrialClick : undefined}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      
      <TrialFormModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </>
  );
}
