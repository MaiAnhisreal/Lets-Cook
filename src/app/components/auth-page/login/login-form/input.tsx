"use client";

import Icon from "@material-ui/core/Icon/Icon";

interface IInputLonginForm {
  label: string;
  value: string;
  placeholder: string;
  type: string;
  icon?: string;
  onClick?: () => void;
  onChange: (value: string) => void;
}

const InputLoginForm: React.FC<IInputLonginForm> = ({
  label,
  type,
  value,
  placeholder,
  icon,
  onClick,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="mb-4">
      <div className="text-neutral-950 text-base mb-2">{label}</div>
      <div className="relative w-full">
        <input
          className="h-auto w-full p-3 bg-gray-100 rounded-lg justify-start items-center gap-3"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
        ></input>
        {icon && (
          <div className="w-6 h-6 relative flex-col justify-start items-start inline-flex">
            <Icon
              component="span"
              className={`ico-${icon}`}
              onClick={onClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputLoginForm;
