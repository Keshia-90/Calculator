

const Numbers2 = ({handleClick}) => {
    const buttons =[
        '6', 
        '5', 
        '4',  
    ];
    return ( 
    <div>
        {buttons.map((button)=>(
            <button onClick={handleClick} key={button}>{button}</button>
        ))}
    </div> 
    );
}

export default Numbers2;