import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Lpage from './Lpage.jsx'

export default function App(){
    return(
        <>
        <Lpage />
        </>
    )
}
/*
<Canvas
style={{ width: '100%', height: '100%' }}
shadows
camera={ {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ - 4, 3, 6 ]
} }
>
<Experience />
</Canvas>
*/