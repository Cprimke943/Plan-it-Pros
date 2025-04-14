interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className = '' }: ContentProps) => {
  return (
    <div
      className={`min-h-screen bg-[url('/images/Background.jpg')] bg-cover bg-center bg-fixed ${className}`}
    >
      {/* Optional overlay for readability */}
      <div className="bg-black/20 min-h-screen p-4">
        {children}
      </div>
    </div>
  );
};

export default Content;
