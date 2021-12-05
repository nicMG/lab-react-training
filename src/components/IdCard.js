
function IdCard(props) {

    const {picture, gender, firstName, lastName, height, birth} = props
    console.log(birth)

    return (
        <div className="Nico">
            <img src={picture}/>
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Height: {height}</h3>
            {/* <h3>Birth: {birth}</h3> */}
        </div>
    )
}


export default IdCard