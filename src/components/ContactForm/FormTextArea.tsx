export const FormTextArea = ({
  name,
  ...props
}: React.ComponentPropsWithoutRef<"textarea">) => {
  return (
    <div>
      <label className="text-sm uppercase md:text-base" htmlFor={name}>
        {name}
      </label>
      <textarea
        name={name}
        className="font-secondary border-deep-mauve-50 focus-visible:outline-deep-fuschia w-full rounded-md border p-2"
        {...props}
      />
    </div>
  );
};
