const Card = () => {
  const data = [
    {
      id: "1",
      number: "1+",
      title: "Years Experience",
      icon: "💼", // Work / experience
    },
    {
      id: "2",
      number: "4+",
      title: "Projects Completed",
      icon: "📁", // Project folder
    },
    {
      id: "3",
      number: "1+",
      title: "Certifications",
      icon: "🎓", // Graduation cap
    },
    {
      id: "4",
      number: "2024",
      title: "Started Year",
      icon: "📅", // Calendar
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mx-3 mt-4 md:mt-10">
      {data.map((d) => (
        <div className="shadow-xl shadow-primary/40 py-4 rounded-2xl text-center bg-secondary">
          <h2 className="text-2xl">{d.icon}</h2>
          <p className="text-neutral text-3xl font-semibold">{d.number}</p>
          <p className="text font-medium text-primary/90">{d.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
