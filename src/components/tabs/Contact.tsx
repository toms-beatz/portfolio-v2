"use client";

import {Send} from "lucide-react";
import { useForm } from 'react-hook-form';
import {sendEmail} from '@/utils/send-email';
import Link from "next/link";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const {register, handleSubmit} = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <div>
            <p className="text-white xl:mb-12 mb-8">
                Vous avez un <b>projet</b>, une <b>idée</b>, une <b>opportunité</b> ou simplement une question ? 🚀<br/><br/>
                N’hésitez pas à me contacter via le formulaire ci-dessous ou <Link href="https://www.linkedin.com/in/thomas-mazeau-611481204" target="_blank" className="text-primary">LinkedIn</Link>, je serais ravi d’échanger avec vous et de voir comment nous pouvons collaborer.
                À très bientôt !
            </p>
            <form className="md:space-y-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex md:flex-row flex-col md:gap-8 gap-4">
                    <input
                        type="text"
                        placeholder="Nom"
                        autoComplete="name"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-transparent text-white border border-border focus-visible:ring-0 focus-visible:ring-offest-0"
                        {...register('name', {required: true})}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        title="Please enter a valid email address"
                        required
                        inputMode="email"
                        className="w-full px-5 py-4 rounded-xl bg-transparent text-white border border-border focus-visible:ring-0 focus-visible:ring-offest-0"
                        {...register('email', {required: true})}
                    />
                </div>

                <textarea
                    placeholder="Message"
                    className="w-full px-5 py-4 rounded-xl bg-transparent text-white border border-border focus-visible:ring-0 focus-visible:ring-offest-0"
                    rows={4}
                    {...register('message', {required: true})}
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="text-primary px-5 py-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border flex gap-4 items-center font-semibold"
                    >
                        <Send height={18} width={18}/>
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}