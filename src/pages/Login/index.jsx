import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Login() {
    return (

        <>
            <Container>
                <div>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Faça o seu login</h2>
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" />
                    <Button> Entrar </Button>
                    <ButtonText title="Criar conta" />
                </div>

                <div>
                    <img src="../../../src/assets/image.png" alt="imagem de cinema"></img>
                </div>



            </Container>
        </>
    )
}