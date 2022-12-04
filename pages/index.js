import Link from "next/link";
import Addplayers from "../Components/Addplayers/Addplayers";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";


export default function Home({ posts }) {
  return (
    <div className="text-center">
      <Banner></Banner>
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 max-w-fit mx-auto mt-12'>
          {
            posts?.map(post => <div key={post.id} className="card my-10 bg-base-100 mx-10 shadow-xl">
              <div className='w-48 h-36 rounded-xl'>
                <img className='w-48 h-36 rounded-xl ' src={post.img} alt="" />
              </div>
              <div className='p-auto m-auto'>
                <h1 className='font-bold text-lg'>{post.playerName}</h1>
                <h3 className='font-semibold text-md'>Country: {post.country}</h3>
                
              </div>

            </div>)
          }
          
        </div>
        <Addplayers></Addplayers>
        <div>

        </div>

      </div>

      <Footer></Footer>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch("https://to-do-list-server-98tvv8qz2-mehedi-noob.vercel.app/listdata");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}