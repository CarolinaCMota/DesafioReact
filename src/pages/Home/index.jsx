import { Header } from "../../components/Header";
import { Gender } from "../../components/Gender";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { FaStar } from "react-icons/fa";

export function Home() {
    return (
        <>
            <Header />
            <Container>
                <div className="estilo">
                    <h1>Meus filmes</h1>
                    <Button> + Adicionar filme </Button>
                </div>
                <div class="resumo">
                    <h2>Interestellar</h2>
                    <FaStar /><FaStar /><FaStar /><FaStar />
                    <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de...</p>
                <Gender/>
                </div>
                <div class="resumo">
                    <h2>Interestellar</h2>
                    <FaStar /><FaStar /><FaStar /><FaStar />
                    <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de...</p>
                <Gender/>
                </div>
                <div class="resumo">
                    <h2>Interestellar</h2>
                    <FaStar /><FaStar /><FaStar /><FaStar />
                    <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de...</p>
                <Gender/>
                </div>

            </Container>

        </>

    )
};