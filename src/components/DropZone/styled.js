import styled from 'styled-components'
import ButtonS from '@material-ui/core/Button'

export const DropContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Drop = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 5px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;
    width: 50vw;
    margin: 10px;
`

export const CancelButton = styled(ButtonS)`
    && {
        margin-top: 10px;
    }

`

const getColor = (props) => {
    if (props.isDragAccept) {
        return 'rgba(116,103,239, 0.15)';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
  }