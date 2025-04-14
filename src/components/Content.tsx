import Image from 'next/image';
import Welcome from './Welcome';

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className = "" }: ContentProps) => {
  return (
    <div className={`relative w-full h-screen ${className}`}>
      <Image 
        src="/images/Background.jpg"  // Use the imported image here
        alt="Background" 
        layout="fill"  // This makes the image fill its container
        objectFit="cover"  // Ensures it covers the entire area
        priority={true}
        className="z-[-1]"  // Keeps the image in the background
      />
      {children}
    </div>
  );
};

export default Content;
