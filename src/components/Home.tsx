import React, { useEffect } from 'react';
import * as THREE from 'three';

export const width = window.innerWidth;
export const height = window.innerHeight;

export const scene = new THREE.Scene();

export const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
camera.position.set(0, 0, 100);

export const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 1);
renderer.setSize(width, height);

export const renderScene = () => {
  requestAnimationFrame(renderScene)
  window.addEventListener('resize', handleWindowEvent)
}

export const handleWindowEvent = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const Home: React.FC = () => {
  useEffect(() => {
    document.body.appendChild(renderer.domElement)
    renderScene()
    renderer.render(scene, camera)
  })
  return <div></div>;
};

export default Home;
