import SideNav from '@/app/ui/dashboard/sidenav';
import Image from "next/image";
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
         <div className="w-full flex-none hidden md:block md:w-64">
            <SideNav />
         </div>
         <div className='md:hidden fixed px-4 py-2 bottom-0 w-full border-t border-gray-100'>
            <div className="flex justify-between">
               <Link
                  href="/dashboard"
                  className=''
               >
                  <Image
                     src="/home.svg"
                     width={32}
                     height={32}
                     alt="Home page button"
                  />
               </Link>
               <Link
                  href="/dashboard/invoices"
                  className=''
               >
                  <Image
                     src="/menusearch.svg"
                     width={32}
                     height={32}
                     alt="Home page button"
                  />
               </Link>
               <Link
                  href="/dashboard/customers"
                  className=''
               >
                  <Image
                     src="/heart.svg"
                     width={32}
                     height={32}
                     alt="Home page button"
                  />
               </Link>
               <Link
                  href="/dashboard"
                  className=''
               >
                  <Image
                     src="/cart.svg"
                     width={32}
                     height={32}
                     alt="Home page button"
                  />
               </Link>
               <Link
                  href="/dashboard/invoices"
                  className=''
               >
                  <Image
                     src="/profil.svg"
                     width={32}
                     height={32}
                     alt="Home page button"
                  />
               </Link>
            </div>
         </div>
         <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
   );
}