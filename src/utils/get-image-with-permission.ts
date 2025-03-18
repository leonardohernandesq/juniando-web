import { s3 } from "@/config/s3-aws";

export const getImageWithPermission = (key: string) => {
  const params = {
    Bucket: process.env.AWS_NAME_BUCKET,
    Key: key,
  };
  const url = s3.getSignedUrl("getObject", params);
  return url;
};
