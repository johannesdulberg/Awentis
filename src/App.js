import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from "./components/Footer"
import SplitBoxImgAndText from './components/SplitBoxImgAndText';
import WhyUs from './components/WhyUs';
import NochFragen from './components/QnA';



import mobileImg from "./assets/Mobil1.svg"
import howDoesItWorkWithUsImg from './assets/Dev3.svg'
import fotografyImg from './assets/Fotografie.svg'
import pageBuilderImg from './assets/pageBuilder.svg'
import functionImg from './assets/Function.svg'
import workImg from './assets/Arbeit.svg'

function App() {
  
  

  return (
    <Router>
    <div className="App">
      <div className="content">
        <Navbar/>
        <Hero />
        {/* <HowItWorks /> */}
        <SplitBoxImgAndText args={{
          headerText:"Wie funktioniert das bei uns?",
          bodyText:`Im ersten Schritt erfahren wir in einem Gespräch mit ihnen, welche Lösung 
          für sie am besten passt und überlegen ein Grunddesign für ihren Auftritt. 
          Nach der Entwicklungszeit bekommen sie einen ersten Prototypen an dem wir
          Details und Änderungen vornehmen können. Wenn dann alles passt Hosten wir
          ihre Webseite gerne auf unseren Servern.`,
          bgColor:"white",
          imagePath:howDoesItWorkWithUsImg,
          reverse:false,
          buttonText:"Genauer Ablauf"}} 
        />
        <SplitBoxImgAndText args={{
          headerText:"Perfektes Design auf allen Bildschirmen",
          bodyText:`Im Jahr 2021 waren schon mehr als 50% der Webseitenaufrufe in Europa über das 
                Smartphone, tendenz steigend. Deshalb ist es uns wichtig ihr Design so zu gestalten,
                dass es auch auf dem Handy perfekt ist. Dies ist uns möglich, da wir durch die 
                Technologie die wir verwenden die volle kontrolle über das Design haben und 
                nicht die mittlerweile gängigen Baukästen verwenden, die sehr oft zu kleinen 
                nicht behebaren Designfehlern führen.`,
          bgColor:"indigo-100",
          imagePath:mobileImg,
          reverse:true}} 
        /> 
        <WhyUs/>
        <SplitBoxImgAndText args={{
          headerText:"Inhalt schaffen",
          bodyText:`Auch die Webseite mit dem besten Design wirkt unprofessionell, wenn Inhalt und Fotos nicht stimmig sind.
          Für Ihre Webseite brauchen sie neue Bilder von sich, ihrem Team, ihren Produkten oder ihrer Firma? 
          Dann sind sie bei uns genau richtig. Unser Team kann bei Ihnen vor Ort professionelle Bilder aufnehmen. `,
          bgColor:"indigo-100",
          imagePath:fotografyImg,
          reverse:false,
          buttonText:"Mehr zur Fotografie"}} 
        />
        <SplitBoxImgAndText args={{
          headerText:"Die Kontrolle selbst übernehmen",
          bodyText:`Alle unsere Webseiten werden verwenden die CMS Technologie. 
          CMS steht für Content-Management-System. Auf Deutsch, 
          nachdem ihre Webseite ihnen Schlüsselfertig übergeben wurde haben sie die Möglichkeit 
          Texte, Bilder und Kleinigkeiten selbst zu ändern. So bleibt ihre Webseite stets aktuell.`,
          bgColor:"white",
          imagePath:pageBuilderImg,
          reverse:true,
          buttonText:"Mehr zu CMS"}} 
        />
        <SplitBoxImgAndText args={{
          headerText:"Mehr als gutes Design",
          bodyText:`Ihre Webseite soll mehr als nur gut aussehen? Auch dann sind sie bei uns genau richtig. 
          Dadurch, dass wir keine fertigen Baukästen verwenden, können wir dafür sorgen, dass ihre 
          Webseite auch durch Funktion glänzt. `,
          bgColor:"indigo-100",
          imagePath:functionImg,
          reverse:false,
          buttonText:"Mehr dazu"}} 
        />
        <SplitBoxImgAndText args={{
          headerText:"Unsere Arbeit",
          bodyText:`Genug der großen Worte. Schauen sie sich am besten unsere Arbeit an und entscheiden sich dann.`,
          bgColor:"white",
          imagePath:workImg,
          reverse:true,
          buttonText:"Unsere Arbeit"}} 
        />
        {/* <NochFragen args={{title:"Noch Fragen",headerText:"None"}}/> */}
        <Footer />
        
      </div>
    </div>
    </Router>
  );
}

export default App;
