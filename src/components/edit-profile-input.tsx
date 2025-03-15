import { EditProfileFormData } from "@/utils/edit-profile-types";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  name: keyof EditProfileFormData;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  register: UseFormRegister<EditProfileFormData>;
  error?: FieldError;
}

export const InputEditProfile = ({
  label,
  name,
  type = "text",
  placeholder = "",
  disabled = false,
  register,
  error,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold">{label}</label>
      <input
        {...register(name)}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full border rounded-lg px-3 py-2 mt-1 focus:outline-blue-500 ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};
