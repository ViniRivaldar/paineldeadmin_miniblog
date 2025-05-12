import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function CardEditPost(){
    return(
        <div 
        className="relative w-[1192px] bg-[#D3D3D3] 
        mt-10 mb-10 p-10 flex flex-col items-center gap-10 rounded"
        >

            
            <div className="absolute top-7 left-10">
                <Link href='/'>
                    <FaArrowLeft className='w-6 h-6 hover:text-white text-black' />
                </Link>
            </div>

            <Image
            src='/download.jpg'
            alt="imagen"
            width={800}
            height={0}
            className=" rounded"
            />
            <div>
                <h1
                className="text-[#070D21] text-center font-anton text-[48px] font-normal leading-none"
                >Título do Blog: A Arte da Escrita Criativa</h1>
                <br/>
                <p 
                className="text-black font-openSans 
                text-[16px] font-bold leading-none"
                >Publicado em 2 de maio de 2025</p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
                <p className="text-primary font-openSans text-[16px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla consectetur, lacus vel tincidunt fermentum, orci leo 
                cursus est, a luctus ligula justo nec augue. Donec nec 
                efficitur risus. Sed consequat porta leo. Vestibulum ante 
                ipsum primis in faucibus orci luctus et ultrices posuere 
                cubilia curae; Sed tincidunt lorem at magna porta, in mattis 
                magna pulvinar. Integer feugiat arcu vel est imperdiet, 
                vitae commodo risus scelerisque. Curabitur vehicula ante sed 
                est bibendum, nec bibendum nulla malesuada.
                </p><br/>
            </div>
        </div>
    )
}