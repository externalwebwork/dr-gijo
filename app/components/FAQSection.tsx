'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is Lumbar Spondylosis?',
    answer: 'Lumbar Spondylosis is a degenerative condition affecting the lower spine. It may cause persistent low back pain, stiffness, nerve irritation, and sometimes radiating pain to the legs.',
  },
  {
    question: 'Can Lumbar Spondylosis be managed without surgery?',
    answer: 'In many cases, symptoms can be managed without surgery. Ayurvedic Treatment focuses on reducing discomfort, improving flexibility, and supporting spinal health through natural approaches.',
  },
  {
    question: 'How does Ayurveda support Lumbar Spondylosis care?',
    answer: (
      <>
        Ayurveda aims to balance aggravated Vata Dosha and support musculoskeletal health through:
        <ul className="mt-3 space-y-1.5 text-gray-600">
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Herbal internal medicines
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Panchakarma therapies
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Oil-based external treatments
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Diet & lifestyle guidance
          </li>
        </ul>
        <p className="mt-3 text-gray-600">The focus is on overall wellness and long-term spinal support.</p>
      </>
    ),
  },
  {
    question: 'How long does Ayurvedic Treatment take?',
    answer: (
      <>
        Treatment duration depends on:
        <ul className="mt-3 space-y-1.5 text-gray-600 list-disc list-inside">
          <li>Severity of degeneration</li>
          <li>Duration of symptoms</li>
          <li>Individual body condition</li>
        </ul>
        <p className="mt-3 text-gray-600">Mild cases may show improvement within a few weeks, while long-standing conditions may require a structured therapy plan.</p>
      </>
    ),
  },
  {
    question: 'Is Ayurvedic Treatment safe?',
    answer: 'When provided by qualified Ayurvedic practitioners, treatments are generally considered safe. Therapy plans are customized based on individual health assessments.',
  },
  {
    question: 'Will I get quick relief?',
    answer: 'Some patients report relief from stiffness and discomfort during early sessions. However, outcomes vary depending on the condition and consistency with treatment.',
  },
  {
    question: 'Should I stop my current medicines?',
    answer: 'Do not stop any existing medications without consulting your doctor. Treatment plans are designed carefully after proper consultation.',
  },
  {
    question: 'Can Lumbar Spondylosis worsen if left untreated?',
    answer: 'If not addressed properly, symptoms may progress and affect mobility or nerve function. Early consultation is recommended.',
  },
  {
    question: 'Is this suitable for elderly patients?',
    answer: 'Yes, Ayurvedic therapies can support age-related spinal changes when supervised by experienced practitioners.',
  },
  {
    question: 'Do you offer personalized treatment plans?',
    answer: 'Yes. Every patient undergoes a detailed consultation before beginning therapy to ensure a customized and appropriate care plan.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 lg:py-10 bg-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about Lumbar Spondylosis and our Ayurvedic approach
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-orange-300 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-gray-50 hover:bg-orange-50/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-sm flex items-center justify-center">
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
                    <div className="pl-11 sm:pl-[3.25rem] border-l-2 border-orange-200 text-gray-600 leading-relaxed">
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
