const Numbers3 = ({handleClick}) => {
    const buttons =[
        '3', 
        '2', 
        '1',  
        '0', 
    ];
    return ( 
    <div>
        {buttons.map((button)=>(
            <button onClick={handleClick} key={button}>{button}</button>
        ))}
    </div> 
    );
}

export default Numbers3;