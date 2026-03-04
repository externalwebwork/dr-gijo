"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jowins Jose",
    time: "4 months ago",
    image: "/jowin.png",
    text: "I’ve already had two root canal treatments done by Dr Gijo.He is a highly detailed and committed doctor who explains everything",
  },
  {
    name: "Subhaa Girish",
    time: "4 months ago",
    text: "Very good service. Affordable charges.",
  },
  {
    name: "Manjusha Sivan",
    time: "5 months ago",
    text: `I recently had an appointment with Dr. Gijo at Gijos Dental Clinic, and the experience was truly outstanding. From start to finish, the visit was marked by professionalism and genuine care.

Dr. Gijo is incredibly knowledgeable. He took the time to explain my treatment options thoroughly, using clear and easy-to-understand language. This expertise immediately built my confidence and trust. Furthermore, his presence is remarkably calm. Dental visits can sometimes be stressful, but Dr. Gijo's soothing and composed approach made the entire procedure comfortable and anxiety-free.

What truly sets this clinic apart is how understanding Dr. Gijo is. He listened attentively to my concerns, never rushed the consultation, and personalized the treatment plan to fit my needs perfectly. The support extends beyond the doctor, as the entire staff is very supportive and friendly. They are efficient, welcoming, and clearly dedicated to ensuring every patient feels well-cared for.`,
  },
  {
    name: "Ajith P Sasidharan",
    time: "5 months ago",
    text: `Overcoming Childhood Dental Trauma – A Heartfelt Thanks to Gijo.

I’ve carried a deep fear of dental treatments since a traumatic experience during my childhood. For years, this fear kept me away from the dentist, even costing me a tooth. I thought all dental procedures were painful and scary — until I met Gijo.

Gijo helped me rebuild my confidence. He patiently explained how much modern dentistry has changed — how it’s now clean, efficient, and most importantly, pain-free. Despite this, I was still very anxious during the procedure. But Gijo was there every step of the way. He visited me frequently during the sessions and made me feel comfortable and supported.

Honestly, it didn’t even feel like I was in a hospital — it felt like I was just visiting a friend. That made all the difference.

The dental nurse was also incredibly supportive, helping me stay calm and confident throughout. Thanks to their care, I was finally able to face my fear and go through the treatment I had avoided for so long.

I highly recommend Gijo to anyone dealing with dental anxiety or trauma. He’s not just a professional — he truly cares.`,
  },
];

const avatarColors = [
  "bg-teal-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-indigo-500",
];

export default function TestimonialsSection() {
  return (
    <section className="py-8 lg:py-10 bg-[#F7FAFD]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2E86C1]">
            What People Say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index }: any) {
  const [expanded, setExpanded] = useState(false);
  const firstLetter = review.name.charAt(0).toUpperCase();
  const colorClass = avatarColors[index % avatarColors.length];

  const isLong = review.text.length > 180; // 👈 adjust if needed

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col">
      {/* Profile */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center text-white font-bold text-lg">
          {review.image ? (
            <Image
              src={review.image}
              alt={review.name}
              fill
              className="object-cover"
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center ${colorClass}`}
            >
              {firstLetter}
            </div>
          )}
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
          <p className="text-xs text-gray-500">{review.time}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Text */}
      <p
        className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
          !expanded && isLong ? "line-clamp-4" : ""
        }`}
      >
        {review.text}
      </p>

      {/* Read More Only If Long */}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-sm text-[#2E86C1] font-medium hover:underline text-left"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
