interface UserImageProps {
  url?: string | null;
}

export const UserImage = ({ url }: UserImageProps) => {
  if (!url) {
    return null;
  }
  return (
    <img
      src={url}
      alt="User Image"
      className="w-10 h-10 rounded-full border border-gray-300"
    />
  )
};
