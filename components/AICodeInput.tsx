interface Props {
  type?: string,
  value: string;
  placeholder: string,
  onChange: (apiKey: string) => void;
}

export const AICodeInput: React.FC<Props> = ({ type = 'input', value, onChange, placeholder }) => {
  return (
    <label className="flex flex-col">
      {placeholder}
      <input
        className="mt-1 h-[24px] w-[280px] rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
