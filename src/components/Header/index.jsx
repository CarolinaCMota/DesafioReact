import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'
import { Input } from '../Input'

export function Header() {
    return (
        <Container>

            <Logout>
                <div><span>RocketMovies</span></div>
            </Logout>
            <Input placeholder= "Pesquisar por título"/>

            <Profile>
                <img
                    src="https://avatars.githubusercontent.com/u/117762777?v=4"
                    alt="Foto do usuário"
                />

                <div>
                    <strong>Carolina Mota</strong>
                    <span>Sair</span>
                </div>
            </Profile>

        </Container>
    )
}