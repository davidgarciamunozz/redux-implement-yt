//import connectors
import { connect } from "react-redux" //method that will allow us to connect our component to the redux store
import { mapStateToProps, mapDispatchToProps } from "../redux/cake/cakeConnectors"

interface CakeContainerProps {
    numOfCakes: number;
    buyCake: () => void;
}

const CakeContainer = (props:CakeContainerProps) => {
    const { numOfCakes, buyCake } = props;
    return (
        <div className="flex flex-col justify-center items-center gap-3 mt-4">
            <h1>Number of Available Cakes: {numOfCakes} </h1>
            <button className="border border-black rounded-sm px-2 hover:bg-slate-200">Buy Cake</button>
        </div>
    )
}

const connectedCakeContainer = connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

export default connectedCakeContainer;