import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
<<<<<<< HEAD
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
=======
import Image from "next/image";

export default function RootLayout({
>>>>>>> b4c6fdeb46799950362b72adbac9038f85d518ea
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect("/");

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
=======
  const loggedIn = { firstName: "Harsh", lastName: "Bajani" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
>>>>>>> b4c6fdeb46799950362b72adbac9038f85d518ea
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
