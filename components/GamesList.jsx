
import imageOne from '../public/games/VALORANT.jpg';
import imageTwo from '../public/games/CS.jpeg';
import imageThree from '../public/games/VICECITY.jpeg';
import imageFour from '../public/games/MINECRAFT.jpeg';
import imageFive from '../public/games/FIFA.jpeg';
import imageSix from '../public/games/six.webp';
import GamesCard from './GamesCard';

const gamesList = [
   
    {
        imgSrc:imageOne,
        gameName:"Valorant"
    },
    {
        imgSrc:imageTwo,
        gameName:"Counter Strike"
    },
    {
        imgSrc:imageThree,
        gameName:"GTA Vice City"
    },
    {
        imgSrc:imageFour,
        gameName:"Minecraft"
    },
    {
        imgSrc:imageFive,
        gameName:"EA Sports FIFA"
    },
    {
        imgSrc:imageSix,
        gameName:"Axie Infinity"
    }

]

export default function GamesList(){
    return(
    <div className="bg-vision p-12">
    <div className="flex flex-col items-center text-center" id="services">
        <h1 className="font-header text-3xl pb-8">Games We Are Playing</h1>
        <p className="font-fontJost ">Through ownership and rewarding merit, games are now governed by the players. Innovative in-game economics reward players for their performance, creating a new economy in the Metaverse.</p>
    </div>

    <div className='flex flex-col items-center lg:grid lg:grid-cols-3'>
        {
            gamesList.map(el=>{
                return(
                    <GamesCard imgSrc={el.imgSrc} gameName={el.gameName} key={el.gameName} />
                )
            })
        }
    </div>
    </div>
    )
}