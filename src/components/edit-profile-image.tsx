import CameraIcon from "@/components/icons/camera";
import Image from "next/image";
import { ChangeEvent } from "react";

interface ProfileImageProps {
  image: string | null;
  firstName?: string;
  lastName?: string;
  onImageUpload: (file: File) => void;
}

export function ProfileImage({
  image,
  firstName,
  lastName,
  onImageUpload,
}: ProfileImageProps) {
  const getInitials = () => {
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    }
    return "Photo";
  };

  const handleImageChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    if (file) {
      const maxSize = 20 * 1024 * 1024; // 20MB em bytes

      if (file.size > maxSize) {
        alert("O arquivo é muito grande. O tamanho máximo permitido é 20MB.");
        return;
      }
      if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
        alert("O arquivo deve ser PNG, JPG ou JPEG.");
        return;
      }

      onImageUpload(file);
    }
  };

  return (
    <div className="relative">
      <div className="w-36 h-36 bg-principal text-white flex items-center justify-center text-2xl font-bold rounded-full mt-16">
        {image ? (
          <Image
            width={144}
            height={144}
            src={image}
            alt="Photo"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          getInitials()
        )}
      </div>
      <label
        htmlFor="fileInput"
        className="absolute bottom-1 right-0 bg-principal-dark p-4 rounded-full cursor-pointer hover:bg-principal transition-all"
      >
        <CameraIcon />
        <input
          type="file"
          id="fileInput"
          accept="image/png, image/jpg, image/jpeg"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
}
