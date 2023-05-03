import Card from 'react-bootstrap/Card';
import './ListCards.css'
import { useEffect, useState } from "react"


const ListCards = (props) => {


    //con filtro
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(' https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(countries => setCountries(countries))

    }, [])


    const filteredData = countries.filter((el) => {
        if (props.input === '') {
            return el;
        }

        else {
            return el.name.official.toLowerCase().includes(props.input)
        }
    })
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8
    const pageNumbers = []

    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage
    const currentCountries = filteredData.slice(firstIndex, lastIndex)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }


    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }



    //sin filtro

    // const [currentPage, setCurrentPage] = useState(1)
    // const itemsPerPage = 8
    // const pageNumbers = []

    // const lastIndex = currentPage * itemsPerPage
    // const firstIndex = lastIndex - itemsPerPage
    // const currentCountries = countries.slice(firstIndex, lastIndex)

    // const handlePageChange = (page) => {
    //     setCurrentPage(page)
    // }

    // const handleNextPage = () => {
    //     setCurrentPage(currentPage + 1)
    // }

    // const handlePrevPage = () => {
    //     setCurrentPage(currentPage - 1)
    // }


    // for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
    //     pageNumbers.push(i);
    // }








    return (
        <>
            {filteredData.length > 0 && (
                <>

                    {currentCountries.map((country) => {

                        return (
                            <>
                                <Card style={{ width: '18rem' }} key={country.alpha3Code} data-example={country} >
                                    <Card.Img variant="top" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} style={{ width: '100%' }} />
                                    <Card.Body>
                                        <Card.Title>{country.name.official}</Card.Title>
                                        <Card.Text>
                                            <p>Capital:{country.capital}</p>
                                            <p>Area:{country.area} </p>
                                            <p>Region:{country.region}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card >

                            </>
                        );
                    })}
                </>
            )
            }

            <div className="pageBtn">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <div>
                    {pageNumbers.map(number => (
                        <button key={number} onClick={() => handlePageChange(number)} disabled={number === currentPage}>
                            {number}
                        </button>
                    ))}
                </div>
                <button onClick={handleNextPage} disabled={lastIndex >= countries.length}>
                    Next
                </button>
            </div>


        </>
    )
}

export default ListCards