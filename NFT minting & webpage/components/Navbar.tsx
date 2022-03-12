import styled from "styled-components";

const Container = styled("div")`
    width: 100vw;
    height: 90px;
    background-color: #6946E7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Title = styled("h1")`
    margin: 0;
    white-space: nowrap;

`

const Link = styled("a")`
    
    margin: 1rem;
    cursor: pointer;
    color: initial;
    text-decoration: none;
    position: absolute;
    right: 5%;
    @media (max-width: 700px) {
        position: initial;
    }
`

const Navbar = () => {
    return (
        <Container>
            <Title>
                SpaceThusiasts
            </Title>
        
        </Container>
    )
}

export default Navbar;