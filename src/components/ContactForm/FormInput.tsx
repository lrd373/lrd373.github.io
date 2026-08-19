interface FormInputProps extends React.ComponentPropsWithoutRef<"input"> {
  error: string | null;
}

export const FormInput = ({ name, error, ...props }: FormInputProps) => {
  return (
    <div className="relative flex flex-col">
      <label className="uppercase text-sm md:text-md" htmlFor={name}>
        {name}
      </label>
      <input
        name={name}
        className="font-secondary border-deep-mauve-50 focus:outline-deep-fuschia focus-visible:outline-deep-fuschia w-full rounded-md border p-2"
        {...props}
      />
      <span className="absolute -bottom-5 left-0 text-red-400">{error}</span>
    </div>
  );
};
