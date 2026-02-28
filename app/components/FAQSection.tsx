'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is root canal treatment?',
    answer: 'Root canal treatment is a dental procedure that removes infection inside the tooth and helps save the natural tooth structure.',
  },
  {
    question: 'Is root canal treatment painful?',
    answer: 'Modern dental technology and local anesthesia usually make root canal treatment comfortable for most patients.',
  },
  {
    question: 'How long does root canal treatment take?',
    answer: 'Root canal treatment is usually completed in 1 to 2 visits, depending on the severity of infection and tooth condition.',
  },
  {
    question: 'Why do I need a crown after root canal?',
    answer: 'A crown helps strengthen and protect the treated tooth and improves durability and chewing function.',
  },
  {
    question: 'What happens if I ignore tooth infection?',
    answer: 'An untreated infection can spread and may lead to severe pain, swelling, bone damage, or tooth loss.',
  },
  {
    question: 'Can root canal save my natural tooth?',
    answer: 'Yes, root canal treatment removes infection while preserving your natural tooth.',
  },
  {
    question: 'How long does a root canal treated tooth last?',
    answer: 'With proper dental care and regular checkups, root canal treated teeth can last for many years.',
  },
  {
    question: 'Should I stop my current medicines before dental treatment?',
    answer: 'Do not stop any medication without consulting your doctor or dentist.',
  },
  {
    question: 'Why do I need a root canal?',
    answer: (
      <>
        <p className="mb-2">You may need a root canal if you experience:</p>
        <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
          <li>Severe tooth pain</li>
          <li>Sensitivity to hot or cold</li>
          <li>Swelling in gums</li>
          <li>Tooth abscess</li>
          <li>Deep cavity or infection</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Do I need a crown after root canal?',
    answer: 'It is not mandatory to do crown after root canal treatment. Modern biomimetic approaches like direct and indirect restoration can avoid crown.',
  },
  {
    question: 'What happens if I delay treatment?',
    answer: (
      <>
        <p className="mb-2">Delaying treatment can lead to:</p>
        <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
          <li>Increased pain</li>
          <li>Spread of infection</li>
          <li>Swelling or abscess</li>
          <li>Tooth loss</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Is root canal treatment safe?',
    answer: 'Yes. It is a safe and commonly performed procedure that helps preserve your natural tooth.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 lg:py-10 bg-[#F4F6F7] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E86C1] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about root canal treatment
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#2E86C1]/50 hover:shadow-md bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#F4F6F7] hover:bg-blue-50/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-[#2E86C1] font-bold text-sm flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-gray-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 pt-0">
                    <div className="pl-11 sm:pl-[3.25rem] border-l-2 border-[#2E86C1]/30 text-gray-600 leading-relaxed">
                      {typeof faq.answer === 'string' ? (
                        <p>{faq.answer}</p>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
