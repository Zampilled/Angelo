import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


function Stage(props) {

    return (

        <mesh {...props} recieveShadow={true}>
            <boxBufferGeometry args={[5,5,5]} />
            <meshPhysicalMaterial color='purple' />
        </mesh>
    );

}

export default Stage