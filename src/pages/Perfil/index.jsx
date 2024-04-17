
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Container } from "./styles";

export function Perfil() {
    return (

        <>
            <Container>
                <div>
                    <ButtonText title="Voltar para o login" />
                </div>
                <div>
                    <img
                        src="https://avatars.githubusercontent.com/u/117762777?v=4"
                        alt="Foto do usuário"
                    />
                </div>

                <form>
                    <Input placeholder="Nome" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha atual" />
                    <Input placeholder="Nova senha" />
                    <Button> Salvar </Button>

                </form>
            </Container >
        </>
    )
}