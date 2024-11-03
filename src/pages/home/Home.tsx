
import './Home.scss';
import homeBanner from '../../assets/homeBanner.png';
import logementContent from '../../data/logements.json'
import { Thumb } from "../../components/thumb/Thumb";


export const Home:React.FC = ()=>{
   
return (

<div className="Home">
<div className="homeBanner">
<img className="bannerImg" src={homeBanner} alt="photo d'une montagne" />
<h1 className="homeTitle">Chez vous, partout et ailleurs</h1>
</div>
<div className="gallery">
<div className="galleryThumbs">
     {/* Boucle à travers chaque logement du JSON */}
                    {logementContent.map(logement => (
                        <Thumb 
                            key={logement.id}          // Utilisez l'id comme clé unique pour React
                            title={logement.title}     // Passez le titre du logement
                            thumbId={logement.id} 
                            coverSrc={logement.cover}     // Passez l'id du logement
                        />
                    ))}
                </div>
</div>


</div>

)


}

