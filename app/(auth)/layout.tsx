<<<<<<< HEAD
import Image from "next/image";

=======
>>>>>>> b4c6fdeb46799950362b72adbac9038f85d518ea
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image.svg"
            alt="auth image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
=======
  return <main>{children}</main>;
>>>>>>> b4c6fdeb46799950362b72adbac9038f85d518ea
}
