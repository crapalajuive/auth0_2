import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BrowseByYear = () => {
    const [allWines, setAllWines] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        fetch("/wines")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data);
                setAllWines(data.data);
            })
            .catch(error => {
                console.log("error")
            })
    }, []);

    return (

        <>
        <h1>Browse by vintage </h1>
        <Wrapper>
            {allWines.length > 0 ? (
                allWines.map((wine) => {

                    // // const handleClick = (e) => {
                    // //     e.preventDefault();

                    // //     navigate(`/year/${year}`);
                    // // }
                    return (
                        <ul key ={wine._id}>{wine.year}</ul>
                    )
                })
            )
                : (
                    <Wrapper>loading......</Wrapper>
                )}
                </Wrapper>
        </>

    )
};

const Wrapper = styled.div`
`;



const Button = styled.button`
text-decoration: none;
padding: 10px;
font-weight: bold;
color: #082A63;

&:active {
    color: #3C73CF;
}

&:hover {
    color: #3C73CF;
}
`;



export default BrowseByYear;
