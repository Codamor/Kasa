import React from "react";
import "./Main.scss" ;
import Banner from "../../Components/Banner/Banner";
import Toggle from "../../Components/Toggle/Toggle";

import aboutBackground from "../../assets/img/about_bg.png"


class MainAbout extends React.Component{

    render(){

        return(
            <main className="main">
                <Banner
                    picture={aboutBackground}
                    alt={"Les valeurs fondatrices de Kasa."}
                    title={"Les valeurs fondatrices de Kasa."}
                />

                <Toggle title={"Fiabilité"} aboutClass={"toggle--about-page"}>
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </p>
                </Toggle>

                <Toggle title={"Respect"} aboutClass={"toggle--about-page"}>
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme
                    </p>
                </Toggle>

                <Toggle title={"Service"} aboutClass={"toggle--about-page"}>
                    <p>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </p>
                </Toggle>

                <Toggle title={"Sécurité"} aboutClass={"toggle--about-page"}>
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Toggle>

            </main>
        )
    }
}

export default MainAbout ;