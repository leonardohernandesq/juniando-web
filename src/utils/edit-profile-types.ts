// src/types/profile.ts
import { z } from "zod";

export const profileSchema = z
  .object({
    firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    lastName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido"),
    phone: z
      .string()
      .regex(
        /^\(\d{2}\) \d{5}-\d{4}$/,
        "Formato inválido. Ex: (99) 99999-9999"
      ),
    linkedin: z.string().url("URL inválida").optional().or(z.literal("")),
    newPassword: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .optional()
      .or(z.literal("")),
    confirmPassword: z.string().optional(),
    profileImage: z
      .any()
      .refine(
        (file) =>
          file &&
          (typeof file === "string" ||
            (file.size <= 20 * 1024 * 1024 &&
              ["image/png", "image/jpeg", "image/jpg"].includes(file.type))),
        {
          message:
            "A imagem é obrigatória e deve ser PNG, JPG ou JPEG com no máximo 20MB",
        }
      ),
  })
  .refine(
    (data) => !data.newPassword || data.newPassword === data.confirmPassword,
    {
      message: "As senhas não coincidem",
      path: ["confirmPassword"],
    }
  );

export type EditProfileFormData = z.infer<typeof profileSchema>;

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin?: string;
  profileImageUrl?: string;
}
