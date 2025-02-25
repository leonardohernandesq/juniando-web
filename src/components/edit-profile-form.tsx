import {
  EditProfileFormData,
  profileSchema,
  UserData,
} from "@/utils/edit-profile-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface ProfileFormProps {
  initialData: UserData | null;
  isLoading: boolean;
  formChanged: boolean;
  setFormChanged: (changed: boolean) => void;
  imageChanged: boolean;
  imageFile: File | null;
  onCancel: () => void;
  onSubmit: (data: EditProfileFormData) => void;
}

export function ProfileForm({
  initialData,
  isLoading,
  formChanged,
  setFormChanged,
  imageChanged,
  imageFile,
  onCancel,
  onSubmit,
}: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    reset,
    watch,
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedin: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Observar mudanças no formulário
  const formValues = watch();

  // Preencher o formulário quando os dados iniciais estiverem disponíveis
  useEffect(() => {
    if (initialData) {
      reset({
        firstName: initialData.firstName,
        lastName: initialData.lastName,
        email: initialData.email,
        phone: initialData.phone,
        linkedin: initialData.linkedin || "",
        newPassword: "",
        confirmPassword: "",
        profileImage: initialData.profileImageUrl,
      });
    }
  }, [initialData, reset]);

  // Verificar se houve mudanças comparando com os dados originais
  useEffect(() => {
    if (initialData) {
      const hasFormChanges =
        formValues.firstName !== initialData.firstName ||
        formValues.lastName !== initialData.lastName ||
        formValues.email !== initialData.email ||
        formValues.phone !== initialData.phone ||
        formValues.linkedin !== initialData.linkedin ||
        (formValues.newPassword && formValues.newPassword.trim() !== "");

      setFormChanged(hasFormChanges || imageChanged);
    }
  }, [formValues, initialData, imageChanged, setFormChanged]);

  const handleFormSubmit = (data: EditProfileFormData) => {
    // Verificar se houve alguma alteração antes de enviar
    if (!formChanged) {
      alert("Nenhuma alteração foi feita.");
      return;
    }

    // Criar um objeto de dados para envio
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    // Apenas adiciona linkedin se não for vazio
    if (data.linkedin && data.linkedin.trim() !== "") {
      formData.append("linkedin", data.linkedin);
    }

    // Apenas adiciona password se não for vazio
    if (data.newPassword && data.newPassword.trim() !== "") {
      formData.append("password", data.newPassword);
    }

    // Adiciona a imagem ao FormData se foi alterada
    if (imageChanged && imageFile) {
      formData.append("profileImage", imageFile);
    }

    // Cria um objeto limpo para o log que inclui apenas os campos alterados
    const dataToLog: Record<string, unknown> = {};

    if (initialData) {
      if (data.firstName !== initialData.firstName) {
        dataToLog.firstName = data.firstName;
      }

      if (data.lastName !== initialData.lastName) {
        dataToLog.lastName = data.lastName;
      }

      if (data.email !== initialData.email) {
        dataToLog.email = data.email;
      }

      if (data.phone !== initialData.phone) {
        dataToLog.phone = data.phone;
      }

      if (data.linkedin !== initialData.linkedin) {
        dataToLog.linkedin = data.linkedin;
      }

      if (data.newPassword && data.newPassword.trim() !== "") {
        dataToLog.password = data.newPassword;
      }

      if (imageChanged) {
        dataToLog.profileImage = imageFile
          ? `(Novo arquivo: ${imageFile.name}, Tamanho: ${(imageFile.size / 1024 / 1024).toFixed(2)}MB)`
          : "Imagem alterada";
      }
    }

    console.log("Campos alterados:", dataToLog);

    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full max-w-lg mt-6 p-2 md:p-0"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">*Nome:</label>
        <input
          {...register("firstName")}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-blue-500"
          placeholder="Lucas"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">*Sobrenome:</label>
        <input
          {...register("lastName")}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-blue-500"
          placeholder="Lima"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">*E-mail:</label>
        <input
          disabled
          {...register("email")}
          type="email"
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-blue-500 cursor-not-allowed"
          placeholder="lucaslima@gmail.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">
          *Telefone celular:
        </label>
        <input
          {...register("phone")}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-blue-500"
          placeholder="(84) 93259-5683"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">
          Linkedin ou portfólio:
        </label>
        <input
          {...register("linkedin")}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-blue-500"
          placeholder="https://www.linkedin.com/in/name/"
        />
        {errors.linkedin && (
          <p className="text-red-500 text-sm">{errors.linkedin.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Nova senha:</label>
        <input
          type="password"
          {...register("newPassword")}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-blue-500"
        />
        {errors.newPassword && (
          <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">
          Confirme a senha:
        </label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-blue-500"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 md:flex-row">
        <button
          type="submit"
          className={`w-full py-2 rounded-lg text-lg font-semibold ${
            formChanged
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={!formChanged || isLoading}
        >
          {isLoading ? "Salvando..." : "Salvar"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="w-full py-2 rounded-lg text-lg font-semibold transition-all hover:bg-red-600 hover:text-white"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
