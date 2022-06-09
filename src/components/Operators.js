
const Operators = ({handleClick}) => {
    const operatorButtons = ['+', '-', '*', '/', '=', 'c', '.']
    return ( 
    <div>
        {operatorButtons.map((button)=>(
            <button onClick={handleClick} key={button}>{button}</button>
        ))}
    </div>
    );
};

export default Operators;
