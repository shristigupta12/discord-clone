import * as Dialog from "@radix-ui/react-dialog"
import { IconAsterisk, IconChevronRight } from "@tabler/icons-react"
import Image from "next/image"
import DialogContext from "../layout/dialog-context"
import { useContext } from "react"

export function JoinServerDialog () {

	const {handleDialogState} = useContext(DialogContext)

    return (
        <div>
					<div className="p-[25px] flex flex-col gap-3">
						<div className="  flex flex-col gap-4 ">
							<div className="flex flex-col gap-2">
								<Dialog.Title className="text-2xl font-bold  text-[#DBDEE1] w-full text-center">
									Join a Server
								</Dialog.Title>
								<Dialog.Description className=" w-full text-center text-lg leading-normal  text-[#A1A6AC]">
									Enter an invite below to join an existing server
								</Dialog.Description>
							</div>
							
							<div className="w-full h-full  flex flex-col gap-6 ">
								<div className="flex flex-col gap-2">
									<div className="relative text-neutral-400 font-bold text-sm uppercase">INVITE LINK<span className="absolute text-[#E87176] ml-1"><IconAsterisk className="size-2 "/></span></div>
									<input className="bg-[#1E1F22] outline-none py-2 px-4 text-lg text-[#DBDEE1] rounded-sm placeholder:text-[#737578]" placeholder="https://discord.gg/hTKzmak" />
								</div>
								<div className="flex flex-col gap-2">
									<div className="text-neutral-400 font-bold text-sm uppercase">Invites should look like</div>
									<div className="flex flex-col text-[#DBDEE1]">
										<div>hTKzmakhTKzmak</div>
										<div>https://discord.gg/hTKzmak</div>
										<div>https://discord.gg/cool-people</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full rounded-md  p-3 cursor-pointer bg-[#2B2D31] hover:bg-[#393C41] flex justify-between items-center">
							<div className="flex gap-3 items-center">
								<div className="rounded-full overflow-hidden">
									<Image src="/images/compass-icon.png" width={40} height={40} alt="create-server-icon" className=" object-cover"/>
								</div>
								<div>
									<div className="text-[#DBDEE1]  text-lg font-semibold ">Don&apos;t have an invite?</div>
									<div className="text-xs text-[#DBDEE1] " >Check out Discoverable communities in Server Discovery.</div>
								</div>
							</div>
							<div><IconChevronRight className="size-8 text-neutral-600"/></div>
						</div>
					</div>
					<div className="py-4 px-6 flex justify-between bg-[#2B2D31] items-center">
						<div className="hover:underline text-[#DBDEE1] cursor-pointer" onClick={()=>{handleDialogState("create server")}}>back</div>
						<div className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 cursor-pointer">Join Server</div>
					</div>
				</div>
    )
}