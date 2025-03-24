import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What industries have you worked in as a designer and developer?",
    answer: "I have worked in multiple industries including fintech, e-commerce, and healthcare.",
  },
  {
    question: "Are you available for freelance design work?",
    answer: "Yes, I am open to freelance opportunities. Feel free to reach out!",
  },
  {
    question: "Can I download your resume/CV for information?",
    answer:
      "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements.",
    highlighted: true,
  },
  {
    question: "What tools do you use for freelance work?",
    answer: "I use Figma, Gimp, React, and Javascript, CSS, HTML, Tailwind CSS.",
  },
  {
    question: "Do you have a portfolio I can check out?",
    answer: "Yes, you can view my portfolio on my website for a detailed showcase of my work.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-300 text-gray-300 py-16 px-6 md:px-20">
      <h3 className="text-yellow-500 text-sm font-semibold uppercase mb-4">FAQs</h3>
      <h2 className="text-3xl md:text-4xl font-semibold text-black">
        Questions? <span className="italic text-yellow-500">Look here</span>
      </h2>
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg cursor-pointer flex justify-between items-center transition-all ${
              faq.highlighted ? "bg-custom-green text-gray-200" : "bg-custom-green"
            } hover:bg-custom-yellow  hover:text-custom-green`}
            onClick={() => toggleFAQ(index)}
          >
            <div>
              <h3 className="font-small text-lg">{faq.question}</h3>
              {openIndex === index && (
                <p className="text-sm mt-2">{faq.answer}</p>
              )}
            </div>
            <button className="text-lg">
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
