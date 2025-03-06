import { EditProfileFormData, profileSchema } from "@/utils/edit-profile-types";
import { mockUserData } from "@/utils/mock/user-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import { InputEditProfile } from "./edit-profile-input";

interface ProfileFormProps {
  isLoading: boolean;
  imageChanged: boolean;
  imageFile: File | null;
  onCancel: () => void;
  onSubmit: (data: EditProfileFormData) => void;
}

export function ProfileForm({
  isLoading,
  imageChanged,
  imageFile,
  onCancel,
  onSubmit,
}: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: mockUserData ?? "",
  });

  const formValues = watch();
  const hasChanges =
    (Object.keys(mockUserData) as Array<keyof typeof mockUserData>).some(
      (key) => formValues[key] !== mockUserData[key]
    ) ||
    (formValues.newPassword !== "" && formValues.newPassword !== undefined) ||
    imageChanged; // Verifica se a imagem foi alterada

  const changedFields = (
    Object.keys(mockUserData) as Array<keyof typeof mockUserData>
  ).reduce((acc, key) => {
    const formValue = formValues[key];
    const mockValue = mockUserData[key];

    // Verifica se o campo foi alterado e não está vazio
    if (
      formValue !== mockValue &&
      formValue !== "" &&
      formValue !== null &&
      formValue !== undefined
    ) {
      acc[key] = formValue;
    }
    return acc;
  }, {} as Partial<EditProfileFormData>);

  if (formValues.newPassword !== "" && formValues.newPassword !== undefined) {
    changedFields.newPassword = formValues.newPassword;
  }

  if (imageChanged && imageFile) {
    changedFields.profileImageUrl = imageFile; // Adiciona o arquivo de imagem
  }

  const handleFormSubmit = () => {
    if (Object.keys(changedFields).length > 0) {
      const formData = new FormData();

      Object.entries(changedFields).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value); // Adiciona a imagem como arquivo
        } else {
          formData.append(key, value.toString()); // Adiciona outros campos como texto
        }
      });

      onSubmit(formData as unknown as EditProfileFormData); // Envia o FormData
    } else {
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full max-w-lg mt-6 p-2 md:p-0"
    >
      <InputEditProfile
        label="*Nome:"
        name="firstName"
        placeholder="Lucas"
        register={register}
        error={errors.firstName}
      />

      <InputEditProfile
        label="*Sobrenome:"
        name="lastName"
        placeholder="Lima"
        register={register}
        error={errors.lastName}
      />

      <InputEditProfile
        label="*E-mail:"
        name="email"
        type="email"
        placeholder="lucaslima@gmail.com"
        disabled
        register={register}
        error={errors.email}
      />

      <InputEditProfile
        label="*Telefone celular:"
        name="phone"
        placeholder="(84) 93259-5683"
        register={register}
        error={errors.phone}
      />

      <InputEditProfile
        label="Linkedin ou portfólio:"
        name="linkedin"
        placeholder="https://www.linkedin.com/in/name/"
        register={register}
        error={errors.linkedin}
      />

      <InputEditProfile
        label="Nova senha:"
        name="newPassword"
        type="password"
        register={register}
        error={errors.newPassword}
      />

      <InputEditProfile
        label="Confirme a senha:"
        name="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword}
      />

      <div className="flex flex-col gap-2 md:flex-row">
        <Button
          type="submit"
          disabled={!hasChanges && !imageChanged}
          className={
            hasChanges || imageChanged
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }
        >
          {isLoading ? "Salvando..." : "Salvar"}
        </Button>

        <Button
          type="button"
          onClick={onCancel}
          className="hover:bg-red-600 hover:text-white"
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
}
