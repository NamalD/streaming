export interface QualityLinkProps {
  quality: string;
  onClick: (quality: string) => void;
}

export function QualityLink({quality, onClick}: QualityLinkProps) {
  const handleClick = () => onClick(quality);

  return (
    <li onClick={handleClick}>{quality}</li>
  )
}