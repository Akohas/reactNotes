import styled from 'styled-components';

export const Button = styled.button`
    background: #fff;
    border-radius: 50px;
    border: none;
    padding: 15px 45px;
    cursor: pointer;
    font-size: 20px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:focus{
    outline: none;
    }
`;
export const Wrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding-top: 30px;
`;

export const ButtonAddNote = Button.extend`
    margin-right: 20px;
`;
export const Menu = styled.div`
    max-width: 600px;
    margin: 0 auto;
    margin-top: 30px;
`;
export const NoteStyled = styled.div`
    margin-top: 10px;
    padding: 25px;
    background: ${props => (props.disabled ? '#e4e4e4' : '#fff')};
    &:first-child{
        margin-top: 0;
    }
`;
export const Input = styled.input`
    border: none;
    border-bottom: 2px solid ${props => (props.isEmpty ? '#adadad' : 'transparent')};
    width: 100%;
    height: 40px;
    padding: 0 25px;
    transition: 0.3s;
    &:focus{
        outline: none;
        border-bottom: 2px solid #61dbe4;
    }
    &:disabled{
        background: transparent;
        border-color: transparent;
    }
`;
export const Count = styled.span`
    float: right;
`;
export const DeleteButton = Button.extend`
    margin-top: 30px;
    font-size: 14px;
`;

export const Form = styled.form`
    width: 90%;
    display: inline-block
`;

export const Panel = styled.div`
    max-height: ${props => (props.hide ? '0' : '300px')};
    background: #fff;
    overflow: hidden;
    width: 400px;
    margin: 10px auto 0;
    transition: 0.4s;
    border-radius: 5px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.28);
    
`;

export const PanelItem = styled.button`
    width: 100%;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #adadad;
    background: transparent;
    cursor: poitner;
    &:last-child{
        border: none
    }
    &:focus{
        outline: none;
    }
`;

