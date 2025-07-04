import type { RootState } from '@react-three/fiber';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

const CloudShaderMesh = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state: RootState) => {
    const { clock, mouse, gl } = state;
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial;
      material.uniforms.u_mouse.value = [mouse.x / 2 + 0.5, mouse.y / 2 + 0.5];
      material.uniforms.u_time.value = clock.getElapsedTime();
      const c = gl.domElement.getBoundingClientRect();
      material.uniforms.u_resolution.value = [c.width, c.height];
    }
  });

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      fragmentShader: `#ifdef GL_ES
  precision mediump float;
#endif

// UNIFORMS
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec4 u_colors[2];
uniform float u_speed;
uniform float u_time;
uniform float u_scale; 
uniform float light;
uniform float shadow;
uniform float tint;
uniform float coverage;
uniform float alpha;
    
const float cloudalpha = 20.;
const mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );

vec2 hash( vec2 p ) {
	p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
	return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

float noise( in vec2 p ) {
    const float K1 = 0.366025404; // (sqrt(3)-1)/2;
    const float K2 = 0.211324865; // (3-sqrt(3))/6;
	vec2 i = floor(p + (p.x+p.y)*K1);	
    vec2 a = p - i + (i.x+i.y)*K2;
    vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0); //vec2 of = 0.5 + 0.5*vec2(sign(a.x-a.y), sign(a.y-a.x));
    vec2 b = a - o + K2;
	vec2 c = a - 1.0 + 2.0*K2;
    vec3 h = max(0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
	vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
    return dot(n, vec3(70.0));	
}

float fbm(vec2 n) {
	float total = 0.0, amplitude = 0.1;
	for (int i = 0; i < 7; i++) {
		total += noise(n) * amplitude;
		n = m * n;
		amplitude *= 0.4;
	}
	return total;
}

// -----------------------------------------------

void main( ) {
    vec2 p = gl_FragCoord.xy / u_resolution.xy;
	vec2 uv = p*vec2(u_resolution.x/u_resolution.y,1.0);    
	  float speed = u_speed * 0.1;
    float time = u_time * speed;
    float scale = (1. - u_scale);
    float q = fbm(uv * scale * 0.5);
    
    
    
    //ridged noise shape
	float r = 0.0;
	uv *= scale;
    uv -= q - time;
    float weight = 0.8;
    for (int i=0; i<8; i++){
		r += abs(weight*noise( uv ));
        uv = m*uv + time;
		weight *= 0.7;
    }
    
    //noise shape
	float f = 0.0;
    uv = p*vec2(u_resolution.x/u_resolution.y,1.0);
	uv *= scale;
    uv -= q - time;
    weight = 0.7;
    for (int i=0; i<8; i++){
		f += weight*noise( uv );
        uv = m*uv + time;
		weight *= 0.6;
    }
    
    f *= r + f;
    
    //noise colour
    float c = 0.0;
    time = u_time * speed * 2.0;
    uv = p*vec2(u_resolution.x/u_resolution.y,1.0);
	uv *= scale*2.0;
    uv -= q - time;
    weight = 0.4;
    for (int i=0; i<7; i++){
		c += weight*noise( uv );
        uv = m*uv + time;
		weight *= 0.6;
    }
    
    //noise ridge colour
    float c1 = 0.0;
    time = u_time * speed * 3.0;
    uv = p*vec2(u_resolution.x/u_resolution.y,1.0);
	uv *= scale*3.0;
    uv -= q - time;
    weight = 0.4;
    for (int i=0; i<7; i++){
		c1 += abs(weight*noise( uv ));
        uv = m*uv + time;
		weight *= 0.6;
    }
	
    c += c1;
    
    vec4 skycolour = mix(u_colors[1], u_colors[0], p.y);
    vec4 cloudcolour = vec4(1.0, 1.0, 1.0,1.0) * clamp(((1.0-shadow) + light*c), 0.0, 1.0);
   
    f = coverage + cloudalpha*alpha*f*r;
    
    vec4 result = mix(skycolour, clamp(tint * skycolour + cloudcolour, 0.0, 1.0), clamp(f + c, 0.0, 1.0));
    
	  gl_FragColor = result;
	
}`,
      vertexShader: `
            void main() {
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      uniforms: {
        u_speed: { value: 0.196 },
        u_scale: { value: 0 },
        u_colors: {
          value: [new THREE.Vector4(1, 1, 1, 0), new THREE.Vector4(0, 0, 0, 0)],
        },
        light: { value: 0.5 },
        shadow: { value: 0.5 },
        tint: { value: 0.596 },
        coverage: { value: 0.276 },
        alpha: { value: 1 },
        u_time: { value: 0 },
        u_mouse: { value: [0, 0] },
        u_resolution: { value: [240, 580] },
      },
      wireframe: false,
      dithering: false,
      side: THREE.DoubleSide,
      transparent: true,
    });
  }, []);

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]}>
      <planeGeometry args={[240, 580]} />
      <primitive object={shaderMaterial} />
    </mesh>
  );
};

interface CloudTextureBackgroundProps {
  className?: string;
}

const CloudTextureBackground: React.FC<CloudTextureBackgroundProps> = ({
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        gl={{
          preserveDrawingBuffer: true,
          premultipliedAlpha: false,
          alpha: true,
          antialias: true,
          precision: 'highp',
          powerPreference: 'high-performance',
        }}
        resize={{
          debounce: 0,
          scroll: false,
          offsetSize: true,
        }}
        dpr={1}
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5],
        }}
        style={{ height: '100%', width: '100%' }}
      >
        <CloudShaderMesh />
      </Canvas>
    </div>
  );
};

export default CloudTextureBackground;
