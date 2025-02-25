"use client";

import { ProfileForm } from "@/components/edit-profile-form";
import ProfileImage from "@/components/edit-profile-image";
import { EditProfileFormData } from "@/utils/edit-profile-types";
import { mockUserData } from "@/utils/mock/user-data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface OriginalData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  profileImageUrl: string;
}

export default function EditProfile() {
  const router = useRouter();
  const [originalData, setOriginalData] = useState<OriginalData | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageChanged, setImageChanged] = useState<boolean>(false);
  const [formChanged, setFormChanged] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = () => {
      setIsLoading(true);

      setTimeout(() => {
        setOriginalData({
          firstName: mockUserData.firstName,
          lastName: mockUserData.lastName,
          email: mockUserData.email,
          phone: mockUserData.phone,
          linkedin: mockUserData.linkedin,
          profileImageUrl: mockUserData.profileImageUrl,
        });

        setImage(mockUserData.profileImageUrl);

        setIsLoading(false);
      }, 1000);
    };

    fetchUserData();
  }, []);

  const handleSaveProfile = async (data: EditProfileFormData) => {
    try {
      // Simula uma chamada de API com um pequeno delay
      setIsLoading(true);

      setTimeout(() => {
        setOriginalData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          linkedin: data.linkedin || "",
          profileImageUrl: data.profileImage,
        });

        setFormChanged(false);
        setImageChanged(false);

        setIsLoading(false);
        alert("Perfil atualizado com sucesso!");
      }, 1000);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setIsLoading(false);
      alert("Erro ao atualizar o perfil. Tente novamente.");
    }
  };

  const handleImageUpload = (file: File) => {
    // Armazena o arquivo para envio posterior
    setImageFile(file);

    // Cria URL para visualização
    setImage(URL.createObjectURL(file));

    // Marca que a imagem foi alterada
    setImageChanged(true);
  };

  if (isLoading && !originalData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl font-semibold">Carregando dados...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-4">
      <ProfileImage
        image={image}
        firstName={originalData?.firstName || ""}
        lastName={originalData?.lastName || ""}
        onImageUpload={handleImageUpload}
      />

      <ProfileForm
        initialData={originalData}
        isLoading={isLoading}
        formChanged={formChanged}
        setFormChanged={setFormChanged}
        imageChanged={imageChanged}
        imageFile={imageFile}
        onCancel={() => router.back()}
        onSubmit={handleSaveProfile}
      />
    </div>
  );
}
