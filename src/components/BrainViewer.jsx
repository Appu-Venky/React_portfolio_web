// BrainViewer.jsx
import { Environment, Html, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Brain = () => {
    const { scene } = useGLTF('/models/brain.glb');
    return <primitive object={scene} scale={1.5} />;
};

export default function BrainViewer({ isDarkMode }) {
    return (
        <div style={{
            width: '100%',
            height: '400px',
            borderRadius: '10px',
            background: 'radial-gradient(circle at center, #3b82f6 0%, #000000 70%)',
            position: 'relative',
            overflow: 'hidden',
        }}>


            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Suspense fallback={<Html center>Loading...</Html>}>
                    <Brain />
                    <Environment preset="studio" />
                </Suspense>
                <OrbitControls autoRotate enableZoom />
            </Canvas>
        </div>
    );
}
