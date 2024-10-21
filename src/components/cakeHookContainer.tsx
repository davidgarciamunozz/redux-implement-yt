//import useSelector hook and dispatch hook from react-redux
import { useSelector, useDispatch } from 'react-redux';
//import type
import { CakeState } from '../redux/cake/cakeReducer';
import { buyCake } from '../redux/cake/actions';


export default function CakeHookContainer() {
    const numOfCakes = useSelector((state: CakeState) => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div className="flex flex-col justify-center items-center gap-3 mt-4">
            <p>Hooks</p>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())} className="border border-black rounded-sm px-2 hover:bg-slate-200">Buy Cake</button>
        </div>
    )
}
