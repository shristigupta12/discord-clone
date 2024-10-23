import Image from "next/image"
import { IconChevronRight } from "@tabler/icons-react"

type Props = {
    imageUrl: string;
    text: string;
}

export function CreateServerInput({imageUrl, text}:Props){
    return(
        <div className="w-full rounded-md border-[0.25px] border-neutral-600 p-3 cursor-pointer hover:bg-[#393C41] flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <div className="rounded-full overflow-hidden">
                    <Image src={imageUrl} width={40} height={40} alt="create-server-icon" className=" object-cover"/>
                </div>
                <div className="text-white text-lg font-semibold ">{text}</div>
            </div>
            <div><IconChevronRight className="size-8 text-neutral-600"/></div>
        </div>
    )
}