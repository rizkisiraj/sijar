/* eslint-disable @typescript-eslint/no-misused-promises */

import Layout from "~/components/Layout/layout.component";
import ComingSoon from "~/components/ComingSoon/comingSoon.component";

import { signIn, signOut, useSession } from "next-auth/react";
import { IconBrandDiscord, IconSend } from "@tabler/icons-react";
import { api } from "~/utils/api";
import formattedDateGuestbook from "~/helpers/convertDateGuestbook";
import { useState } from "react";

export default function GuestBook() {
    const { data: session, status } = useSession();
    const { data: guestbookEntries, isLoading  } = api.guestbook.getAll.useQuery();
    const [message, setMessage] = useState("");
    const postMessage = api.guestbook.postMessage.useMutation();

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
                <div className="mb-4">
                    <p className="text-white">Halo, <span className="font-semibold">{session.user?.name}</span></p>
                    <button className="text-indigo-500" onClick={()=> signOut()}>Log Out</button>
                </div>
                <form
                onSubmit={(e) => {
                    e.preventDefault();
                    postMessage.mutate({
                        userId: session?.user.id,
                        message: message
                    })
                    setMessage("");
                }}
                >
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows={4} className="block mb-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." />
                    <button className="inline-flex gap-2 p-2 bg-indigo-300 rounded">Send <IconSend /></button>
                </form>
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
            <div className="mt-4">
                {
                    isLoading ? <p>Loading...</p> : guestbookEntries?.map((entry, index) => {
                        return (
                            <div className="w-full px-4 py-1 text-gray-300 mb-2" key={index}>
                                <p className="mb-1">{ entry.description }</p>
                                <p className="text-xs font-light text-gray-500">{ `by ${entry.user.name} on ${formattedDateGuestbook(entry.createdAt)}` }</p>
                            </div>
                        )
                    })
                }
            </div>
           </div>
        </Layout>
    )
}