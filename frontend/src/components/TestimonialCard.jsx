const TestimonialCard = ({ name, role, text, avatar }) => {
  return (
    <div className="bg-richblack-800 p-6 rounded-lg shadow-md border border-richblack-700">
      <p className="text-richblack-300 italic mb-4">"{text}"</p>
      <div className="flex items-center">
        <div className="bg-yellow-50 text-richblack-900 w-10 h-10 rounded-full flex items-center justify-center font-bold">
          {avatar}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-richblack-5">{name}</h4>
          <p className="text-richblack-300 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;