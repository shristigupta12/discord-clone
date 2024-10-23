import * as Dialog from "@radix-ui/react-dialog"
import { CreateServerInput } from "./create-server-input"
import DialogContext from "../layout/dialog-context"
import { useContext } from "react"

export function AboutServerDialog(){

	const { handleDialogState} = useContext(DialogContext)

    return (
        <div>
					<div className="p-[25px] flex flex-col gap-3">
						<div className="  flex flex-col gap-4 ">
							<div className="flex flex-col gap-2">
								<Dialog.Title className="text-2xl font-bold  text-[#DBDEE1] w-full text-center">
									Tell Us More About Your Server
								</Dialog.Title>
								<Dialog.Description className=" w-full text-center text-lg leading-normal  text-[#A1A6AC]">
									In order to help you with your setup, is your new server for just a few friends or a larger community?
								</Dialog.Description>
							</div>
							<div className="flex flex-col gap-3">
								<div onClick={()=>{handleDialogState("customize server")}}>
									<CreateServerInput imageUrl="/images/artists-server-icon.png" text="For a club or community" />
								</div>
								<div onClick={()=>{handleDialogState("customize server")}}>
									<CreateServerInput imageUrl="/images/community-server-icon.jpg" text="For me and my friends" />
								</div>
							</div>
							<div className="text-[#DBDEE1] w-full text-center">Not sure? You can <span className="text-blue-400 hover:underline">skip this question</span> for now.</div>
						</div>
					</div>
					<div className="p-6 flex justify-between bg-[#2B2D31] items-center">
							<div className="hover:underline text-[#DBDEE1] cursor-pointer" onClick={()=>{handleDialogState("create server")}} >Back</div>
						</div>
				</div>
    )
}