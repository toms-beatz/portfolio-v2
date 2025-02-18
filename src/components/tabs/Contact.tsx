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
            <p className="text-light-4 dark:text-white xl:mb-12 mb-8">
                Vous avez un <b className="text-light-5 dark:text-dark-5 font-semibold">projet</b>, une <b className="text-light-5 dark:text-dark-5 font-semibold">idée</b>, une <b className="text-light-5 dark:text-dark-5 font-semibold">opportunité</b> ou simplement une question ? 🚀<br/><br/>
                N’hésitez pas à me contacter via le formulaire ci-dessous ou <Link href="https://www.linkedin.com/in/thomas-mazeau-611481204" target="_blank" className="font-semibold text-light-5 dark:text-dark-5">LinkedIn</Link>, je serais ravi d’échanger avec vous et de voir comment nous pouvons collaborer.
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
                        className="!bg-light-1 dark:!bg-dark-1 w-full px-5 py-4 rounded-xl bg-transparent dark:text-dark-3 text-light-3 focus-visible:ring-0 focus-visible:ring-offest-0"
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
                        className="!bg-light-1 dark:!bg-dark-1 w-full px-5 py-4 rounded-xl bg-transparent dark:text-dark-3 text-light-3 focus-visible:ring-0 focus-visible:ring-offest-0"
                        {...register('email', {required: true})}
                    />
                </div>

                <textarea
                    placeholder="Message"
                    className="!bg-light-1 dark:!bg-dark-1 w-full px-5 py-4 rounded-xl bg-transparent dark:text-dark-3 text-light-3 focus-visible:ring-0 focus-visible:ring-offest-0"
                    rows={10}
                    {...register('message', {required: true})}
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-light-1 dark:bg-dark-1 text-light-4 dark:text-dark-3 px-5 py-4 before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl flex gap-4 items-center font-semibold"
                    >
                        <Send height={18} width={18}/>
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}