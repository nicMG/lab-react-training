
function NumberTable(props) {

    const {limit} = props

    let list = []
    for(let i = 1; i <= limit; i++){
        list.push(i)
    }
    

    return (
        <div>
            {
                list.map((ele) => {
                    if(ele % 2 == 0){
                        return (
                            <div className="red">
                                {ele} 
                            </div>
                        )
                    }
                    else{
                        return(
                            <div className="white">
                                {ele} 
                            </div>
                        )
                    }

                })
            }
        </div>
    )
}

export default NumberTable
