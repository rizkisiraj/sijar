import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ArticleLink, {type Article } from "~/components/ArticleLink/articleLink.component";
import Layout from "~/components/Layout/layout.component";
import ProjectLink from "~/components/ProjectLink/projectLink.component";
import getPosts from "~/helpers/getPosts";
import getProjects from "~/helpers/getProjects";


export default function NabungYuk() {

    return (
        <div className="max-w-3xl mx-auto p-6 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy for nabungYukApp</h1>
          <p className="text-sm text-gray-500 mb-6">Effective Date: 03-07-2025</p>
    
          <h2 className="text-xl font-semibold mt-6 mb-2">1. No Personal Data Collected</h2>
          <p>
            We do <strong>not collect, store, or share</strong> any personal information. The app does
            not require you to provide your name, email address, or any other personal details.
          </p>
    
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Local Data Storage</h2>
          <p>
            All savings and financial data you enter into the app are stored <strong>locally on your device</strong>.
            This means:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Your data never leaves your device.</li>
            <li>We do not use external servers or cloud storage.</li>
            <li>You have full control over your data.</li>
          </ul>
    
          <h2 className="text-xl font-semibold mt-6 mb-2">3. No Internet Connection Required</h2>
          <p>
            nabungYukApp works <strong>offline</strong> and does not send or receive data over the internet.
          </p>
    
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
          <p>
            The app does not use any third-party services that may collect data (e.g., analytics tools, advertising SDKs).
          </p>
    
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Policy</h2>
          <p>
            If there are any future updates to this privacy policy, they will be posted here. Since we do not collect
            contact information, we cannot notify users directly.
          </p>
    
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, feel free to contact us at:{" "}
            <a href="mailto:sijarawoods@gmail.com" className="text-blue-600 underline">
              sijarawoods@gmail.com
            </a>
          </p>
        </div>
      );
}