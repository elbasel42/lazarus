/* eslint-disable @next/next/no-img-element */
interface UserImageProps {
  imageUrl?: string | null;
}
export const UserImage = async ({ imageUrl }: UserImageProps) => {
  return (
    <>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="profile pic"
          className={imageStyle}
        />
      )}
    </>
  );
};

// ! Styles
const imageStyle = "mr-4 rounded-full w-8 h-8";
