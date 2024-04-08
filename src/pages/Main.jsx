import Header from "../Componentes/Header/Header";
import Apresentacao from "../Componentes/Apresentacao/Apresentacao";
import VideoComponent from "../Componentes/ContainerVideo/ContainerVideo";
import Professores from "../Componentes/Professores/Professores";
import NovosProfessores from "../Componentes/NovosProfessores/NovosProfessores";
import Faq from "../Componentes/ContainerInformacoes/ContainerInformacoes";
import Parceiros from "../Componentes/Parceiros/Parceiros";

export default function Main(){
    return(
        <div>
            <Header />
            <Apresentacao />
            <VideoComponent />
            <Professores />
            <NovosProfessores />
            <Faq />
            <Parceiros />
        </div>
    );
}