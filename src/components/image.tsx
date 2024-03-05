interface ImageProps {
  path: string
  description: string
}

export default function Image({ path, description }: ImageProps) {
  return (
    <img src={path} alt={description} className="size-12" />
  )
}
