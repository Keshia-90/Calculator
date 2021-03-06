

const Numbers = ({handleClick}) => {
    const buttons =[
        '9', 
        '8', 
        '7', 
    ];
    return ( 
    <div>
        {buttons.map((button)=>(
            <button onClick={handleClick} key={button}>{button}</button>
        ))}
    </div> 
    );
}

export default Numbers;