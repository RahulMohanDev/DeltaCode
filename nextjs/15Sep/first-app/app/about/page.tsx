import Button from "./button";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'about page',
}

export default function TestPage() {
  return (
    <div>
      Hi please choose an instructor
    </div>
  );
}
