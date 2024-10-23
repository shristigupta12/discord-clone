"use client"
import { useState } from "react"
import {IconBrandDiscordFilled} from '@tabler/icons-react'
import { CreateChannelDialog } from "../ui/create-channel-dialog"
import DialogContext from "../layout/dialog-context"

const SideBar = () => {

    const [hoverDiscord, setHoverDiscord] = useState(false);
    const [dialogState, setDialogState] = useState<string>("create server")

    const handleDialogState = (state:string) => {
        setDialogState(state);
    }

    return(
        <div className="bg-[rgb(30,31,34)] w-fit pt-3 pr-2 pb-3 min-h-screen flex flex-col items-center gap-3">
            <div className="rounded-full w-full cursor-pointer flex gap-2 items-center  " onMouseOver={()=>setHoverDiscord(true)} onMouseLeave={()=>setHoverDiscord(false)}>
                <div className={`bg-[#F2F3F5] w-2 -ml-1 rounded-sm ${ (hoverDiscord?"h-4":"h-0")} transition delay-150 duration-300 ease-in-out`}></div>
                <div className={`p-3  ${hoverDiscord? "bg-[#5865F2] rounded-3xl ":"bg-[#313338] rounded-full"} text-center w-fit`} >
                    <IconBrandDiscordFilled className={`${hoverDiscord?"text-white bg-[#5865F2]":"text-[#DBDEE1] bg-[rgb(49,51,56)]"}: h-[32px] w-[32px] transition delay-150 duration-300 ease-in-out`} />
                </div>
            </div>

            <div className="w-1/2 h-[2px] -mr-3 bg-[#313338]"></div>
           
            <DialogContext.Provider value={{dialogState, handleDialogState}}>
                <CreateChannelDialog />
            </DialogContext.Provider>

        </div>
    )
}

export {SideBar}