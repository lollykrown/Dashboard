import Image from "next/image";
import Link from 'next/link';

export default function Settings() {
  return (
    <main className="">
      <h1 className="text-9xl">Settings!</h1>
      <Link href='/'>Home</Link>
    </main>
  );
}
