
import * as Dialog from "@radix-ui/react-dialog"
import {IconCamera, IconPlus} from "@tabler/icons-react"
import DialogContext from "../layout/dialog-context"
import { useContext } from "react"

export function CustomizeServerDialog(){

    const {handleDialogState} = useContext(DialogContext)

    return(
        <div>
					<div className="p-[25px] flex flex-col gap-3">
						<div className="  flex flex-col gap-4 items-center">
							<div className="flex flex-col gap-2">
								<Dialog.Title className="text-2xl font-bold  text-[#DBDEE1] w-full text-center">
									Customize Your Server
								</Dialog.Title>
								<Dialog.Description className=" w-full text-center text-lg leading-normal  text-[#A1A6AC]">
									Give your new server a personality with a name and an icon. You can always change it later.
								</Dialog.Description>
							</div>
							
                            <div className="relative p-4 rounded-full border-[3px] border-dashed flex flex-col  items-center text-[#DBDEE1] cursor-pointer h-[92px] w-[92px] justify-center">
                                <div className="rounded-full p-1 absolute -top-1 -right-1 bg-blue-500 z-40">
                                    <IconPlus className="text-[#DBDEE1] size-4"/>
                                </div>
                                <IconCamera />
                                <div className="text-sm">UPLOAD</div>
                            </div>

							<div className="w-full h-full  flex flex-col gap-3 ">
								<div className="flex flex-col gap-2">
									<div className="relative text-neutral-400 font-bold text-sm uppercase">SERVER NAME</div>
									<input className="bg-[#1E1F22] outline-none py-2 px-4 text-lg text-[#DBDEE1] rounded-sm placeholder:text-[#737578]" placeholder="" />
								</div>
								<div className="text-neutral-400 w-full text-xs">By creating a server, you agree to Discord&apos;s <span className="text-sky-400 hover:underline font-semibold cursor-pointer">Community Guidelines.</span></div>
							</div>
						</div>
						
					</div>
					<div className="py-4 px-6 flex justify-between bg-[#2B2D31] items-center">
                        <div onClick={()=>{handleDialogState("about server")}}>
                            <div className=" text-[#DBDEE1] cursor-pointer">Back</div>
                        </div>
						<div className="py-2 px-4 bg-blue-500 text-[#DBDEE1] rounded-md hover:bg-blue-700 cursor-pointer">Create</div>
					</div>
				</div>
    )
}