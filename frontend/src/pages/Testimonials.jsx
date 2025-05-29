import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Sales Executive",
    text: "The Advanced Marketing course completely transformed my approach to client meetings. I've increased my conversions by 40%!",
    avatar: "RS"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Business Owner",
    text: "Abdul's negotiation techniques helped me secure better deals with suppliers. Worth every rupee!",
    avatar: "PP"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Marketing Manager",
    text: "Practical, actionable advice that works immediately. Best sales training I've ever attended.",
    avatar: "VS"
  }
];

const Testimonials = () => {
  return (
    <div className="container mx-auto py-12 px-4 bg-richblack-900">
      <h1 className="text-3xl font-bold text-center mb-12 text-yellow-50">Student Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;