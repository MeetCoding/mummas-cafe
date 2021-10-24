const Option = props => {

    function clickHandler() {
        switch (props.type) {
            case 'size': props.setSize(props.name); break;
            case 'extras': props.setExtras(props.name); break;
            default: return;
        }
    }

    const className = props.isSelected ? "option selected-option" : "option";

    return (
        <button onClick={clickHandler} className={className}>
            {props.name}
        </button>
    )
}

export default Option;