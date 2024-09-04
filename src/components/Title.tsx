import styled from "styled-components";

type Props = {
    children?: any;
};

const StyledTitle = styled.div`
    max-width: 1430px;
    padding: 0 15px;
    margin: 60px auto 30px;
    font-size: 52px;
    font-weight: 700;
    color: #00A86B;
    line-height: 110%;
    
    @media screen and (max-width: 768px) {
        font-size: 36px;
        text-align: center;
    }
`

const Title = (props: Props) => {
    return (
        <StyledTitle>
            {props.children}
        </StyledTitle>
    );
};

export default Title