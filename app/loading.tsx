import Image from "next/image"

const Loading = ()=>{

    return <div className="grid items-center content-center m-auto h-screen align-center justify-items-center justify-content-center">

        <Image width={100} height={100} alt="loader" src="/images/loader.gif"/>


    </div>
}

export default Loading