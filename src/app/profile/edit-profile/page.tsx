"use client";

import { ProfileForm } from "@/components/edit-profile-form";
import { ProfileImage } from "@/components/edit-profile-image";
import Loading from "@/components/loading";
import { EditProfileFormData } from "@/utils/edit-profile-types";
import { mockUserData } from "@/utils/mock/user-data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProfile() {
  const router = useRouter();
  const [profile, setProfile] = useState<EditProfileFormData | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setProfile(mockUserData);
    }, 1000);
  }, []);

  const handleSaveProfile = async (data: EditProfileFormData) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setProfile((prev) =>
        prev ? { ...data, profileImageUrl: prev.profileImageUrl } : data
      );

      alert("Perfil atualizado com sucesso!");
    } catch {
      alert("Erro ao atualizar o perfil. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (file: File) => {
    setImageFile(file);
    setProfile((prev) =>
      prev ? { ...prev, profileImageUrl: URL.createObjectURL(file) } : null
    );
  };

  if (!profile) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-4">
      <ProfileImage
        image={profile.profileImageUrl}
        firstName={profile.firstName}
        lastName={profile.lastName}
        onImageUpload={handleImageUpload}
      />

      <ProfileForm
        isLoading={isLoading}
        imageChanged={!!imageFile}
        imageFile={imageFile}
        onCancel={() => router.back()}
        onSubmit={handleSaveProfile}
      />
    </div>
  );
}
