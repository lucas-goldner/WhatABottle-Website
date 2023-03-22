import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    bottel_body: THREE.Mesh;
    cap: THREE.Mesh;
    patch: THREE.Mesh;
  };
  materials: {};
};
