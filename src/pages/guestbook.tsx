import Layout from "~/components/Layout/layout.component";
import ComingSoon from "~/components/ComingSoon/comingSoon.component";

import { signIn, signOut, useSession } from "next-auth/react";
import { IconBrandDiscord } from "@tabler/icons-react";

export default function GuestBook() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <main>Loading...</main>;
    }

    return (
        <Layout title="Guestbook" logoPath="/guestbook-ico.png">
           <div className="font-sans">
            <h1 className="text-4xl text-white font-semibold mb-2">Guestbook</h1>
            <p className="font-light text-gray-300 text-sm mb-6">Feel free to share your thoughts regarding this website.</p>
            {
              session ? (
                <>
                <p>halo {session.user?.name}</p>
                <button onClick={() => signOut()}>Log Out</button>
                </>
              ) : (
                <div className="w-full bg-gray-700 rounded-md shadow-md p-4">
                  <h2 className="text-xl font-semibold text-gray-300">You must sign in.</h2>
                  <p className="text-gray-300 mb-4">In order to post comments, you need to sign first.</p>
                  <button onClick={() => {
                    signIn("discord").catch(console.log);
                  }} className="inline-flex gap-1 bg-indigo-500 p-2 rounded-md">
                  <IconBrandDiscord /> <span>Sign in via Discord</span>
                  </button>
                </div>
              )
            }
            
           </div>
        </Layout>
    )
}