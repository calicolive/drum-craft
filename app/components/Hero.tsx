interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return <h1 className='text-5xl font-medium md:text-7xl'>{children}</h1>;
};
export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return <p className='text-md mt-4 text-neutral-300'>{children}</p>;
};
export default function Hero({ children }: HeroProps) {
  return <div className='text-center text-neutral-50'>{children}</div>;
}
