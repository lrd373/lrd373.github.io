export const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-primary text-deep-mauve text-4xl md:text-5xl">
      {children}
    </h1>
  );
};
