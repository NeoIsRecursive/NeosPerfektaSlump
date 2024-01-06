type Props = {
  label: string;
  id: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const Input = ({ className, label, value, onChange, id }: Props) => (
  <div className={className}>
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    <input
      id={id}
      type="search"
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
    />
  </div>
);
