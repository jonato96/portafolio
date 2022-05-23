import "./intro.scss"
import Typewriter from 'typewriter-effect';

export default function Intro(){
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/bot.png" alt=""/>
                </div>
            </div>
            <div className="right">
               <div className="wrapper">
                   <h2>Hola que tal, mi nombre es</h2>
                   <h1>Jonathan Sanchez</h1>
                    <h3>
                        <Typewriter
                            options={{
                                strings: ["Desarrrador", "Amante de la tecnología", "A veces creador de contenido"],
                                autoStart: true,
                                delay: 75,
                                loop: true
                            }}/>
                    </h3>
               </div>
               <a href="#portafolio">
                    <img src="assets/flechaAbajo.png" alt=""/>
               </a>            
            </div>            
        </div>
    )
}