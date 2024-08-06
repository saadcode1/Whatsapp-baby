import styled from "@emotion/styled"
import { TextField } from "@mui/material"
export default function Search(){
    const SearchBar=styled(TextField)`
    width:100%;
    background-color:grey;
    border-radius:15px;
    `
    return(
        < SearchBar id="standard-basic" label="Search..." variant="standard" />
    )
}