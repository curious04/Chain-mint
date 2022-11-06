import logo from './logo.svg';
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContract, useSigner } from 'wagmi'
import { useAccount } from 'wagmi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ethers } from 'ethers';
import { abi } from './ABI';

function App() {

  const { data: signer, isError, isLoading } = useSigner();
  const { address, isConnecting, isDisconnected } = useAccount();
  const notify = () => toast.success("NFT Minted Successfully!");
  const notify1 = () => toast.info("Token Transferring in Progress ...");
  const notify2 = () => toast.success("Tokens Transferred");
  const notify3 = () => toast.info("NFT Minting in Progress ...");

  const contract = useContract({
    addressOrName: '0x2d296915a871c5F21Aefc56520b5eaDff515d8F6',
    contractInterface: abi,
    signerOrProvider: signer,
  })

  const mintnft=async()=>{
    const sendtx = await signer.sendTransaction({
      to: '0xC5Db59D48700B6bC8D53cE773b21931d986DEa0E',
      value: ethers.utils.parseEther('0.01')
    });
    notify1();
    await sendtx.wait();
    notify2();
    const tx = await contract.safeMint(ethers.utils.getAddress(address),'QmZw6Nf6oZP6J7ZjQX9fR8JrQ2F2fYrY6JgKjz8B6ZJm6C');
    notify3();
    await tx.wait();
    notify();

  }

  return (
    <div className='flex flex-col w-screen h-screen bg-hero-pattern justify-center text-white items-center'>
      <ToastContainer/>
      <p className='text-[3vmax] font-bold ' >ChainNFT</p>
      <div className='flex flex-row justify-end items-center' >
        <ConnectButton/>
      </div>
      <div className='flex flex-row w-[70%] h-fit mt-14 justify-between' >
          <div className='flex flex-col w-[45%] h-fit justify-center items-center border-2 border-white rounded-xl p-4' >
            <p className='text-[2vmax] font-bold' >Mint NFT</p>
            <p className='text-[1.5vmax] font-bold' >Mint your NFT on Polygon</p>
            <img src='https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960' className='w-[60%] my-3 border-2 rounded-2xl' />
            <br/>
            <hr className='border-[1px] border-white w-full' />
            {/* <a className='w-full' href='https://chainnft.vercel.app/' target={'_blank'}>
            <button className='bg-white w-full my-4 p-3 rounded-xl text-2xl text-violet-900' >Mint your own NFT</button>
            </a> */}
            <a className='w-full' href='https://paint-ad1543.s3.ap-south-1.amazonaws.com/paint-app/index.html' target={'_blank'}>
            <button className='bg-white w-full my-2 p-3 rounded-xl text-2xl text-violet-900' >Draw your own NFT</button>
            </a>

          </div>
          <div className='flex flex-col w-[45%] h-fit justify-center items-left border-2 border-white rounded-xl p-4' >
            <p className='text-[1.7vmax] font-bold text-center  bg-white text-violet-900 px-3 py-2 rounded-full my-10 w-fit self-center' >Token ID : 1</p>
            <p className='text-[1.5vmax] font-bold' >NFT Name : BAYC</p>
            <p className='text-[1.5vmax] font-bold' >NFT Description : Bored Ape Yatch Club</p>
            <p className='text-[1.5vmax] font-bold' >NFT Owner : 0xD4Ab...5fF72</p>
            <p className='text-[1.5vmax] font-bold' >NFT Price : 0.1 MATIC</p>
            <a className='w-full' href='https://ipfs-nu-lemon.vercel.app/' target={'_blank'}>
            <button className='bg-white w-full my-4 p-3 rounded-xl text-2xl text-violet-900' onClick={()=>mintnft()} >Mint and Buy NFT</button>
            </a>
          </div>
      </div>
    </div>
  );
}

export default App;
