import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-richblack-700 pb-4 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="font-medium text-lg text-richblack-5">{question}</h3>
        <span className="text-yellow-50 text-2xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && <p className="mt-2 text-richblack-300">{answer}</p>}
    </div>
  );
};

export default FAQItem;