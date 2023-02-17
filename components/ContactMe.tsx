import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

const ContactMe = () => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:nuthelkcd@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }

    return (
        <div className='min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-[12vh] sm:top-24 left-1/2 -translate-x-[calc(50%-10px)] sm:left-1/2 sm:-translate-x-1/2 uppercase tracking-[20px]  text-gray-500 text-2xl'>Contact Me</h3>


            <div className='flex flex-col space-y-5 2xl:space-y-10 mt-[9vh]'>
                <h4 className='text-lg sm:text-2xl 2xl:text-4xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#B343EF]/50 underline'>Lets Talk</span>
                </h4>

                <div className='space-y-5 2xl:space-y-10'>
                    <div className='flex items-center space-x-2 sm:space-x-5 justify-center'>
                        <PhoneIcon className='text-[#B343EF] h-5 w-5 sm:h-7 sm:w-7 animate-pulse' />
                        <p className='text-sm sm:text-xl 2xl:text-2xl'>+57 3237032884</p>
                    </div>
                    <div className='flex items-center space-x-2 sm:space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#B343EF] h-5 w-5 sm:h-7 sm:w-7 animate-pulse' />
                        <p className='text-sm sm:text-xl 2xl:text-2xl'>nuthelkcd@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-2 sm:space-x-5 justify-center'>
                        <MapPinIcon className='text-[#B343EF] h-5 w-5 sm:h-7 sm:w-7 animate-pulse' />
                        <p className='text-sm sm:text-xl 2xl:text-2xl'>Medellin, Antioquia</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='max-w-[85vw] w-full flex flex-col space-y-1 2xl:space-y-2  sm:max-w-full sm:w-fit mx-auto'>
                    <div className='space-x-0 flex-col space-y-1 flex sm:space-x-2 sm:flex-row sm:space-y-0'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder="Subject" className='contactInput' type="text" />

                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#B343EF] py-2 sm:py-5 px-5 sm:px-10 rounded-md text-black font-bold text-lg'>Send</button>
                </form>

            </div>

        </div>
    )
}

export default ContactMe