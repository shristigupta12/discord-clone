import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { useState } from "react";
import {IconPlus} from '@tabler/icons-react'
import { CreateServerDialog } from "./create-server-dialog";
import { JoinServerDialog } from "./join-server-dialog";
import { AboutServerDialog } from "./about-server-dialog";
import { CustomizeServerDialog } from "./customize-server-dialog";
import DialogContext from "../layout/dialog-context";
import { useContext } from "react";

export function CreateChannelDialog () {

	const [addChannel, setAddChannel] = useState(false);
	const {dialogState, handleDialogState} = useContext(DialogContext)

	
    return(
        <Dialog.Root>
		<Dialog.Trigger asChild>
			<div className="rounded-full w-full cursor-pointer flex gap-2 items-center " onMouseOver={()=>setAddChannel(true)} onMouseLeave={()=>setAddChannel(false)} onClick={()=>{handleDialogState("create server")}}>
                <div className={`bg-[#F2F3F5] w-2 -ml-1 rounded-sm ${ (addChannel?"h-4":"h-0")} transition delay-150 duration-300 ease-in-out`}></div>
                <div className={`p-3 ${addChannel? "bg-[#23A559] rounded-3xl":"bg-[#313338] rounded-full"} text-center w-fit `} >
                    <IconPlus className={`${addChannel?"text-white bg-[#23A559]":"text-[#23A559] bg-[rgb(49,51,56)] "}: h-[32px] w-[32px] `} />
                </div>
            </div>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
			<Dialog.Content className="fixed left-1/2 top-1/2 w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#313338]  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow flex flex-col  ">

				{dialogState=="create server" &&
					<CreateServerDialog />
				}

				{dialogState=="join server" &&
					<JoinServerDialog />
				}

				{dialogState=="about server" &&
					<AboutServerDialog />
				}

				{dialogState=="customize server" &&
					<CustomizeServerDialog />
				}

				<Dialog.Close asChild>
					<button
						className="absolute right-2.5 top-2.5 inline-flex size-[50px] appearance-none items-center justify-center rounded-full hover:text-[#DBDEE1] text-[#A1A6AC] outline-none "
						aria-label="Close"
					>
						<Cross2Icon className="size-[30px]"/>
					</button>
				</Dialog.Close>

			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
    )
}