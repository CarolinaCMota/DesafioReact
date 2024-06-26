import { Container } from './styles';

export function Button({ title, loading = false, children, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}
        > {children}
            {loading ? 'Carregando...' : title}
        </Container>
    );
}