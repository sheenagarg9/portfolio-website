import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from 'react-hook-form';


type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

function ContactMe({}: Props) {
// const { register, handleSubmit, } = useForm<Inputs>();
// const onSubmit: SubmitHandler<Inputs> = formdata => {
// //     window.location.href = "mailto:sheena.garg@nyu.edu?subject=";formdata.subject;'&body=Hi, my name is ';{formdata.name}'. ';{formdata.message};
//     console.log(formdata);    
// };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact Me
            </h3>
        <div className="flex flex-col space-y-15">
            <h4 className="text-4xl font-semibold text-center">
                Let's create something worth showing off.{" "}
                <span className="underline decoration-[violet]/50">
                    Let's talk!
                </span>
            </h4>
            <div className="space-y-10">
                {/* <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[violet] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+1 929-678-7514</p>
                </div> */}
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[violet] h-7 w-7 animate-pulse"/>
                    <h6 className="text-2xl">New York City</h6>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[violet] h-7 w-7 animate-pulse"/>
                    <h6 className="text-2xl">sheena.garg@nyu.edu</h6>
                </div>
            </div>

            <form 
            // onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input 
                    // {...register('name')} 
                    placeholder="Name" className="contactInput" type="text" />
                    <input 
                    // {...register('email')} 
                    placeholder="Email" className="contactInput" type="email" />
                </div>
                <input 
                // {...register('subject')} 
                placeholder="Subject" className="contactInput" type="text" />
                <textarea 
                // {...register('message')} 
                placeholder="Message" className="contactInput" />
                <button type="submit" className="bg-[violet] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe