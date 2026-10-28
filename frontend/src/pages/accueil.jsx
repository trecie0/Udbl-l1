import user from '../assets/image/icon/user (3).png'
import "./css/accueil.css"


export function Accuei() {
    const jour = <div className="jour">
                    <h3>Lundi</h3>
                    <h3>24/10</h3>
                </div>
    const cours = <div className="cours">
        <h3>Algorithme</h3>
        <div className="heure">
            <label htmlFor="">
                <p className="debut">8:00</p>
                <p className="fin">12:00</p>
            </label>
        </div>
    </div>

    
    return <div className="accueil">
        <nav>
            <div className="compte">
                <div className="img">
                    <img src={user} alt="" />
                </div>
                
                <div className="nom">
                    <h3>Trecie NK</h3>
                    <p>Bonjour cher utilisateur</p>
                </div>
            </div>
            <div className="bar">
                <div className="tree"></div>
                <div className="tree"></div>
                <div className="tree"></div>
            </div>
            
        </nav>
        <div className="semaine">
            <div className="titre">
                <h1>Semaine</h1>
            </div>
            <div className="Jour">           
                {jour}
                {jour}
                {jour}
                {jour}
                {jour}
                {jour}
            </div>
        </div>
        <div className="horaire">
            <div className="nom">
                <div className="nom">
                    <h2>Horaire des cours</h2>
                    <div className="ListCours">
                        {cours}
                        {cours}
                    </div>
                </div>
                <div className="progression">

                </div>
            </div>
        </div>
        <div className="extra">
            <div className="Ex Presance">
                <h3>Participation au cour</h3>
                <div className="reponce">
                    <button>OUI</button>
                    <button>NON</button>
                </div>
            </div>
            <div className="EX TP">
                <div className="tp">
                    <h3>Ajouter un TP</h3>
                    <p>A mettre seulement si il y a eu un tp aujourd'hui</p>
                </div>
                <button>+</button>
            </div>
            <div className="EX TD">
                <div className="td">
                    <h3>Ajouter un TD</h3>
                    <p>A mettre seulement si il y a eu un td aujourd'hui</p>
                </div>
                <button>+</button>
            </div>
            <div className="EX moyenne">
                <h3>Voir sa moyenne actuelle au cours</h3>
                <button>Voir</button>
            </div>
        </div>

    </div>
}