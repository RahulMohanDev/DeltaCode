
type buttonProps = {
    content:string
}

export default function Button({ content }:buttonProps) {
  return <button>{content}</button>;
}
