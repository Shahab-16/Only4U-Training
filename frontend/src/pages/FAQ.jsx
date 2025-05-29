import FAQItem from '../components/FAQItem';

const faqs = [
  {
    question: "How are the classes conducted?",
    answer: "All training is conducted offline in-person for maximum interaction and practical learning."
  },
  {
    question: "What is the duration of each course?",
    answer: "Courses range from 2-4 weeks depending on the program, with 3 sessions per week."
  },
  {
    question: "Do you provide certificates?",
    answer: "Yes, all participants receive a certificate of completion after finishing the course."
  },
  {
    question: "Can I get personalized coaching?",
    answer: "Yes, we offer one-on-one coaching sessions at an additional cost."
  }
];

const FAQ = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl bg-richblack-900">
      <h1 className="text-3xl font-bold text-center mb-12 text-yellow-50">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;