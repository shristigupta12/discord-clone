import * as Dialog from "@radix-ui/react-dialog"
import { CreateServerInput } from "./create-server-input"
import DialogContext from "../layout/dialog-context"
import { useContext } from "react"

const channelTempalatesData = [
    {
        imageUrl: "/images/gaming-server-icon.jpg",
        text: "Gaming"
    },
    {
        imageUrl: "/images/artists-server-icon.png",
        text: "Artists and Creators"
    },
    {
        imageUrl: "/images/community-server-icon.jpg",
        text: "Local Community"
    }
]

export function CreateServerDialog () {

	const { handleDialogState} = useContext(DialogContext)

    return (
        <div>
					<div className="p-[25px]  flex flex-col gap-4 ">
						<div className="flex flex-col gap-2">
							<Dialog.Title className="text-2xl font-bold  text-[#DBDEE1] w-full text-center">
								Create Your Server
							</Dialog.Title>
							<Dialog.Description className=" w-full text-center text-lg leading-normal  text-[#A1A6AC]">
								Your server is where you and your friends hang out. Make yours and start talking.
							</Dialog.Description>
						</div>
						
						<div className="w-full h-full  flex flex-col gap-4 ">
							<div onClick={()=>{handleDialogState("about server")}}>
								<CreateServerInput imageUrl="/images/create-your-own-server.jpg" text="Create My Own" />
							</div>
							<div className="flex flex-col gap-3 ">
								<div className="text-neutral-400 font-bold text-sm uppercase">Start from a template</div>
								<div className="flex flex-col gap-3">
									{channelTempalatesData.map((obj, ind)=>(
										<div key={ind} onClick={()=>{handleDialogState("about server")}}>
											<CreateServerInput key={ind} imageUrl={obj.imageUrl} text={obj.text} />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full gap-3 px-5 py-4 bg-[#2B2D31]">
							<div className="w-full text-center text-xl text-[#D5D8DB] font-bold">Have an invite already?</div>
							<button className="inline-flex py-4 text-lg items-center justify-center rounded bg-[#4E5058] leading-none text-white hover:bg-[#6D6F78] font-semibold w-full outline-none" onClick={()=>{handleDialogState("join server")}}>
								Join a Server
							</button>
					</div>
				</div>
    )
}